// function Wrapper({ name = "New User" }){
// return (
//     <div>
//         <h1>Hi, {name}</h1>
//     </div>
// )
// }
function Wrapper({ children, color = "green" }) {
    return (
        <div style={{ color: color, border: "5px solid green", width: "300px", margin: "10px" }}>
            {children}
        </div>
    )
}
export default Wrapper