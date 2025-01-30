// counter 

let count1 = 0
const Counter1 = () => {
    const incrementFunc1 = () => {
        count1++;
        console.log(count1);
    }
    return (
        <>
            <h1>Counter : {count1}</h1>
            <button onClick={incrementFunc1}>Increment</button>
        </>
    )
};

// ReactDOM.createRoot(document.querySelector("#root")).render(<Counter1/>)

// the function will get called each time we press the button but the output will not show in webpage as we are not rentering the Counter component again and again..we are just calling it.
// perfect for JS but for React it needs to re render everytime it gets updated.






// lets render the function everytime its get called.


let count2 = 0
const Counter2 = () => {
    const incrementFunc2 = () => {
        count2++;
        console.log(count2);
        ReactDOM.createRoot(document.querySelector("#root")).render(<Counter2 />)
    }
    return (
        <>
            <h1>Counter : {count2}</h1>
            <button onClick={incrementFunc2}>Increment</button>
        </>
    )
};

// ReactDOM.createRoot(document.querySelector("#root")).render(<Counter2 />)

// but this is not the right way; we should not manually re render each and every function like this.






// to overcome this we use useState Hook.



// console.log(React);
// prints all react Hooks


const App = () => {

    //console.log(React.useState());  // [undefined,f()]
    // console.log(React.useState(10));  // [10,f()]
    // const [count,f]=React.useState(10);
    // console.log(count,f); // 10,function to update the count value


    return (
        <>
            <h1>Counter</h1>
        </>
    )
};

// ReactDOM.createRoot(document.querySelector("#root")).render(<App/>)

// console.log(React.useState());
// [undefined, f()]
// returns array with 2 values. 1st is the initial value we provide and 2nd is the function which updates the 1st value


// const [ count,setCount]= React.useState(10);





// counter using useState Hook


const Counter3 = () => {

    const [count3, setCount] = React.useState(0);


    // try using function declearation here not the function expression
    function incrementfunc3() {
        setCount(count3 + 1) // dont do count3 ++ 
    }

    function decrementfunc3() {
        setCount(count3 - 1);
    }
    return (
        <>
            <h1>Counter: {count3}</h1>
            <button onClick={decrementfunc3}>Decrement</button>

            <button onClick={incrementfunc3}>Increment</button>
        </>
    )
};

// ReactDOM.createRoot(document.querySelector("#root")).render(<Counter3 />)

// only <h1>Counter: {count3}</h1> gets updatd every time and not the whole component gets re rendered





// counter using useState with reset button


const Counter4 = () => {

    const [count4, setCount] = React.useState(0);


    // try using function declearation here not the function expression
    function incrementfunc4() {
        setCount(count4 + 1) // dont do count3 ++ 
        // console.log(count4);
    }

    function decrementfunc4() {
        setCount(count4 - 1);
        // console.log(count4);
    }

    function resetCount(){
        setCount(0)
        // console.log(count4);
    }
    return (
        <>
            <h1>Counter: {count4}</h1>
            <button onClick={decrementfunc4}>Decrement</button>
            <button onClick={resetCount}>Reset</button>
            <button onClick={incrementfunc4}>Increment</button>

        </>
    )
};

ReactDOM.createRoot(document.querySelector("#root")).render(<Counter4 />)