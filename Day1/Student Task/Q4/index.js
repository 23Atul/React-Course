const links=[
    {name:"HOME", href:"#home"},
    { name: "ABOUT", href: "#about" },
    { name: "CONTACTS", href: "#contacts" },
    { name: "BLOG", href: "#blog" }
];



let nav=
<>
    <div className="navLinks">
        {links.map((el)=>{
            return(
                
                    <a href={el.href}>{el.name}</a>
                
                
            )
        })}
    </div>
</>

ReactDOM.createRoot(document.querySelector("#root")).render(nav);