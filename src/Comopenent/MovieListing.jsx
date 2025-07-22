import React, { useEffect, useState } from 'react'
import MoviesCard from './MoviesCard'
import { toast } from 'react-toastify';
import axios from 'axios';

export default function MovieListing() {
  const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=";
  const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

  let [searchType, setSearchType] = useState('');
  let [movie, setMovie] = useState([])
  let [currentPage, setCurrentPage] = useState(1)

  var searchMovie = (event) => {
    setSearchType(event.target.value);

  }

  useEffect(() => {
    if (searchType == '') {
      var url = APIURL + currentPage;
    } else {
      var url = SEARCHAPI + searchType;
    }
    axios.get(url)
      .then((responce) => {
        if (responce.data.results) {
          setMovie(responce.data.results)
        }
        else {
          toast.error("something went wrong!")

        }
      })
      .catch((error) => {
        toast.error("something went wrong")
      })
  }, [searchType, currentPage])

  var previous = () => {
    if (currentPage > 1) {
      currentPage--
      setCurrentPage(currentPage)
    }
  }

  var NextPage = () => {
    currentPage++
    setCurrentPage(currentPage)
  }
  return (
    <>
      <div className="main">
        <div className="row" style={{ "justifyContent": "center" }}>
          <input type="search" id="search" autoFocus autoComplete="off" placeholder="Search here..." onKeyUp={searchMovie} />
        </div>
        <div className="row" id="movie-box">
          {
            movie.map((v, ind) => {
              return (
                <MoviesCard key={ind} film={v} inde={ind} />
              )
            })
          }
        </div>
      </div>

      <div className="button">
        <button onClick={previous}>previous</button>
        <button onClick={NextPage}>Next</button>

      </div>
    </>
  )
}
