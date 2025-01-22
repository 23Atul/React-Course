//  rendering one user card

const UserCard = () => {
    return (
        <>
            <div className="card">
                <h3>Name: Atul </h3>
                <h4>Age: 24</h4>
                <p>Email: atul23@gmail.com</p>
            </div>
        </>
    );
};

// const App=()=>{
//     return(
//         <UserCard/>
//     );
// };

// ReactDOM.createRoot(document.querySelector("#root")).render(<App/>)


//---------------------------------------------------------------------------------------------------------------------------------


// rendering multiple user cards   ---->>> not good when number of users are more

const UserCard1 = () => {
    return (
        <>
            <div className="card-container">
                <div className="card">
                    <h3>Name: Atul </h3>
                    <h4>Age: 24</h4>
                    <p>Email: atul23@gmail.com</p>
                </div>
            </div>
        </>
    );
};
const UserCard2 = () => {
    return (
        <><div className="card-container">
            <div className="card">
                <h3>Name: Roma </h3>
                <h4>Age: 26</h4>
                <p>Email: roma@gmail.com</p>
            </div>
        </div>

        </>
    );
};
const UserCard3 = () => {
    return (
        <>
            <div className="card-container">
                <div className="card">
                    <h3>Name: Amit </h3>
                    <h4>Age: 28</h4>
                    <p>Email: amit@gmail.com</p>
                </div>
            </div>
        </>
    );
};

// const App = () => {
//     return (
//         <>
//             <UserCard1 />
//             <UserCard2 />
//             <UserCard3 />
//         </>
//     );
// };

// ReactDOM.createRoot(document.querySelector("#root")).render(<App/>)



//---------------------------------------------------------------------------------------------------------



// pass variables as attributes (props) to UserCard
// variables --> Name, Age, email

// creating one component and passing variables as props.
const UserCard4 = (props) => {
    console.log(props);
    return (
        <>
            <div className="card-container">
                <div className="card">
                    <h3>Name: {props.name} </h3>
                    <h4>Age: {props.age}</h4>
                    <p>Email: {props.email}</p>
                </div>
            </div>
        </>
    );
};


// const App = () => {
//     return (
//         <>
//             <UserCard4 name="Atul" age="24" email="atul@gmail.com" />
//             <UserCard4 name="Roma" age="26" email="roma@gmail.com" />
//             <UserCard4 name="Amit" age="28" email="amit@gmail.com" />
//             {/* we can add any no. of cards by passing values from here */}
//         </>
//     );
// };

// ReactDOM.createRoot(document.querySelector("#root")).render(<App />);

// this also fails when the no. of UserCards are more so we cant pass every user like this



//-----------------------------------------------------------------------------------------------------------------------


// keeping 

const users1 = [
    { name: "Atul Raman", age: 24, email: "atul23@gmail.com" },
    { name: "Aman Gupta", age: 28, email: "aman28@gmail.com" },
    { name: "Priya Sharma", age: 22, email: "priya22@gmail.com" },
    { name: "Raj Malhotra", age: 30, email: "raj30@gmail.com" },
    { name: "Sneha Mehra", age: 25, email: "sneha25@gmail.com" },
    { name: "Vikas Dubey", age: 27, email: "vikas27@gmail.com" },
    { name: "Riya Kapoor", age: 23, email: "riya23@gmail.com" },
    { name: "Arjun Verma", age: 26, email: "arjun26@gmail.com" },
    { name: "Simran Kaur", age: 21, email: "simran21@gmail.com" },
    { name: "Nisha Pandey", age: 29, email: "nisha29@gmail.com" },
];


const UserCard5 = (props) => {
    console.log(props);
    console.log(props);
    return (
        <>
            <div className="card-container">
                <div className="card">
                    <h3>Name: {props.name} </h3>
                    <h4>Age: {props.age}</h4>
                    <p>Email: {props.email}</p>
                </div>
            </div>
        </>
    );
};



// const App =()=>{
//     return(
//         <>
//             {users1.map((el)=>(
//                 <UserCard5 name={el.name} age={el.age} email={el.email} />
//             ))}
//         </>
//     )
// };

// ReactDOM.createRoot(document.querySelector("#root")).render(<App />);


// still lots of repetation 


//----------------------------------------------------------------------------------------------------------------

// what if each object has 20-30 key:value...
// passing object as prop


const users2 = [
    { name: "Atul Raman", age: 24, email: "atul23@gmail.com" },
    { name: "Aman Gupta", age: 28, email: "aman28@gmail.com" },
    { name: "Priya Sharma", age: 22, email: "priya22@gmail.com" },
    { name: "Raj Malhotra", age: 30, email: "raj30@gmail.com" },
    { name: "Sneha Mehra", age: 25, email: "sneha25@gmail.com" },
    { name: "Vikas Dubey", age: 27, email: "vikas27@gmail.com" },
    { name: "Riya Kapoor", age: 23, email: "riya23@gmail.com" },
    { name: "Arjun Verma", age: 26, email: "arjun26@gmail.com" },
    { name: "Simran Kaur", age: 21, email: "simran21@gmail.com" },
    { name: "Nisha Pandey", age: 29, email: "nisha29@gmail.com" },
];



const UserCard6=(props)=>{
    console.log(props.data);
    let {name, age,email}= props.data;
    return (
        <>
            <div className="card-container">
                <div className="card">
                    <h3>Name: {name} </h3>
                    <h4>Age: {age}</h4>
                    <p>Email: {email}</p>
                </div>
            </div>
        </>
    );
};


const App =()=>{
    return(
        <>
        {users2.map((el)=>(
            <UserCard6 data={el}/>
        ))}</>
    )
};

ReactDOM.createRoot(document.querySelector("#root")).render(<App />);
