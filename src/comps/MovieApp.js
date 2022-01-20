import React, {useEffect, useState} from 'react';
import Movie from './Movie';
import Header from './Header';
import '../css/global.css';

const API_KEY = 'api_key=da0ec74f280b41c3b79d45fa4cd12578';
const BASE_URL = "https://api.themoviedb.org/3";
const FEATURED = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;

const MovieApp = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(FEATURED)
    .then((res) => res.json())
    .then((data) => {
      setMovies(data.results)
    })
  }, []);

  return (
    <>
    <Header />
    <div className='movieContainer'>
        {movies.length > 0 && movies.map((movie)=> {
          return <Movie key={movie.id} {...movie}/>
        })}
      </div>
    </>
  );
}

export default MovieApp;