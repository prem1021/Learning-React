import React from 'react'

// function Props({ name, age, email }) {
//     return (
//         <div>
//             <h2>Name:{name}</h2>
//             <h2>Age:{age}</h2>
//             <h2>Email:{email}</h2>
//         </div>
//     )
// }

function Props({Props}){
    return <div>
        <hr />
        <h2>name:{Props.name}</h2>
        <h2>name:{Props.age}</h2>
        <h2>name:{Props.email}</h2>
    </div>
}
export default Props
