let name2 = React.createElement("h1",{id:"name2"}, "Atul");
let age2 = React.createElement("h2", { id: "age2" }, 24);
let location2 = React.createElement("h3", { id: "location2" }, "Ranchi");

let div = React.createElement("div",{id:"div"}, name2, age2, location2);

ReactDOM.createRoot(document.querySelector("#root")).render(div);
