import React from "react";
import { Link, Route, withRouter } from "react-router-dom";
import MovieDetails from "../components/movieDetails";
import PageTemplate from "../components/templateMoviePage";
import MovieReviews from "../components/movieReviews";
import MovieCredits from "../components/movieCredits";
import useMovie from "../hooks/useMovie";
import SimilarMovies from "../components/similarMovies";

const MoviePage = props => {
    const { id } = props.match.params;
    const [movie] = useMovie(id)  // NEW
  return (
    <>
    {movie ? (
      <>
        <PageTemplate movie={movie}>
          <MovieDetails movie={movie} />
        </PageTemplate>
        <div className="row">
          <div className="col-12 ">
            {!props.history.location.pathname.endsWith("/reviews") ? (
              <Link
                className="btn btn-primary btn-block active"
                to={`/movies/${id}/reviews`}
              >
                Show Reviews (Extracts)
              </Link>
            ) : (
              <Link
                className="btn btn-primary btn-block active"
                to={`/movies/${id}`}
              >
                Hide Reviews 
              </Link>
            )}
          </div>
        </div>
        <div className="row">
          <div className="col-12 ">
            {!props.history.location.pathname.endsWith("/credits") ? (
                <Link
                  className="btn btn-primary btn-block active"
                  to={`/movies/${id}/credits`}
                >
                  Show Cast
                </Link>
              ) : (
                <Link
                  className="btn btn-primary btn-block active"
                  to={`/movies/${id}`}
                >
                  Hide Cast 
                </Link>
              )}
          </div>
        </div>
        <div className="row">
          <div className="col-12 ">
            {!props.history.location.pathname.endsWith("/similar") ? (
                <Link
                  className="btn btn-primary btn-block active"
                  to={`/movies/${id}/similar`}
                >
                  Show Similar Movies
                </Link>
              ) : (
                <Link
                  className="btn btn-primary btn-block active"
                  to={`/movies/${id}`}
                >
                  Hide Similar Movies 
                </Link>
              )}
          </div>
        </div>
        <Route
          path={`/movies/:id/reviews`}
          render={props => <MovieReviews movie={movie} {...props} />}
        />
        {/* <Route
          path={`/movies/:id/credits`}
          render={props => <MovieCredits movie={movie} {...props} />}
        /> */}
        <Route
        path={`/movies/:id/credits`}
        render={props => <MovieCredits movie={movie} />}
        />
        <Route
        path={`/movies/:id/similar`}
        render={props => <SimilarMovies movie={movie} />}
        />
      </>
    ) : (
      <p>Waiting for movie details</p>
    )}
  </>
  );
};

export default withRouter(MoviePage);

// import React, {useState, useEffect}  from "react";
// import MovieHeader from "../components/headerMovie";
// import MovieDetails from "../components/movieDetails";
// import "./moviePage.css";

// import {getMovie} from '../api/tmdb-api'

// const MoviePage = props => {
//     const { id } = props.match.params
//   const [movie, setMovie] = useState(null)
//   useEffect(() => {
//     getMovie(id).then(movie => {
//       setMovie(movie);
//     });
//   }, [id]);

//   return (
//     <>
//       {movie ? (
//         <>
//           <MovieHeader movie={movie} />
//           <div className="row">
//             <div className="col-3">
//               <img
//                 src={
//                   movie.poster_path
//                     ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
//                     : "./film-poster-placeholder.png"
//                 }
//                 className="movie"
//                 alt={movie.title}
//               />
//             </div>
//             <div className="col-9">
//               <MovieDetails movie={movie} />
//             </div>
//           </div>
//         </>
//         ) : (
//         <p>Waiting for movie details</p>
//       )}
//     </>
//   );
// };

// export default MoviePage;