// rendering elements

// const elem = <h1>Hello World</h1>
// ReactDOM.createRoot(document.querySelector("#root")).render(elem);


//--------------------------------------------------------------------------------------------------------

//rendering components (functional)


function HelloWorld() {
    return <h1>Hello World</h1>
}

// ReactDOM.createRoot(document.querySelector("#root")).render(<HelloWorld />); 


// or


const HelloWorld1 =()=> <h1>Hellow Arrow function component</h1>

// ReactDOM.createRoot(document.querySelector("#root")).render(<HelloWorld1 />); 


//------------------------------------------------------------------------------------------------------------


// rendering multiple line component


function HelloWorld2(){
    return(
    <>
        <h1>Hi Atul</h1>
        <h2>How Are You?</h2>
    </>
    )
}

// ReactDOM.createRoot(document.querySelector("#root")).render(<HelloWorld2 />); 


//or


const HelloWorld3=()=>{
    return (
        <>
            <h1>Hi Atul</h1>
            <h2>This is Arrow Function component</h2>
        </>
    )
}
    
// ReactDOM.createRoot(document.querySelector("#root")).render(<HelloWorld3 />); 

//--------------------------------------------------------------------------------------------------


// calling one component inside another component.   ---->>>    C O M P O N E N T     C O M P O S I T I O N


const User =()=> {
    return (
        <>
            <Welcome />
            <h1>Atul</h1>
            <Byee />
        </>
        
    )
};

const Welcome =()=> <h2>Welcome</h2>;

const Byee =()=> <h2>Byee</h2>;

ReactDOM.createRoot(document.querySelector("#root")).render(<User/>);

//--------------------------------------------------------------------------