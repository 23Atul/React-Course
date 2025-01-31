// if there are more numbers of input boxex then using taht much state variables are not preffered so we use forms to do so.

// forms --> event = onSubmit  --> default beaviour is to reload the page and send data to backend so we use event.preventDefault.


const App1 = () =>{

    const [user1,setUser]=React.useState("")
    const [email1,setEmail]=React.useState("")


    const handleUserName=(e)=>{
        setUser(e.target.value)
    }

    const handleEmail=(e)=>{
        setEmail(e.target.value)
    }

    console.log(user1,email1);

    return(
        <>
            <form>
                <input onChange={handleUserName} type="text" placeholder="enter username"></input>
                <input onChange={handleEmail} type="email" placeholder="enter email"></input>
                <input type="submit" ></input>


            </form>
        </>
    )
}
// ReactDOM.createRoot(document.querySelector("#root")).render(<App1/>)

// this is good when no. of input box is less, if no. of input box increases then we can declare that number of state variables.



