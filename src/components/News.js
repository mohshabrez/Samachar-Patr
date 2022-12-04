// import React, { Component } from "react";
import React , {useEffect , useState}from 'react'
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



const News = (props) => {

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  
  
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // articles = [
  //   {
  //     source: {
  //       id: "bbc-sport",
  //       name: "BBC Sport",
  //     },
  //     author: null,
  //     title: "The moment a country fell in love with cricket",
  //     description:
  //       "As Pakistan prepare for Sunday's T20 World Cup final against England, Aatif Nawaz finds parallels with their famous 1992 triumph.",
  //     url: "http://www.bbc.co.uk/sport/cricket/63591382",
  //     urlToImage:
  //       "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/8C5A/production/_127603953_gettyimages-1244632300-1.jpg",
  //     publishedAt: "2022-11-12T06:37:20.1297444Z",
  //     content:
  //       "1992 mein bhi yehi hua tha.\r\nThat's Urdu for 'This also happened in 1992'.\r\nThe phrase started circulating among Pakistan fans on Twitter last month as a bit of humour, a coping mechanism in the afte… [+3962 chars]",
  //   },
  //   {
  //     source: {
  //       id: "espn-cric-info",
  //       name: "ESPN Cric Info",
  //     },
  //     author: null,
  //     title:
  //       "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
  //     description:
  //       "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
  //     url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
  //     urlToImage:
  //       "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
  //     publishedAt: "2020-04-27T11:41:47Z",
  //     content:
  //       "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
  //   },
  //   {
  //     source: {
  //       id: "espn-cric-info",
  //       name: "ESPN Cric Info",
  //     },
  //     author: null,
  //     title:
  //       "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
  //     description:
  //       "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
  //     url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
  //     urlToImage:
  //       "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
  //     publishedAt: "2020-03-30T15:26:05Z",
  //     content:
  //       "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
  //   },
  // ];

  const updateNews   = async ()=> {
    props.setProgress(0);
    const url =
      `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=19fb81488071456e90a5455e94d59985&page=${page}&pageSize=${props.pageSize}`;
      setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100);

  }

  useEffect(() => {
    updateNews();
    // eslint-disable-next-line
    document.title = `${capitalizeFirstLetter( props.category)} - Samachar Patr`;
  }, [])
  

  const handlePrevPage = async () => {
    setPage(page-1)
    updateNews();
  };

  const handleNextPage = async () => {
    setPage(page+1)
    updateNews();
  };

  const fetchMoreData = async () => {
    const url =
      `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=19fb81488071456e90a5455e94d59985&page=${page+1}&pageSize=${props.pageSize}`;
      setPage(page+1)
      let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
  }

    return (
      <>
      {/* <div className="container my-3"> */}
        <h1 className="text-center" style={{margin: '35px' ,marginTop:'90px'}}>Samachar Patr - Top {capitalizeFirstLetter( props.category)} Head Lines</h1>
        {loading && <Spinner/>}

        <InfiniteScroll
          dataLength={articles.length}
          next = {fetchMoreData}
          hasMore = {articles.length !== totalResults}
          loader = {<Spinner/>}
          >
        <div className="container">
        <div className="row">
          {articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author = {element.author}
                  date = {element.publishedAt}
                  source = {element.source.name}
                />
              </div>
            );
          })}
        </div>
        </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-primary mx-4 my-2"
            onClick={this.handlePrevPage}
          >
            &larr; Previous
          </button>
          <button
            disabled={Math.ceil(this.state.page + 1 > this.state.totalResults / 10)}
            type="button"
            className="btn btn-primary mx-4 my-2"
            onClick={this.handleNextPage}
          >
            Next &rarr;
          </button>
        </div> */}
      {/* </div> */}

    </>
    );
 
}

News.defaultProps = {
  country :'in',
  pageSize : 8,
  category : 'general'

}
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category : PropTypes.string
}


export default News



//CLASS BASED COMPONENT


// export default class News extends Component {
//   static defaultProps = {
//     country :'in',
//     pageSize : 8,
//     category : 'general'

//   }
//   static propTypes = {
//     country: PropTypes.string,
//     pageSize: PropTypes.number,
//     category : PropTypes.string
//   }

//   capitalizeFirstLetter = (string) => {
//     return string.charAt(0).toUpperCase() + string.slice(1);
//   }

//   // articles = [
//   //   {
//   //     source: {
//   //       id: "bbc-sport",
//   //       name: "BBC Sport",
//   //     },
//   //     author: null,
//   //     title: "The moment a country fell in love with cricket",
//   //     description:
//   //       "As Pakistan prepare for Sunday's T20 World Cup final against England, Aatif Nawaz finds parallels with their famous 1992 triumph.",
//   //     url: "http://www.bbc.co.uk/sport/cricket/63591382",
//   //     urlToImage:
//   //       "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/8C5A/production/_127603953_gettyimages-1244632300-1.jpg",
//   //     publishedAt: "2022-11-12T06:37:20.1297444Z",
//   //     content:
//   //       "1992 mein bhi yehi hua tha.\r\nThat's Urdu for 'This also happened in 1992'.\r\nThe phrase started circulating among Pakistan fans on Twitter last month as a bit of humour, a coping mechanism in the afte… [+3962 chars]",
//   //   },
//   //   {
//   //     source: {
//   //       id: "espn-cric-info",
//   //       name: "ESPN Cric Info",
//   //     },
//   //     author: null,
//   //     title:
//   //       "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
//   //     description:
//   //       "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
//   //     url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
//   //     urlToImage:
//   //       "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
//   //     publishedAt: "2020-04-27T11:41:47Z",
//   //     content:
//   //       "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
//   //   },
//   //   {
//   //     source: {
//   //       id: "espn-cric-info",
//   //       name: "ESPN Cric Info",
//   //     },
//   //     author: null,
//   //     title:
//   //       "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
//   //     description:
//   //       "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
//   //     url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
//   //     urlToImage:
//   //       "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
//   //     publishedAt: "2020-03-30T15:26:05Z",
//   //     content:
//   //       "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
//   //   },
//   // ];
//   constructor(props) {
//     super(props);
//     this.state = {
//       articles: [],
//       loading: false,
//       page: 1,
//       totalResults: 0
//     };
//     document.title = `${this.capitalizeFirstLetter( props.category)} - Samachar Patr`;
//   }

