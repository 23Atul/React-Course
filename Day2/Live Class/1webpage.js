// Navbar
// Body
// Footer

// use of App component

const Navbar = () => {
    return (
        <>
            <nav>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
                <a href="#blog">Blog</a>
            </nav>
        </>
    )
};



const Body = () => {
    return (
        <>
            <div className="body">
                <p>Welcome to React Body my dear friend</p>
            </div>
        </>
    )
};



const Footer =()=>{
    return(
        <>
            <h4 className="footer">copyright 2025</h4>
        </>
    )
}


// ReactDOM.createRoot(document.querySelector("#root")).render(
// <>
//     <Navbar />
//     <Body />
//     <Footer />
// </>
// )


// using App   ---->>> SPA  Single Page Application
const App =()=>{
    return(
        <>
            <Navbar/>
            <Body/>
            <Footer/>
        </>

    )
}


// ReactDOM.createRoot(document.querySelector("#root")).render(<App/>)

