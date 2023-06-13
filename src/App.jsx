import React from 'react';
import WillUnmount from './WillUnmount';
// import HookMouseOver from './HookMouseOver';
// import CompA from './CompA';
// import CompB from './CompB';
// import CompC from './CompC';
// import ClassCounter from './ClassCounter';
// import HookCounter from './HookCounter';
// import ClassMouseOver from './ClassMouseOver';


const App = () => {
  // const [name, setName] = useState("Firdavs");

  // const onUpdate = () => {
  //   if (name === "Firdavs") {
  //     setName("Abbosbek");
  //   } else {
  //     setName("Firdavs");
  //   }
  // };
  return (
    <div>
      {/* <CompA name={name} onUpdate={onUpdate} />
      <CompB name={name} />
      <CompC name={name} /> */}
      {/* <ClassCounter /> */}
      {/* <HookCounter /> */}
      {/* <ClassMouseOver /> */}
      {/* <HookMouseOver /> */}
      <WillUnmount />
    </div>
  )
}

export default App
























// import React from "react";
// import { users } from "./data.js";

// const App = () => {
//   return (
//     <div>
//       {
//       users.map((value, index) => {
//         return (
//           <div key={index}>
//             <h1>
//               {value.id} {value.name} {value.status}
//             </h1>
//           </div>
//         );
//       })
//       }

// const App = () => {
//   return (
//     <div>
//         {
//           users.map((value) => {
//             return(
//               <div key={value.id} >
//                 <h1>{value.name} {value.status}</h1>
//               </div>
//             )
//           })
//         }
//     </div>
//   );
// };

// export default App;

// import React, { Component } from 'react'

// export default class App extends Component {

//   constructor(props){
//     super(props)
//     this.state = {favouriteColor: 'red'}
//     console.log('constructor..........');
//   }

//   // componentDidMount(){
//   //   console.log('componentDidMount......');
//   //   setTimeout(()=> {
//   //     this.setState({favouriteColor: 'yellow'})
//   //   }, 2000)
//   // }

//   shouldComponentUpdate(){
//     return true
//   }

//   componentDidUpdate(){
//     console.log('Yangilandi');
//   }

//   render() {
//   console.log('render............');

//   const change = () => {
//     this.setState({favouriteColor: 'yellow'})
//   }

//     return (
//       <div>
//         <h1>My favourite color is {this.state.favouriteColor}</h1>
//         <button onClick={change} >Change color</button>
//       </div>
//     )
//   }
// }