//   async updateNews(pageNo){
//     props.setProgress(0);
//     const url =
//       `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=19fb81488071456e90a5455e94d59985&page=${this.state.page}&pageSize=${props.pageSize}`;
//     this.setState({loading:true})
//     let data = await fetch(url);
//     props.setProgress(30);
//     let parsedData = await data.json();
//     props.setProgress(70);
//     this.setState({
//       articles: parsedData.articles,
//       totalResults: parsedData.totalResults,
//       loading: false
//     });
//     props.setProgress(100);

//   }

//   async componentDidMount() {
//     // let url =
//     //   `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey = ${props.apiKey}=19fb81488071456e90a5455e94d59985&page=1&pageSize=${props.pageSize}`;
//     // this.setState({loading:true})
//     // let data = await fetch(url);
//     // let parsedData = await data.json();
//     // this.setState({
//     //   articles: parsedData.articles,
//     //   totalResults: parsedData.totalResults,
//     //   loading: false
//     // });
//     this.updateNews();
//   }

//   handlePrevPage = async () => {
//     // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey = ${props.apiKey}=19fb81488071456e90a5455e94d59985&page=${
//     //   this.state.page - 1
//     // }&pageSize=${props.pageSize}`;
//     // this.setState({loading: true})
//     // let data = await fetch(url);
//     // let parsedData = await data.json();
//     // this.setState({
//     //   page: this.state.page - 1,
//     //   articles: parsedData.articles,
//     //   loading: false
//     // });
//     this.setState({page: this.state.page - 1});
//     this.updateNews();
//   };

//   handleNextPage = async () => {
//     // if(!(Math.ceil(this.state.page + 1 > this.state.totalResults / 10))) {
//     //   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey = ${props.apiKey}=19fb81488071456e90a5455e94d59985&page=${
//     //     this.state.page + 1
//     //   }&pageSize=${props.pageSize}`;
//     //   this.setState({loading: true})
//     //   let data = await fetch(url);
//     //   let parsedData = await data.json();
//     //   this.setState({
//     //     page: this.state.page + 1,
//     //     articles: parsedData.articles,
//     //     loading: false
//     //   });
//     // }
//     this.setState({page: this.state.page + 1})
//     this.updateNews();
//   };

//   fetchMoreData = async () => {
//     this.setState({page: this.state.page + 1 });
//     const url =
//       `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=19fb81488071456e90a5455e94d59985&page=${this.state.page}&pageSize=${props.pageSize}`;
//     // this.setState({loading:true})
//     let data = await fetch(url);
//     let parsedData = await data.json();
//     this.setState({
//       articles:  this.state.articles.concat(parsedData.articles),
//       totalResults: parsedData.totalResults,
//       // loading: false
//     });
//   }

//   render() {
//     return (
//       <>
//       {/* <div className="container my-3"> */}
//         <h1 className="text-center" style={{margin: '35px'}}>Samachar Patr - Top {this.capitalizeFirstLetter( props.category)} Head Lines</h1>
//         {this.state.loading && <Spinner/>}

//         <InfiniteScroll
//           dataLength={this.state.articles.length}
//           next = {this.fetchMoreData}
//           hasMore = {this.state.articles.length !== this.state.totalResults}
//           loader = {<Spinner/>}
//           >
//         <div className="container">
//         <div className="row">
//           {/* {!this.state.loading && this.state.articles.map((element) => { */}
//           {this.state.articles.map((element) => {
//             return (
//               <div className="col-md-4" key={element.url}>
//                 <NewsItem
//                   title={element.title ? element.title.slice(0, 45) : ""}
//                   description={
//                     element.description ? element.description.slice(0, 88) : ""
//                   }
//                   imageUrl={element.urlToImage}
//                   newsUrl={element.url}
//                   author = {element.author}
//                   date = {element.publishedAt}
//                   source = {element.source.name}
//                 />
//               </div>
//             );
//           })}
//         </div>
//         </div>
//         </InfiniteScroll>
//         {/* <div className="container d-flex justify-content-between">
//           <button
//             disabled={this.state.page <= 1}
//             type="button"
//             className="btn btn-primary mx-4 my-2"
//             onClick={this.handlePrevPage}
//           >
//             &larr; Previous
//           </button>
//           <button
//             disabled={Math.ceil(this.state.page + 1 > this.state.totalResults / 10)}
//             type="button"
//             className="btn btn-primary mx-4 my-2"
//             onClick={this.handleNextPage}
//           >
//             Next &rarr;
//           </button>
//         </div> */}
//       {/* </div> */}

//     </>
//     );
//   }
// }
