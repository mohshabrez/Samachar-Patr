import React from "react";
import PropTypes from 'prop-types'

const NewsItem = (props) => {
  
    let { title, description, imageUrl, newsUrl, date, author, source } = props;
    return (
      <div className="my-3">
        <div className="card">
          <div style={{
            display : "flex",
            justifyContent : "flex-end",
            position: 'absolute',
            right: 0
          }}>
          <span class="badge rounded-pill bg-danger" >
                {source}
              </span>
            {/* <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left: "90%", zIndex:"1"}}>
                {source}
              </span> */}
          </div>
          <img
            src={
              !imageUrl
                ? "https://th.bing.com/th/id/OIP.-imWb7ccVcUbt-JHUweHEwHaDt?pid=ImgDet&rs=1"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
      
          <div className="card-body">
            <h5 className="card-title">
              {title}...
            </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                {" "}
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
 
}

export default NewsItem



//CLASS BASED COMPONENT

// export default class NewsItem extends Component {
//   render() {
//     let { title, description, imageUrl, newsUrl, date, author, source } = this.props;
//     return (
//       <div className="my-3">
//         <div className="card">
//           <div style={{
//             display : "flex",
//             justifyContent : "flex-end",
//             position: 'absolute',
//             right: 0
//           }}>
//           <span class="badge rounded-pill bg-danger" >
//                 {source}
//               </span>
//             {/* <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left: "90%", zIndex:"1"}}>
//                 {source}
//               </span> */}
//           </div>
//           <img
//             src={
//               !imageUrl
//                 ? "https://th.bing.com/th/id/OIP.-imWb7ccVcUbt-JHUweHEwHaDt?pid=ImgDet&rs=1"
//                 : imageUrl
//             }
//             className="card-img-top"
//             alt="..."
//           />
      
//           <div className="card-body">
//             <h5 className="card-title">
//               {title}...
//             </h5>
//             <p className="card-text">{description}...</p>
//             <p className="card-text">
//               <small className="text-muted">
//                 {" "}
//                 By {!author ? "Unknown" : author} on{" "}
//                 {new Date(date).toGMTString()}
//               </small>
//             </p>
//             <a
//               href={newsUrl}
//               target="_blank"
//               rel="noreferrer"
//               className="btn btn-sm btn-primary"
//             >
//               Read More
//             </a>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
