// here we will see how we can post the form data into the database.


const App =()=>{

    const [formData,setformData]= React.useState({username:" ",email:" ", phone:" "})

    function handleChange(e){
        const {name,value}=e.target
        setformData({...formData,[name]:value})
    };

    function handleSubmit(e){
        e.preventDefault()
        //payload is the data we are sending to the backend through URL
        const payload = {
            username:formData.username,
            email:formData.email,
            phone:formData.phone
        };
        const res = axios.post("https://axios-96c1a-default-rtdb.firebaseio.com/users.json",payload);

        console.log(res);

        setformData({ username: "", email: "", phone: "" });
    };



    // let data = (axios.get("https://axios-96c1a-default-rtdb.firebaseio.com/users.json"));
    // console.log(data);
    // axios.get(url) --> getting data from DB
    // axios.post(url,payload) --> sending data to DB

    // console.log(formData);

    return(
        <>
            <form onSubmit={handleSubmit}> 
                <input onChange={handleChange}  type="text" placeholder="enter username" name="username"></input>
                <input onChange={handleChange}  type="text" placeholder="enter email" name="email"></input>
                <input onChange={handleChange}  type="text" placeholder="enter phone" name="phone"></input>
                <input type="submit"></input>

            </form>
        </>
    )
}

ReactDOM.createRoot(document.querySelector("#root")).render(<App/>)