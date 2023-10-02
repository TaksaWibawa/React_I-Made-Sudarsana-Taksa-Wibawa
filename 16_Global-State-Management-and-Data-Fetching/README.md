# Global State Management and Data Fetching

1. Global State Management adalah sebuah state yang dapat diakses oleh semua component yang ada di dalam aplikasi kita. Global State Management ini biasanya digunakan untuk menyimpan data-data yang bersifat global seperti data user yang sedang login, data cart, data theme, dan lain-lain.

2. Salah satu tools yang digunakan untuk melakukan Global State Management adalah Redux Toolkit. Redux Toolkit ini adalah sebuah library yang dibuat oleh Redux untuk mempermudah kita dalam melakukan Global State Management. Hal ini dikarenakan Redux Toolkit:

   - Membantu menulis aplikasi yang berperilaku konsisten, berjalan di berbagai lingkungan (client, server, dan native), dan mudah diuji.

   - Membantu menulis kode yang lebih sedikit, yang berarti lebih sedikit kesalahan dan lebih sedikit waktu debugging.

   - Memusatkan status aplikasi dan logika bisnis dalam satu tempat, sehingga lebih mudah untuk memahami bagaimana aplikasi bekerja, dan lebih mudah untuk memperbarui saat persyaratan berubah.

3. Redux digunakan ketika kita ingin membuat sebuah aplikasi yang memiliki state yang kompleks. Redux sendiri adalah sebuah library yang digunakan untuk mengelola state secara global. Redux sendiri memiliki 3 konsep utama, yaitu:

   - Store: Tempat menyimpan state secara global.

   - Action: Objek yang digunakan untuk mengirim data ke store.

   - Reducer: Fungsi yang digunakan untuk mengubah state berdasarkan action.

4. Data Fetching adalah proses pengambilan data dari API. Data Fetching ini biasanya dilakukan ketika kita ingin menampilkan data dari API ke dalam aplikasi kita. Data Fetching ini dapat dilakukan dengan menggunakan fetch API, axios, atau library lainnya.

5. Pada Redux, kita dapat melakukan data fetching dengan menggunakan Redux Thunk. Redux Thunk ini adalah sebuah middleware yang digunakan untuk melakukan proses asynchronous pada Redux. Redux Thunk ini dapat digunakan untuk melakukan data fetching.

6. Untuk melakukan data fetching dengan Redux Thunk, kita perlu menginstall library redux-thunk terlebih dahulu. Setelah itu, kita perlu mengubah store yang ada di aplikasi kita dengan menambahkan middleware redux-thunk. Setelah itu, kita dapat membuat action creator yang berupa sebuah fungsi yang menerima dispatch sebagai parameter. Di dalam action creator tersebut, kita dapat melakukan data fetching dan mengirimkan data yang didapat ke store dengan menggunakan dispatch.
