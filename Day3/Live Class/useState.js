// counter 

let count=0
const Counter = ()=>{
    const incrementFunc =()=>{
        count++;
        console.log(count);
    }
    return(
        <>
            <h1>Counter : {count}</h1>
            <button onClick={incrementFunc}>Increment</button>
        </>
    )
};

ReactDOM.createRoot(document.querySelector("#root")).render(<Counter/>)

// the function will get called each time we press the button but the output will not show in webpage as we are not rentering the Counter component again and again..we are just calling it.
// perfect for JS but for React it needs to re render everytime it gets updated.


