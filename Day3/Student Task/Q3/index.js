// useState with Object

function ObjectEx() {

    const userDetails = {
        name: "Atul",
        age: 24,
        Gender: "Male"
    };

    const [details, setDetails] = React.useState(userDetails)

    function incrementAge() {
        setDetails({ ...details, age: details.age + 1 })
    }

    function resetAge() {
        setDetails({ ...details, age: userDetails.age })
    }


    return (
        <>
            <u><h1>User Details</h1></u>
            <h2>Name: {details.name}</h2>
            <h2>Age: {details.age}</h2>
            <h3>Gender: {details.Gender}</h3>
            <button onClick={incrementAge}>Age + 1</button>
            <button onClick={resetAge}>Reset Age</button>


        </>
    )
}

ReactDOM.createRoot(document.querySelector("#root")).render(<ObjectEx />)