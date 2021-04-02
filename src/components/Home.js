import React, { useState } from "react";
import PictureOfTheDay from "./PictureOfTheDay";
import { ResultCard } from "./ResultCard";
import PictureData from "./PictureData";
import ReactPaginate from "react-paginate";
import NoDataFound from "./NoDataFound";

export const Home = () => {
  const [picofTheDay, setPicofTheDay] = useState(true);
  const [results, setResults] = useState([]);
  const relatedsearch = ["Apollo","Gemini","Buzz","Spaceflight"]
  const [picture] = PictureData();
  const [ paginateActive, setPaginateActive ] = useState(false);
 // console.log(picture)

  const onChange = (e) => {
    e.preventDefault();
    setPicofTheDay(false);
    setPaginateActive(true);
    fetchData(e.target.value);
   
  };

  const fetchData = (query) => {
    if(query.length > 0)
    {
      fetch(
        `https://images-api.nasa.gov/search?q=${query}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (!data.errors && data.collection.items) {
            setResults(data.collection.items);
           // console.log(data.collection.items)
          } else {
            setResults([]);
          }
        });
    } 
  }

  const relatedSearch =(item) =>{
    fetchData(item);
  };


  const [pageNumber, setPageNumber] = useState(0);

  const itemssPerPage = 3;
  const pagesVisited = pageNumber * itemssPerPage;

  const displayData = results
    .slice(pagesVisited, pagesVisited + itemssPerPage)
    .map((result) => {
      return (
        <div>
            <ul className="results">
                <li key={result.id}>
                     <ResultCard resultItem={result} />                           
                </li>
            </ul>
            
        </div>
      );
    });
    

  const pageCount = Math.ceil(results.length / itemssPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
          <div className="container">
            <div className="title">
               <h3>NASA Media Search</h3>
            </div>
            
            <div className="row">
                <h4>{picture.title}</h4>
                <input
                  type="text"
                  placeholder="Search your Movie"
                  onChange={onChange}
                />
            </div>{
              picofTheDay ? <PictureOfTheDay/> :  results.length === 0 ? <NoDataFound/> : null 
            }  
            
            {displayData}
            {
              paginateActive ? 
              <>
              <ReactPaginate
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"paginationBttns"}
              activeClassName={"paginationActive"}
            /> 
             <div className='relatedlinks'>
               <h3>Related Searches: </h3>
                {relatedsearch.map((item)=>
                  <p onClick={()=> relatedSearch(item)}>{item}</p>
                )}
            </div>
            </>
            :
            null
            }
           
           
          </div>

         
  );
};
