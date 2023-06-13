import React from 'react'

// destructure va css berish

const Child = ({value}) => {
  return (
    <div>
      <h1>Users</h1>
      {
        value.map(({id, name, status})=>{
          return (
            <div>
              {/* <h1 className='info'>{id} {name} {status}</h1> */}
              <h1 style={{color: 'red', background: 'yellow'}}>{id} {name} {status}</h1>
            </div>
          )
        })
      }
    </div>
  )
}

export default Child;


// =========================


// oddiy

// const Child = ({value}) => {
//   return (
//     <div>
//       <h1>Users</h1>
//       {
//         value.map((data)=> {
//           return (
//             <div>
//               <h1>{data.id} {data.name} {data.status}</h1>
//             </div>
//           )
//         })
//       }
//     </div>
//   )
// }

// export default Child;



// const Child = (props) => {
//   return (
//     <div>
//         <h1>{props.title}</h1>
//         {props.children}
//     </div>
//   )
// }

// export default Child




// destructure props => 2 - usuli

// import React from 'react'

// class Child extends React.Component {
//     render() {
//         return (
//             <div>{this.props.text} {this.props.description}</div>
//         )
//     }
// }


// export default Child;




// const Child = (props) => {
//     const {text, description} = props;
//   return (
//     <div>{text} {description}</div>
//   )
// }

// export default Child;

// ==========================================

// destructure props => 1 - usuli

// import React from 'react'

// const Child = ({text, description}) => {
//   return (
//     <div>{text} {description}</div>
//   )
// }

// export default Child



// ================================

// import React from 'react'

// const Child = (props) => {
//     // console.log(props);
//     // console.log(props, 'props');
//   return (
//     // <div>I'm a 1st child</div>
//     <div>{props.text} {props.description}</div>
//   )
// }

// export default Child;
