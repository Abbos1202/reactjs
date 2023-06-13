import React from 'react'
import Child from './Child'

const Parent = () => {
    const users = [
        {id: 1, name:'Firdavs', status: 'Student'},
        {id: 2, name:'Abbosbek', status: 'Developer'},
        {id: 3, name:'Azizbek', status: 'Student'},
        {id: 4, name:'Sirojiddin', status: 'Developer'},
    ]
    return (
        <div>
            <h1 className='test'>I'm a parent component</h1>
            <Child value={users} />
        </div>
    )
}


export default Parent;




// const Parent = () => {
//     return (
//         <div>
//             <h1>I'm a parent component</h1>
//             <Child title="I'm a 1st child!">
//                 <h1>I am a Children prop</h1>
//                 <p>Hello G20 Group</p>
//             </Child>
//         </div>
//     )
// }

// export default Parent;


// const Parent = () => {
//   return (
//     <div>
//         <h1>I'm a parent component</h1>
//         <Child text="I'm a 1st child!" description="Hello" />
//         <Child text="I'm a 2nd child!" description="Hello" />
//         <Child text="I'm a 3rd child!" description="Hello" />
//         <Child text="I'm a 4th child!" description="Hello" />
//     </div>
//   )
// }

// export default Parent;