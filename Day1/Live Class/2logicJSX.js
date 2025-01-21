
// Adding Logic to JSX

// let name = "Atul Raman"
// let age = 24


// let elem =
//     <>
//         <h1>JSX Element</h1>
//         <h2>Name: {name}</h2>
//         <h3>Age: {age}</h3>
//         <h3>status: {age > 20 ? "Eligible to Vote" : "not Eligible to Vote"}</h3>
//     </>


// ReactDOM.createRoot(document.querySelector("#root")).render(elem);


// ---------------------------------------------------------------------------------------------------------------------------------------


// rendering one user card.

// const user = {
//     imgURL: "https://avatars.githubusercontent.com/u/86400987?s=400&u=272d61ac7962f4f5af88bdaf6161d79bed7f99d8&v=4",
//     name: "Atul Raman",
//     bio: "Software Engineer with experience in web developement",
//     email: "atul23@gmail.com",
//     phone: 62060680674,
//     subscribed: true
// };


// let user1= 
//      <>
        // <div>
        //     <img src={user.imgURL} />
        //     <h1>{user.name}</h1>
        //     <p>{user.bio}</p>
        //     <p>Email: {user.email}</p>
        //     <p>Phone: {user.phone}</p>
        //     <p>status:{user.subscribed ? "subscribed" : "not subscribed"}</p>

        // </div>
//     </>

// ReactDOM.createRoot(document.querySelector("#root")).render(user1);


//-------------------------------------------------------------------------------------------------------------------------------------------------------------


// rendering multiple user cards

const users = [
    {
        imgURL: "https://avatars.githubusercontent.com/u/86400987?s=400&u=272d61ac7962f4f5af88bdaf6161d79bed7f99d8&v=4",
        name: "Atul Raman",
        bio: "Software Engineer with experience in web development",
        email: "atul23@gmail.com",
        phone: 62060680674,
        subscribed: true,
    },
    {
        imgURL: "https://avatars.githubusercontent.com/u/86400987?s=400&u=272d61ac7962f4f5af88bdaf6161d79bed7f99d8&v=4",
        name: "John Doe",
        bio: "Frontend Developer and React enthusiast",
        email: "johndoe@gmail.com",
        phone: 9876543210,
        subscribed: false,
    },
    {
        imgURL: "https://avatars.githubusercontent.com/u/86400987?s=400&u=272d61ac7962f4f5af88bdaf6161d79bed7f99d8&v=4",
        name: "Jane Smith",
        bio: "UI/UX Designer with a passion for creating intuitive designs",
        email: "jane.smith@gmail.com",
        phone: 1234567890,
        subscribed: true,
    },
    {
        imgURL: "https://avatars.githubusercontent.com/u/86400987?s=400&u=272d61ac7962f4f5af88bdaf6161d79bed7f99d8&v=4",
        name: "Emily Davis",
        bio: "Full Stack Developer specializing in MERN stack",
        email: "emily.davis@gmail.com",
        phone: 4567891230,
        subscribed: true,
    },
    {
        imgURL: "https://avatars.githubusercontent.com/u/86400987?s=400&u=272d61ac7962f4f5af88bdaf6161d79bed7f99d8&v=4",
        name: "Michael Brown",
        bio: "Backend Developer with expertise in Node.js and Python",
        email: "michael.brown@gmail.com",
        phone: 7891234567,
        subscribed: false,
    },
    {
        imgURL: "https://avatars.githubusercontent.com/u/86400987?s=400&u=272d61ac7962f4f5af88bdaf6161d79bed7f99d8&v=4",
        name: "Sophia Wilson",
        bio: "Cloud Engineer with experience in AWS and Azure",
        email: "sophia.wilson@gmail.com",
        phone: 3216549870,
        subscribed: true,
    },
    {
        imgURL: "https://avatars.githubusercontent.com/u/86400987?s=400&u=272d61ac7962f4f5af88bdaf6161d79bed7f99d8&v=4",
        name: "David Taylor",
        bio: "Data Scientist specializing in Machine Learning",
        email: "david.taylor@gmail.com",
        phone: 6543217890,
        subscribed: false,
    },
    {
        imgURL: "https://avatars.githubusercontent.com/u/86400987?s=400&u=272d61ac7962f4f5af88bdaf6161d79bed7f99d8&v=4",
        name: "Olivia Martinez",
        bio: "Software Tester with a focus on automation tools",
        email: "olivia.martinez@gmail.com",
        phone: 9873216540,
        subscribed: true,
    },
    {
        imgURL: "https://avatars.githubusercontent.com/u/86400987?s=400&u=272d61ac7962f4f5af88bdaf6161d79bed7f99d8&v=4",
        name: "Ethan Anderson",
        bio: "Mobile App Developer with expertise in Flutter",
        email: "ethan.anderson@gmail.com",
        phone: 7896541230,
        subscribed: false,
    },
    {
        imgURL: "https://avatars.githubusercontent.com/u/86400987?s=400&u=272d61ac7962f4f5af88bdaf6161d79bed7f99d8&v=4",
        name: "Liam Moore",
        bio: "DevOps Engineer experienced in CI/CD pipelines",
        email: "liam.moore@gmail.com",
        phone: 4569873210,
        subscribed: true,
    },
    {
        imgURL: "https://avatars.githubusercontent.com/u/86400987?s=400&u=272d61ac7962f4f5af88bdaf6161d79bed7f99d8&v=4",
        name: "Ava Harris",
        bio: "Game Developer passionate about 3D modeling",
        email: "ava.harris@gmail.com",
        phone: 1237894560,
        subscribed: true,
    },
    {
        imgURL: "https://avatars.githubusercontent.com/u/86400987?s=400&u=272d61ac7962f4f5af88bdaf6161d79bed7f99d8&v=4",
        name: "Noah Clark",
        bio: "Cybersecurity Expert with experience in ethical hacking",
        email: "noah.clark@gmail.com",
        phone: 3219876540,
        subscribed: false,
    },
    {
        imgURL: "https://avatars.githubusercontent.com/u/86400987?s=400&u=272d61ac7962f4f5af88bdaf6161d79bed7f99d8&v=4",
        name: "Isabella Lewis",
        bio: "AI/ML Engineer exploring natural language processing",
        email: "isabella.lewis@gmail.com",
        phone: 6547893210,
        subscribed: true,
    },
    {
        imgURL: "https://avatars.githubusercontent.com/u/86400987?s=400&u=272d61ac7962f4f5af88bdaf6161d79bed7f99d8&v=4",
        name: "William Walker",
        bio: "Blockchain Developer with a knack for smart contracts",
        email: "william.walker@gmail.com",
        phone: 9876547890,
        subscribed: false,
    },
    {
        imgURL: "https://avatars.githubusercontent.com/u/86400987?s=400&u=272d61ac7962f4f5af88bdaf6161d79bed7f99d8&v=4",
        name: "Mia Robinson",
        bio: "Product Manager bridging the gap between tech and business",
        email: "mia.robinson@gmail.com",
        phone: 7891239870,
        subscribed: true,
    },
];


let elem=
<>
    {users.map((el)=>{
        return(
            <div className="card">
                <img src={el.imgURL} />
                <h1>{el.name}</h1>
                <p>{el.bio}</p>
                <p>Email:  {el.email}</p>
                <p>Phone:  {el.phone}</p>
                <p>Status:  {el.subscribed ? "Subscribed" : "Not Subscribed"}</p>

            </div>
        )
    })}
</>

ReactDOM.createRoot(document.querySelector("#root")).render(elem);
