import React, {useState} from 'react'       // impor useState hook yang terdapat dalam library React

function App() {
  // Deklarasi dua variabel state menggunakan useState
  const [list, setList] = useState([]);     // variabel 'list' merupakan array [] yang digunakan untuk menyimpan daftar To-Do
  const [input, setInput] = useState("");   // variabel 'input' merupakan string "" yang digunakan untuk menyimpan input dari user
// import React from 'react'

// function App(){
//   const [list, setList] = React.useState([]);
//   const [input, setInput] = React.useState("");

  const addTodo = (todo) => {       // variabel addTodo akan menerima satu argumen 'todo' berupa string dari To-Do yang diinput user
    const newTodo = {               // variabel newTodo untuk menambahkan To-Do baru yang diinput user
      id: Math.random(),            // otomasi ID acak untuk setiap To-Do yang diinput
      todo: todo                    // menyimpan string To-Do yang diinput user
    }
    console.log(newTodo)            // mencetak todo ke konsol agar dapat dilacak
    setList([...list, newTodo]);    // menambahkan variabel newTodo yang telah diinput ke dalam list array

    setInput("");                   // mengosongkan input setelah todo ditambahkan
  };

  const deleteTodo = (id) => {                                // variabel deleteTodo menghapus todo dalam list array berdasarkan ID
    const newList = list.filter((todo) => todo.id !== id);    // variabel newList membuat list baru berdasarkan ID yang tidak terseleksi

    setList(newList);                                         // memperbarui list array berdasarkan variabel newList
  }

  return (
    <div>                                                     // div = division (bungkus elemen)
      <h1>To-Do List</h1>                                     // header "To-Do List"
      <input
        type="text"                                           // string
        value={input}                                         
        onChange={(e) => console.log(e.target.value)}         // mengupdate state input saat nilai input berubah (bingung)
        
      />
      <button onClick={() => addTodo(input)}>Add</button>     // menjalankan fungsi addTodo ketika tombol Add diklik dengan nilai input sebagai argumen
      <ul>                                                    // ul = undordered list (membuat list tak berurutan)
        {list.map((todo) => (                                 // 
          <li key={todo.id}>
            {todo.todo}
            <button onClick={() => deleteTodo(todo.id)}>&times;</button>    // menjalankan fungsi deleteTodo To-Do ketika tombol Times diklik dengan todo.id sebagai argumen 
          </li>                                                             // li = list item (merepresentasikan item dalam list)
        ))}
      </ul>
    </div>
  );
}

export default App