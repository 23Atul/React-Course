// useState with string

const Change = () => {
    const [ name, setName] = React.useState("Atul")

    function changeFunc(){
        setName("Masai")
    }

    function reset(){
        setName("Atul")
    }

    return(
        <>
            <h1>My name is {name}</h1>
            <button onClick={changeFunc}>Change to Masai</button>
            <button onClick={reset}>Reset</button>
        </>
    )

}


ReactDOM.createRoot(document.querySelector("#root")).render(<Change/>)
