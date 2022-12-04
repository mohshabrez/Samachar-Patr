import React, { Component } from 'react'
import loading from './loading.gif'


const Spinner =()=> {

    return (
      <div className='text-center rounded-5'>
        <img className='my-3' src={loading} alt="loading" />
      </div>
    )
 
}

export default Spinner


//CLASS BASED COMPONENT


// export class Spinner extends Component {
//   render() {
//     return (
//       <div className='text-center rounded-5'>
//         <img className='my-3' src={loading} alt="loading" />
//       </div>
//     )
//   }
// }

// export default Spinner