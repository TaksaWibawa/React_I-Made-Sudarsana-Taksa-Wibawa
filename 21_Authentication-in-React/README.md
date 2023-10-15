# Authentication in React

1. Autentikasi adalah proses untuk memverifikasi identitas pengguna. Proses ini biasanya dilakukan dengan membandingkan data yang dimiliki pengguna dengan data yang tersimpan di database. Jika data yang dimiliki pengguna sesuai dengan data yang tersimpan di database, maka pengguna tersebut dianggap sebagai pengguna yang sah.

2. Autorisasi adalah proses untuk memverifikasi apakah pengguna memiliki akses terhadap suatu resource. Konsep ini biasanya digunakan untuk mengatur hak akses pengguna terhadap suatu resource. Sehingga muncul istilah role-based access control (RBAC) yang digunakan untuk mengatur hak akses pengguna berdasarkan role yang dimilikinya.

3. Dalam web, autentikasi dapat dilakukan dengan memanfaatkan Cookies. Cookies adalah data yang disimpan di browser pengguna. Cookies dapat digunakan untuk menyimpan data autentikasi pengguna. Dengan begitu, pengguna tidak perlu melakukan autentikasi setiap kali mengakses web.

4. Cookies biasanya akan memanfaatkan dua jenis token, yaitu access token dan refresh token. Access token adalah token yang digunakan untuk mengakses resource. Sedangkan refresh token adalah token yang digunakan untuk memperbarui access token.

5. Access token biasanya memiliki masa aktif yang pendek. Sedangkan refresh token memiliki masa aktif yang lebih panjang. Dengan begitu, refresh token dapat digunakan untuk memperbarui access token saat masa aktif access token habis.

6. Untuk melakukan refresh token, kita dapat memanfaatkan fitur refresh token yang disediakan oleh library axios. Fitur ini dapat digunakan dengan memanfaatkan interceptors. Interceptors adalah fitur yang disediakan oleh axios untuk memanipulasi request dan response.
