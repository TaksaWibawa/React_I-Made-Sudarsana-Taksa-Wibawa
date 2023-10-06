# Restfull API With JavaScript

1. Restfull API merupakan salah satu dari desain arsitektur yang terdapat di dalam API itu sendiri. API sendiri merupakan singkatan dari Application Programming Interface atau antarmuka pemrograman aplikasi. API merupakan sebuah software yang memungkinkan dua aplikasi yang berbeda dapat berkomunikasi satu sama lain.

2. Terdapat beberapa method yang digunakan dalam Restfull API, yaitu:

   - GET, digunakan untuk membaca data/resource dari REST server
   - POST, digunakan untuk membuat sebuah data/resource baru di REST server
   - PUT, digunakan untuk memperbaharui data/resource di REST server
   - DELETE, digunakan untuk menghapus data/resource dari REST server

3. Dalam Redux, Hit API dilakukan dengan memanfaatkan Extra Reducer. Extra Reducer adalah sebuah fungsi yang digunakan untuk melakukan request ke server. Contoh penggunaan Extra Reducer adalah sebagai berikut:

   ```javascript
   import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
   import axios from "axios";
   
   export const getPosts = createAsyncThunk(
    "posts/getPosts",
    async (param, thunkAPI) => {
     try {
      const response = await axios.get(
       "https://jsonplaceholder.typicode.com/posts"
      );
      return response.data;
     } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
     }
    }
   );
   
   const posts = createSlice({
    name: "posts",
    initialState: {
     posts: [],
     isLoading: false,
     error: false,
    },
    reducers: {},
    extraReducers: {
     [getPosts.pending]: (state, action) => {
      state.isLoading = true;
      state.error = false;
     },
     [getPosts.fulfilled]: (state, { payload }) => {
      state.posts = payload;
      state.isLoading = false;
      state.error = false;
     },
     [getPosts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
     },
    },
   });
   
   export default posts.reducer;
   ```
  
4. Hal ini bertujuan untuk mempermudah proses pengambilan data dari server. Dengan menggunakan Extra Reducer, kita tidak perlu lagi membuat fungsi untuk melakukan request ke server secara manual. Kita hanya perlu memanggil fungsi yang telah dibuat oleh Extra Reducer. Contoh penggunaan Extra Reducer adalah sebagai berikut:

   ```javascript
   import { useEffect } from "react";
   import { useDispatch, useSelector } from "react-redux";
   import { getPosts } from "./postsSlice";
   
   function App() {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts.posts);
    const isLoading = useSelector((state) => state.posts.isLoading);
    const error = useSelector((state) => state.posts.error);
   
    useEffect(() => {
     dispatch(getPosts());
    }, [dispatch]);
   
    return (
     <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {posts.map((post) => (
       <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
       </div>
      ))}
     </div>
    );
   }
   
   export default App;
   ```
