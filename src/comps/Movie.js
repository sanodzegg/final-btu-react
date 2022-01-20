import React from 'react';

const IMAGES = "https://image.tmdb.org/t/p/original";

const Movie = ({title, poster_path, overview, vote_average}) => {
    return (
        <div className="movie">
            <img src={IMAGES + poster_path} alt={title}/>
            <div className="movie-info">
                <h3>{title}</h3>
                <span>{vote_average}</span>
            </div>
            <div className="movie-over">
                <h2>Overview:</h2>
                <p>{overview}</p>
            </div>
        </div>
    )
}

export default Movie;