import PropTypes from "prop-types";
import React, { Component } from "react";
import {Link} from "react-router-dom";




const  Navbar =  ()=> {


    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/general">
              <strong>SP</strong>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/general">
                    Home
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link className="nav-link" to="/About">
                    About
                  </Link>
                </li> */}
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/business">Business</Link></li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/entertainment">Entertainment</Link></li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/general">General</Link></li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/health">Health</Link></li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/science">Science</Link></li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/sports">Sports</Link></li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/technology">Technology</Link></li>
                
                {/* <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" to="#">Action</a></li>
            <li><a className="dropdown-item" to="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" to="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link disabled" to="#" tabIndex="-1" aria-disabled="true">Disabled</Link>
        </li> */}
              </ul>
              {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
            </div>
          </div>
        </nav>
      </div>
    );
  
}

export default Navbar;



//1. CLASS BASED COMPONENT

// export class Navbar extends Component {
//   static propTypes = {};

//   render() {
//     return (
//       <div>
//         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//           <div className="container-fluid">
//             <Link className="navbar-brand" to="/general">
//               <strong>SP</strong>
//             </Link>
//             <button
//               className="navbar-toggler"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarSupportedContent"
//               aria-controls="navbarSupportedContent"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div
//               className="collapse navbar-collapse"
//               id="navbarSupportedContent"
//             >
//               <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                 <li className="nav-item">
//                   <Link className="nav-link active" aria-current="page" to="/general">
//                     Home
//                   </Link>
//                 </li>
//                 {/* <li className="nav-item">
//                   <Link className="nav-link" to="/About">
//                     About
//                   </Link>
//                 </li> */}
//                 <li className="nav-item">
//                   <Link className="nav-link active" aria-current="page" to="/business">Business</Link></li>
//                 <li className="nav-item">
//                   <Link className="nav-link active" aria-current="page" to="/entertainment">Entertainment</Link></li>
//                 <li className="nav-item">
//                   <Link className="nav-link active" aria-current="page" to="/general">General</Link></li>
//                 <li className="nav-item">
//                   <Link className="nav-link active" aria-current="page" to="/health">Health</Link></li>
//                 <li className="nav-item">
//                   <Link className="nav-link active" aria-current="page" to="/science">Science</Link></li>
//                 <li className="nav-item">
//                   <Link className="nav-link active" aria-current="page" to="/sports">Sports</Link></li>
//                 <li className="nav-item">
//                   <Link className="nav-link active" aria-current="page" to="/technology">Technology</Link></li>
                
//                 {/* <li className="nav-item dropdown">
//           <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Dropdown
//           </Link>
//           <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//             <li><a className="dropdown-item" to="#">Action</a></li>
//             <li><a className="dropdown-item" to="#">Another action</a></li>
//             <li><hr className="dropdown-divider"/></li>
//             <li><a className="dropdown-item" to="#">Something else here</a></li>
//           </ul>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link disabled" to="#" tabIndex="-1" aria-disabled="true">Disabled</Link>
//         </li> */}
//               </ul>
//               {/* <form className="d-flex">
//         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//         <button className="btn btn-outline-success" type="submit">Search</button>
//       </form> */}
//             </div>
//           </div>
//         </nav>
//       </div>
//     );
//   }
// }

// export default Navbar;
