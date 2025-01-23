const todos = [
    { id: 1, title: "Buy groceries", isCompleted: false },
    { id: 2, title: "Clean the house", isCompleted: true },
    { id: 3, title: "Prepare presentation", isCompleted: false },
    { id: 4, title: "Finish homework", isCompleted: true },
    { id: 5, title: "Pay utility bills", isCompleted: false },
    { id: 6, title: "Read a book", isCompleted: true },
    { id: 7, title: "Call parents", isCompleted: false },
    { id: 8, title: "Plan weekend trip", isCompleted: false },
    { id: 9, title: "Complete project report", isCompleted: true },
    { id: 10, title: "Workout session", isCompleted: false },
    { id: 11, title: "Meditation practice", isCompleted: true },
    { id: 12, title: "Organize workspace", isCompleted: false },
    { id: 13, title: "Fix broken faucet", isCompleted: false },
    { id: 14, title: "Grocery shopping", isCompleted: true },
    { id: 15, title: "Send emails", isCompleted: false },
    { id: 16, title: "Attend team meeting", isCompleted: true },
    { id: 17, title: "Prepare dinner", isCompleted: false },
    { id: 18, title: "Watch a documentary", isCompleted: true },
    { id: 19, title: "Learn a new skill", isCompleted: false },
    { id: 20, title: "Backup files", isCompleted: true }
];


let DisplayTodo =(props)=>{
    let { id,title,isCompleted}= props.data
    return (
        <tr>
            <td>{id}</td>
            <td>{title}</td>
            <td>{isCompleted?"Completed":"Pending"}</td>
        </tr>
    )
}

let App=()=>{
    return(
    <>
            <table className="todo-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Status</th>
                    </tr>

                </thead>
                <tbody>
                    {todos.map((el) => {
                        return (
                            <DisplayTodo data={el} />
                        )
                    })}
                </tbody>
            </table>
    </>
    )
    
}

ReactDOM.createRoot(document.querySelector("#root")).render(<App/>);