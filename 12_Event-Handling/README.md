# Event Handling

1. Event handling pada React adalah sebuah mekanisme yang digunakan untuk menangani interaksi pengguna dengan aplikasi, seperti klik tombol, input teks, dan lain-lain. Contoh event handling pada React adalah sebagai berikut:

    ```javascript
    <button onClick={handleClick}>
      Click Me!
    </button>

    function handleClick() {
      alert('Clicked!');
    }
    ```

    yang mana pada contoh di atas, ketika tombol diklik, maka akan muncul sebuah alert dengan tulisan 'Clicked!'.

2. Pada React, event handling dapat dilakukan dengan menggunakan atribut HTML seperti `onClick`, `onChange`, `onSubmit`, dan lain-lain. Atribut tersebut dapat digunakan pada elemen HTML seperti `<button>`, `<input>`, `<form>`, dan lain-lain.

3. Component dibagi menjadi dua jenis, yaitu stateful component dan stateless component. Stateful component adalah component yang memiliki state, sedangkan stateless component adalah component yang tidak memiliki state. Stateful component biasanya dibuat dengan menggunakan class, sedangkan stateless component biasanya dibuat dengan menggunakan function.

4. Stateful component biasanya digunakan untuk menangani event handling, karena stateful component dapat memiliki state yang dapat diubah-ubah nilainya. Contoh stateful component yang digunakan untuk menangani event handling adalah sebagai berikut:

    ```javascript
    class Button extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          count: 0
        };
      }

      handleClick() {
        this.setState({
          count: this.state.count + 1
        });
      }

      render() {
        return (
          <button onClick={() => this.handleClick()}>
            Click Me!
          </button>
        );
      }
    }
    ```

    yang mana pada contoh di atas, ketika tombol diklik, maka nilai dari state `count` akan bertambah 1.

5. Sedangkan stateless component biasanya digunakan untuk menampilkan data saja, karena stateless component tidak dapat memiliki state. Contoh stateless component yang digunakan untuk menampilkan data adalah sebagai berikut:

    ```javascript
    function Button(props) {
      return (
        <button onClick={props.onClick}>
          Click Me!
        </button>
      );
    }
    ```

    yang mana pada contoh di atas, ketika tombol diklik, maka akan memanggil fungsi `onClick` yang diberikan oleh parent component.
