
// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";

const App = () =>{
  // apiKey = process.env.REACT_APP_NEWS_API

  const [progress, setProgress] = useState(0)

    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
          height={3}
            color="#f11946"
            progress={progress}
            // onLoaderFinished={() => setProgress(0)}
          />
          <Routes>
            <Route
              exact
              path="/Home"
              element={<News setProgress = {setProgress}   key="general" country="in" category="general" />}
            />
            <Route
              exact
              path="/general"
              element={<News setProgress = {setProgress}  key="general" country="in" category="general" />}
            />
            <Route
              exact
              path="/sports"
              element={<News setProgress = {setProgress}  key="sports" country="in" category="sports" />}
            />
            <Route
              exact
              path="/science"
              element={<News setProgress = {setProgress}  key="science" country="in" category="science" />}
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News setProgress = {setProgress} 
                  key="entertainment"
                  country="in"
                  category="entertainment"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={<News setProgress = {setProgress}  key="business" country="in" category="business" />}
            />
            <Route
              exact
              path="/technology"
              element={
                <News setProgress = {setProgress}  key="technology" country="in" category="technology" />
              }
            />
            <Route
              exact
              path="/health"
              element={<News setProgress = {setProgress}  key="health" country="in" category="health" />}
            />
          </Routes>
        </Router>
      </div>
    );
  
}


export default App;




















//CLASS BASED COMPONENT


// import logo from './logo.svg';
// import "./App.css";
// import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

// import React, { Component } from "react";
// import Navbar from "./components/Navbar";
// import News from "./components/News";
// import LoadingBar from "react-top-loading-bar";

// export default class App extends Component {
//   // apiKey = process.env.REACT_APP_NEWS_API

//   state = {
//     progress:0
//   }

//   setProgress = (progress) => {
//     setState({progress: progress})
//   }
//   render() {
//     return (
//       <div>
//         <Router>
//           <Navbar />
//           <LoadingBar
//           height={3}
//             color="#f11946"
//             progress={state.progress}
//             // onLoaderFinished={() => setProgress(0)}
//           />
//           <Routes>
//             <Route
//               exact
//               path="/Home"
//               element={<News setProgress = {setProgress}   key="general" country="in" category="general" />}
//             />
//             <Route
//               exact
//               path="/general"
//               element={<News setProgress = {setProgress}  key="general" country="in" category="general" />}
//             />
//             <Route
//               exact
//               path="/sports"
//               element={<News setProgress = {setProgress}  key="sports" country="in" category="sports" />}
//             />
//             <Route
//               exact
//               path="/science"
//               element={<News setProgress = {setProgress}  key="science" country="in" category="science" />}
//             />
//             <Route
//               exact
//               path="/entertainment"
//               element={
//                 <News setProgress = {setProgress} 
//                   key="entertainment"
//                   country="in"
//                   category="entertainment"
//                 />
//               }
//             />
//             <Route
//               exact
//               path="/business"
//               element={<News setProgress = {setProgress}  key="business" country="in" category="business" />}
//             />
//             <Route
//               exact
//               path="/technology"
//               element={
//                 <News setProgress = {setProgress}  key="technology" country="in" category="technology" />
//               }
//             />
//             <Route
//               exact
//               path="/health"
//               element={<News setProgress = {setProgress}  key="health" country="in" category="health" />}
//             />
//           </Routes>
//         </Router>
//       </div>
//     );
//   }
// }
// // 