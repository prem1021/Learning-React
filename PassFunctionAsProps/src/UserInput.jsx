// import React from 'react'

// const UserInput = () => {
//     return (
//         <div>
//             <input type="text" ref={inputRef} />
//         </div>
//     )
// }

// export default UserInput

// const UserInput = (props) => {
//     return (
//         <div>
//             <input type="text" ref={props.ref} />

//         </div>
//     )
// }

// export default UserInput


import React, { forwardRef } from 'react'

const UserInput = forwardRef((props, ref) => {
    return (
        <div>
            <input type="text" ref={ref} />
        </div>
    )
})

export default UserInput
