import React, { useState } from 'react'
import './style.css'

function App() {

  const [todolist, settodolist] = useState([]);


  //  Input name that Allow to go in todolist 
  const input_form = (event) => {
    event.preventDefault();
    let input_target = event.target.inputtext.value
    // alert(input_target)
    // If without fill input and click on save then come alert.. 
    if (input_target === "") {
      alert("Please Enter Something..")
      return;
    }


    // Then we check if same name already exist. so todlist not prefer same name in list 
    // if (!todolist.includes(input_target)) {

    //   settodolist([...todolist,input_target])
    //   event.target.reset(); // Clears input field after submission
    // }
    // else {
    //   alert("This name already exist in todolist")
    // }
    // you can use this line of code 21 to 29 but in this code there no added date time 

    if (!todolist.some(item => item.task === input_target)) {
      let newTask = {
        task: input_target,
        timestamp: new Date().toLocaleString()// Adding date and time
      };
      settodolist([...todolist, newTask]);
      event.target.reset();
    } else {
      alert("This name already exists in the to-do list");
    }
    //  and in this code ther is add only date and time 

  }


  //  So her we pass input in list 
  let list = todolist.map((value, index) => {


    return (
      <Todolisttag value={value.task} key={index} idexnum={index}
        todolist={todolist}
        settodolist={settodolist}
        timestamp={value.timestamp}

      />

    )
  })
  return (
    <>
      <h1>To-Do List By React js</h1>
      <form onSubmit={input_form} >
        <input type="text" name="inputtext" placeholder="Enter Your Task Here.." id='inputBox' maxLength={25}/><button>Save</button>
        <ol>
         {list}
        </ol>
      </form>

    </>
  )
}

export default App


function Todolisttag({ value, idexnum, todolist, settodolist, timestamp }) {

  const [state, setstate] = useState(false)

  let deletrow = () => {
    //Here we delet list one by one by index number 
    settodolist(todolist.filter((value, index) => index !== idexnum))

  }

  // this functin check the line through on the task 
  const checkstatus = () => {
    setstate(!state)
  }

  return (
    <li className={(state) ? 'completedtask' : ""} onClick={checkstatus}>{value}-<small>{timestamp}</small><span onClick={deletrow}>&times;</span></li>
  )
}
