const App =()=>{

    const [formData,setformData] = React.useState({username:"",phone:"",email:""})
    const [user,setUser]= React.useState([]) // new useState for pushing 

    function handleChange(e){
        const {name,value}=e.target
        setformData({...formData,[name]:value})
    }

    function handleSubmit(e){
        e.preventDefault();
        
        const payload={
            username:formData.username,
            email:formData.email,
            phone:formData.phone
        };

        axios.post("https://axios-96c1a-default-rtdb.firebaseio.com/users.json", payload);

        setformData({ username: "", phone: "", email: "" })
    }

    // function to get the data from DB
    async function fetchData(){
        const res = await axios.get("https://axios-96c1a-default-rtdb.firebaseio.com/users.json")
        // console.log(res.data);
        const out = Object.entries(res.data)
        console.log(out);
        setUser(out)

    }
    console.log(user);


    return(
        <>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} placeholder="enter username" type="text" name="username"></input>
                <input onChange={handleChange}  placeholder="enter email" type="email" name="email"></input>
                <input onChange={handleChange}  placeholder="enter phone" type="number" name="phone"></input>
                <input type="submit"></input>

            </form>


{/* fetching data from DB and displaying them on page */}
            <button onClick={fetchData} style={{ marginTop: "20px" }}>Fetch Data</button>
            {
                user.map((el)=>{
                    return(
                        <div className="card">
                            <div className="cardContainer">

                                <h3>{el[1].username}</h3>
                                <h3>{el[1].email}</h3>
                                <h3>{el[1].phone}</h3>
                                {/* <button>remove user</button> */}

                            </div>
                        </div>

                    )
                })
            }
        </>
    )
}
ReactDOM.createRoot(document.querySelector("#root")).render(<App/>)