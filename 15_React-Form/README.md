# React Form

1. Basic Form adalah salah satu cara untuk mengambil data dari user, dan mengirimkan data tersebut ke server. Form dapat digunakan untuk mengatur input dari user seperti text, password, email, number, dll. Form banyak dijumpai pada website yang membutuhkan input dari user, seperti website e-commerce, social media, dan lain-lain.

2. Macam - macam Form adalah sebagai berikut:
    - Contoh Text Input

    ```jsx
    <input type="text" />
    ```

    - Contoh Text Area

    ```jsx
    <textarea></textarea>
    ```

    - Contoh Radio Button

    ```jsx
    <input type="radio" />
    <label>Radio</label>
    ```

    - Contoh Checkbox

    ```jsx
    <input type="checkbox" />
    <label>Checkbox</label>
    ```

    - Contoh Select

    ```jsx
    <select>
      <option value="Select">Select</option>
      <option value="1">1</option>
      <option value="2">2</option>
    </select>
    ```

    - Contoh File

    ```jsx
    <input type="file" />
    ```

    - Contoh Submit

    ```jsx
    <input type="submit" />
    ```

3. Basic Validation dalam React Form biasanya digunakan atas dasar alasan berikut:
    - Memastikan bahwa data yang dikirimkan oleh user sesuai dengan format yang diinginkan.
    - Memastikan bahwa data yang dikirimkan oleh user tidak kosong.
    - Memastikan bahwa data yang dikirimkan oleh user tidak melebihi batas yang ditentukan.

4. Tipe Validasi Form dibagi menjadi 2, yaitu:
    - Client Side Validation, yaitu validasi yang dilakukan oleh client (browser) sebelum data dikirimkan ke server. Client Side Validation biasanya dilakukan dengan menggunakan JavaScript.
    - Server Side Validation, yaitu validasi yang dilakukan oleh server setelah data dikirimkan oleh client. Server Side Validation biasanya dilakukan dengan menggunakan bahasa pemrograman yang digunakan oleh server, seperti PHP, Python, Ruby, dan lain-lain.
