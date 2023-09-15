# React Hooks

1. React Hooks adalah fitur baru yang diperkenalkan oleh React versi 16.8.0 yang dibuat dengan motivasi untuk memudahkan pengembang dalam membuat komponen React yang interaktif dan dinamis. Dengan React Hooks, kita dapat membuat komponen React yang memiliki state dan lifecycle method tanpa harus membuat class.

2. Hooks pada React di antaranya adalah:
    - useState
    - useEffect
    - useContext
    - useReducer
    - useCallback
    - useMemo
    - useRef
    - useImperativeHandle
    - useLayoutEffect
    - useDebugValue
    - dan lain-lain

3. Aturan umum dalam penggunaan Hooks adalah Hooks hanya dapat digunakan pada function component dan tidak dapat digunakan pada class component, loops, conditions, atau nested functions. Selain itu, Hooks juga harus diletakkan pada posisi teratas dari function component. Hooks dapat kita panggil dari komponen React mana pun, tidak hanya pada komponen yang berada di dalam komponen induknya, dan juga dari custom Hooks.

4. useState adalah Hooks yang digunakan untuk membuat state pada function component. useState menerima satu parameter yaitu nilai awal dari state tersebut. useState akan mengembalikan dua nilai yaitu state dan fungsi untuk mengubah nilai state tersebut. useState juga dapat menerima sebuah function yang akan dijalankan untuk mengembalikan nilai awal dari state tersebut. Function ini hanya akan dijalankan sekali saja saat komponen pertama kali dirender.

5. useEffect adalah Hooks yang digunakan untuk menangani side effect pada function component. useEffect akan menerima sebuah function yang akan dijalankan setiap kali komponen dirender. useEffect juga dapat menerima parameter kedua berupa array yang berisi dependency. useEffect akan mengeksekusi function yang diberikan ketika salah satu nilai dari dependency berubah. Jika kita tidak memberikan dependency, maka useEffect akan mengeksekusi function setiap kali komponen dirender. Jika kita memberikan array kosong, maka useEffect hanya akan mengeksekusi function setelah komponen pertama kali dirender.

6. Custom Hooks adalah Hooks yang dibuat oleh pengguna React untuk digunakan kembali dalam komponen React lainnya. Custom Hooks dapat menerima parameter dan mengembalikan nilai. Custom Hooks harus diberi nama dengan diawali dengan kata use agar React dapat mengenali bahwa itu adalah custom Hooks. Custom Hooks dapat menggunakan Hooks lainnya.
