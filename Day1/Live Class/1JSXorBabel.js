
//1. ---->>>  // complex structure..... one element inside other

// let elem = React.createElement(
//     "div",
//      { id: "div" }, 
//      React.createElement("h1", { id: "head" }, "Hello Atul"), 
//      React.createElement("p", { id: "para" }, "Welcome to React"));

// ReactDOM.createRoot(document.querySelector("#root")).render(elem)



//2. --->>>  // creating less complex structure by defining each element seperately then keeping inside div

let h1 = React.createElement("h1", { id: "head" }, "Hello Atul")

let p = React.createElement("p", { id: "para" }, "Welcome to React");

// ReactDOM.createRoot(document.querySelector("#root")).render(h1,p)   // only Hello Atul gets printed as render will accept only one argument

let div = React.createElement("div", { id: "div" }, [h1, p])

ReactDOM.createRoot(document.querySelector("#root")).render(div)




//  ------- J S X -->  Javascript XML ----->   J S   +    H T M L

// in JS   --->> works well

// document.querySelector("#root").innerHTML += `

// <div>
//     <h1>Atul Raman</h1>
//     <p>Hello Atul</p>
// </div>

// `


// in react  --->>   SyntaxError: Unexpected token '<' ( browser cant read JSX directly)

let elem =<h1>Hello World</h1>

ReactDOM.createRoot(document.querySelector("#root")).render(elem)

// to let React to add plane html to dom we use BABEL


// JSX --->>  BABEL  --->> React.createElement

//<h1>Atul Raman</h1>   --->> BABEL   --->>  React.createElement("h1", null, "Atul Raman")


// at backend this whole thing is getting converted to React.createElement

let JSXelem = 
    <div>
        <h2>Hello Atul Raman</h2>
        <p>Welcome to React</p>
    </div>

ReactDOM.createRoot(document.querySelector("#root")).render(JSXelem)


// react Fragments  < >  </>


let intro =
<>
    <div className="introduction">
        <h1>Atul Raman</h1>
        <h3>CV Ramman Global Univeristy</h3>
        <h4>Electrical Engineering</h4>
        <h4>Hobbies</h4>
        <ul>
            <li>Reading</li>
            <li>Coding</li>
            <li>Cooking</li>
        </ul>
    </div>

</>

ReactDOM.createRoot(document.querySelector("#root")).render(intro)