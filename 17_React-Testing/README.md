# React Testing

1. React Testing adalah sebuah metode untuk menguji aplikasi React yang kita buat. Dengan melakukan testing, kita dapat memastikan bahwa aplikasi yang kita buat berjalan dengan baik dan sesuai dengan yang kita harapkan. Testing juga dapat membantu kita untuk meminimalisir terjadinya bug pada aplikasi yang kita buat.

2. Tools yang digunakan untuk melakukan testing pada React adalah Jest dan React Testing Library. Jest adalah sebuah framework untuk melakukan testing pada aplikasi JavaScript. Sedangkan React Testing Library adalah sebuah library yang digunakan untuk melakukan testing pada aplikasi React.

3. React Testing Library memiliki beberapa fungsi yang dapat digunakan untuk melakukan testing pada aplikasi React. Fungsi-fungsi tersebut antara lain:

   - render: digunakan untuk merender component React.
   - screen: digunakan untuk menyeleksi element HTML yang akan diuji.
   - fireEvent: digunakan untuk mensimulasikan sebuah event pada element HTML yang dipilih.
   - cleanup: digunakan untuk membersihkan proses render setelah proses testing selesai.

4. Untuk melakukan testing pada React, kita dapat menggunakan beberapa cara. Cara yang pertama adalah dengan menggunakan file test yang berada di dalam folder **tests**. Cara ini merupakan cara yang direkomendasikan oleh React. Cara yang kedua adalah dengan menggunakan file test yang berada di dalam folder yang sama dengan file yang akan diuji. Cara ini merupakan cara yang umum digunakan oleh developer.

5. Untuk menjalankan test, kita dapat menggunakan perintah `npm run test`. Perintah tersebut akan menjalankan semua file test yang berada di dalam folder **tests**. Jika kita ingin menjalankan file test yang berada di dalam folder yang sama dengan file yang akan diuji, kita dapat menggunakan perintah `npm run test <nama_file_test>`. Contoh: `npm run test Button.test.js`.

6. Sebelum melakukan testing, kita perlu memahami istilah - istilah yang sering digunakan dalam testing. Istilah - istilah tersebut antara lain:

   - Unit testing: melakukan testing pada sebuah unit atau bagian kecil dari aplikasi.
   - Integration testing: melakukan testing pada beberapa unit yang bekerja sama.
   - End-to-end testing: melakukan testing pada aplikasi secara keseluruhan.
