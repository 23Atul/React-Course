// useState with Boolean

const BooleanEx =() =>{

    const [state,setState]= React.useState(false)

    function changeState(){
        setState(!state)
    }

    return(
        <>
            <h1>{state?"Welcome Back": "Please Login" }</h1>
            <button onClick={changeState}>{ state?"Logout":"Login"}</button>
        </>
        
    )

}

ReactDOM.createRoot(document.querySelector("#root")).render(<BooleanEx/>)