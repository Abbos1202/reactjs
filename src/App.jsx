import React, { Component } from "react";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      title: "",
    };
  }

  render() {
    // console.log('render');

    // const getValue = (e) => {
    //   // console.log(event.target.value);
    //   this.setState({ title: e.target.value });
    // };

    // const onSelect = (e) => {
    //   console.log(e.target.value);
    // };

    // const onChecking = (e) => {
    //   console.log(e.target.checked);
    // };

    // const onRadio = (e) => {
    //   console.log(e.target.checked);
    // };

    return (
      <div>
        <button onClick={()=> this.setState({count: this.state.count + 1})}>+</button>
        <h1>{this.state.count}</h1>
        <button onClick={()=> this.setState({count: this.state.count - 1})}>-</button>

        <h2>{this.state.title}</h2>
        <input onChange={(e)=> this.setState({ title: e.target.value })} type="text" placeholder="title" />
        {/* <input onChange={getValue} type="text" placeholder="title" /> */}
        {/* <select onChange={onSelect}>
          <option value="uzb">uzb</option>
          <option value="rus">rus</option>
          <option value="usa">usa</option>
        </select>
        <input onChange={onChecking} type="checkbox" />
        <input onChange={onRadio} type="radio" /> */}
      </div>
    );
  }
}

// import React, { Component } from 'react'

// export default class App extends Component {

//   constructor(props){
//     super(props);
//     this.state = {
//       count: 0
//     }
//   }

//   // state = {  => conflig ga sabab bo'ladi
//   //   count: 0
//   // }

// render() {

// const oshirish = () => {
//   // this.state.count < 15 ? this.setstate({count: this.state.count + 1}) : this.setState({count: this.state.count})
//   // this.state.count < 15 && this.setState({count: this.state.count + 1})
//   // if(this.state.count < 15) {
//   //   this.setState({count: this.state.count + 1})
//   // }
//   if(this.state.count < 15) this.setState({count: this.state.count + 1});
// };

// const kamaytirish = () => {
//   // this.state.count > 0 ? this.setstate({count: this.state.count - 1}) : this.setState({count: this.state.count})
//   // this.state.count > 0 && this.setState({count: this.state.count - 1})
//   // if(this.state.count > 0) {
//   //   this.setState({count: this.state.count - 1})
//   // }
//   if(this.state.count < 0) this.setState({count: this.state.count - 1});
// }

//     return (
//       <div>
//         <button onClick={oshirish}>+</button>
//         <h2>{this.state.count}</h2>
//         <button onClick={kamaytirish}>-</button>
//       </div>
//     )
//   }
// }

// import React from 'react'
// import Navbar from './components/Navbar'
// import Footer from './components/Footer'

// export default function App() {
//   return (
//     <div>
//       <Navbar />
//       <Footer />
//     </div>
//   )
// }
