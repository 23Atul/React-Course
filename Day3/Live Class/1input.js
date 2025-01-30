// Handling user input in react


// flow: 1. catch value of input box --> 2. add those values in an array  --> 3. map that array in li tag


const Todo = ()=>{

    const [ task, setTask]=React.useState("")
    const [ todo,setTodo]=React.useState([])



    function handleInput(e){
        setTask(e.target.value)
    }

    function handleTask(){
        setTodo([...todo,task])
        setTask("") // this helps to update the task back to empty string so after user presses the button the input box becomes empty
    }


    return(
        <>
            <h1>Todo List</h1>
            <input onChange={handleInput} value={task} type="text" placeholder="Enter Task"></input> 
            <button onClick={handleTask}>Add Task to todo</button>
            <ul>
                {todo.map(( el)=>{
                    return(
                        <li>{el}</li>
                    )
                })}
            </ul>
        
        </>
        
    )
}
ReactDOM.createRoot(document.querySelector("#root")).render(<Todo/>)
























// const Todo = () => {

//     const [currentTodo, setCurrentTodo] = React.useState("")
//     const [TodoList, setTodoList] = React.useState([])


//     function handleInput(e) {
//         // console.log(e.target.value);
//         setCurrentTodo(e.target.value)

//     }

//     function handleAddTask() {
//         setTodoList([...TodoList, currentTodo])
//     }
//     console.log(TodoList);

//     return (
//         <>
//             <h1>Todo </h1>
//             <input onChange={handleInput} type="text" placeholder="Enter Task"></input>
//             <button onClick={handleAddTask}>Add Task</button>
//             {/* <p>{currentTodo}</p> */}
//             <ul>
//                 {TodoList.map((el) => {
//                     return (
//                         <li>{el}</li>
//                     )
//                 })}
//             </ul>
//         </>
//     )

// }

// ReactDOM.createRoot(document.querySelector("#root")).render(<Todo />)