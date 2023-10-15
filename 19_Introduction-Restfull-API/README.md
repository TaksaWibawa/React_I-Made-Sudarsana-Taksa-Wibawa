# Introduction to Restfull API

1. Restfull API adalah sebuah standar arsitektur komunikasi berbasis web yang sering diterapkan dalam pengembangan layanan berbasis web. Restfull API merupakan salah satu dari desain arsitektur yang terdapat di dalam API itu sendiri. API sendiri merupakan singkatan dari Application Programming Interface atau antarmuka pemrograman aplikasi. API merupakan sebuah software yang memungkinkan dua aplikasi yang berbeda dapat berkomunikasi satu sama lain. API juga dapat diartikan sebagai sebuah perangkat lunak yang memungkinkan para developer untuk mengintegrasikan dan mengizinkan dua aplikasi yang berbeda untuk saling terhubung satu sama lain.

2. Terdapat beberapa method yang digunakan dalam Restfull API, yaitu:

   - GET, digunakan untuk membaca data/resource dari REST server
   - POST, digunakan untuk membuat sebuah data/resource baru di REST server
   - PUT, digunakan untuk memperbaharui data/resource di REST server
   - DELETE, digunakan untuk menghapus data/resource dari REST server

3. Untuk melakukan request ke server, kita dapat menggunakan Axios. Axios adalah sebuah library yang digunakan untuk melakukan request ke server. Contoh penggunaan Axios adalah sebagai berikut:

   ```javascript
   axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
     console.log(response.data);
    })
    .catch((error) => {
     console.log(error);
    });
   ```
