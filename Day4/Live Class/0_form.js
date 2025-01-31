// if there are more numbers of input boxex then using taht much state variables are not preffered so we use forms to do so.

// forms --> event = onSubmit  --> default beaviour is to reload the page and send data to backend so we use event.preventDefault.


const App1 = () =>{

    const [user1,setUser1]=React.useState("")
    const [email1,setEmail1]=React.useState("")


    const handleUserName1=(e)=>{
        setUser(e.target.value)
    }

    const handleEmail1=(e)=>{
        setEmail(e.target.value)
    }

    console.log(user1,email1);

    return(
        <>
            <form>
                <input onChange={handleUserName1} type="text" placeholder="enter username"></input>
                <input onChange={handleEmail1} type="email" placeholder="enter email"></input>
                <input type="submit" ></input>


            </form>
        </>
    )
}
// ReactDOM.createRoot(document.querySelector("#root")).render(<App1/>)

// this is good when no. of input box is less, if no. of input box increases then we can declare that number of state variables.







const App2 = () => {
// we are capturing usename,email phone so best data type to store them is object, so we take empty obj as initial value with keys.
    const [ formData, setformData] = React.useState({username:"", email:"",phone:""})


// handling the all input values using single function instead of creating different function for each input.
    const handleChange=(e)=>{

        // console.log(e.target.name, e.target.value);
        //name: username, value: Atul
        //name: email, value:atul@23
        //name: phone, value:1234

        const {name , value} = e.target;
        setformData({...formData,[name]:value})

        // spreading the initial object and filling the value to each key one by one
        //step1:  setformData({username:"",email:"",phone:"" username:"Atul"})
        //step2:  setformData({username:"Atul, email:"", phone:"", email:"atul@23"})
        //step3:  setformData({username:"Atul, email:"atul@23", phone:"", phone:"123456"})

        
    }


    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(formData);

        // here we are just printing the data when user submits it...next we will see how we can post the same data to database when use submits it.
    }

    console.log(formData);
    return(
        <>
            <form onSubmit={handleSubmit}>
{/* add name in each input and keep name same as what you have kept in state variable initial value */}
                <input onChange={ handleChange } type="text" placeholder="enter username" name="username"></input> 
                <input onChange={ handleChange} type="email" placeholder="enter email" name="email"></input>
                <input onChange={ handleChange } type="number" placeholder="enter phone" name="phone"></input>
{/* if any new input tag is added just we have to update the key in useState  */}
                <input type="submit"></input>
            </form>
                

        </>
        

    )

}

ReactDOM.createRoot(document.querySelector("#root")).render(<App2/>)