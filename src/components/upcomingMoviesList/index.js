// import React from "react";
// import Movie from "../movieCard/";
// import "./movieList.css";

// const UpcomingMovieList = props => {
//   const movieCards = props.movies.map(m => (
//     <Movie key={m.id} movie={m} buttonHandler={props.buttonHandler} />
//   ));
//   return <div className="row movies bg-info">{movieCards}</div>;
// };

// export default UpcomingMovieList;

import React from "react";
import MovieHeader from '../headerMovie'
import "./moviePage.css";

const UpcomingMovieList = ({ movie, children }) => {
  return (
    <>
      <MovieHeader movie={movie} />
      <div className="row">
        <div className="col-3">
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : "./film-poster-placeholder.png"
            }
            className="movie"
            alt={movie.title}
          />
        </div>
        <div className="col-9">{children}</div>
      </div>
    </>
  );
};

export default UpcomingMovieList