// useState with Array.

const ArrayEx = () => {

    const fruitsArr = ["Apple", "Grapes", "Watermellon"]

    const [fruits, setFruits] = React.useState(fruitsArr)
    // here fruits = ["Apple", "Grapes", "Watermellon"]

    function addBanana() {
        // const newItem = [...fruits] // create a copy of array using spread operator, dont directly mutate the state 
        // newItem.push("Banana")  
        // setFruits(newItem)

        // or

        setFruits([...fruits, "Banana"])
    }



    return (
        <>
            <h1>Fruits List</h1>
            <ul>
                {fruits.map((el) => {
                    return (
                        <li>{el}</li>
                    )
                })}
            </ul>
            <button onClick={addBanana}>Add Banana</button>
        </>

    )
}


ReactDOM.createRoot(document.querySelector("#root")).render(<ArrayEx />)