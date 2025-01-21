// Hello World  using JS

// let h1 = document.createElement("h1")
// h1.innerText = "Hello World!!!!!!"
// document.querySelector("#root").append(h1)


console.log(React);  // all react object methods

// Hello World using React

let h1 = React.createElement("h1", {}, "Hello World !!!!!!!!!! : )");         // ƒ createElement(type, props, children)

console.log(h1);  //--> react object
// {$$typeof: Symbol(react.element), type: 'h1', key: null, ref: null, props: {…}, …}
// $$typeof:Symbol(react.element)
// key:null
// props:{ children: 'Hello World !!!!!!!!!!!!!!' }
// ref:null
// type:"h1"
// [[Prototype]]:Object

console.log(ReactDOM); //--> gives DOM methods // ƒ createRoot(container, options)   // ƒ render(element, container, callback)

ReactDOM.createRoot(document.querySelector("#root")).render(h1)


// step - 1: create a react Element
// step - 2: create a root to render react
// step - 3: Render the react element to the root