import React, { useEffect, createContext, useReducer } from "react";
import { getMovies } from "../api/tmdb-api";
import { getUpcomingMovies } from "../api/tmdb-api";
import { getTopRatedMovies} from "../api/tmdb-api";

export const MoviesContext = createContext(null);
//export const UpcomingMoviesContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "add-favorite":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id ? { ...m, favorite: true } : m
        ),
        // upcoming: [...state.upcoming],
        // top_rated: [...state.top_rated]
      };
    case "load":
      return { movies: action.payload.movies, top_rated: [...state.top_rated], upcoming: [...state.upcoming]};
      case "load-upcoming":
      return { upcoming: action.payload.movies, movies: [...state.movies], top_rated: [...state.top_rated] };
      case "load-top_rated":
        return { top_rated: action.payload.movies, movies: [...state.movies], upcoming: [...state.upcoming] };
      case "add-review":
        return {
          movies: state.movies.map((m) =>
            m.id === action.payload.movie.id
              ? { ...m, review: action.payload.review }
              : m
          ),
        };
    //   break;
    case "add-watchlist":
      return {
        upcoming: state.upcoming.map((m) =>
          m.id === action.payload.movie.id ? { ...m, watchlist: true } : m
        ),
        movies: [...state.movies],
      };
    default:
      return state;
  }
};

const MoviesContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { movies: [], upcoming: [], top_rated: [] });

  const addToFavorites = (movieId) => {
    const index = state.movies.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-favorite", payload: { movie: state.movies[index] } });
  };

  const addReview = (movie, review) => {
    dispatch({ type: "add-review", payload: { movie, review } });
  }; 

  const addToWatchlist = (movieId) => {
      const index = state.upcoming.map((m) => m.id).indexOf(movieId);
      dispatch({type: "add-watchlist", payload: { movie: state.upcoming[index] } });
  }
  
  useEffect(() => {
    getMovies().then((movies) => {
      dispatch({ type: "load", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getUpcomingMovies().then((movies) => {
      dispatch({ type: "load-upcoming", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getTopRatedMovies().then((movies) => {
      dispatch({ type: "load-top_rated", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MoviesContext.Provider
      value={{
        movies: state.movies,
       // favorites: state.favorites
        upcoming: state.upcoming,
        top_rated: state.top_rated,
        addToFavorites: addToFavorites,
        addReview: addReview,
        addToWatchlist: addToWatchlist,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;

// export const UpcomingMoviesContextProvider = (props) => {
//   const [state, dispatch] = useReducer(reducer, { movies: [] });

//   useEffect(() => {
//     getMovies().then((movies) => {
//       dispatch({ type: "load", payload: { movies } });
//     });
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   useEffect(() => {
//     getUpcomingMovies().then((movies) => {
//       dispatch({ type: "load-upcoming", payload: { movies } });
//     });
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return (
//       <UpcomingMoviesContext.Provider
//         value={{
//             movies: state.movies,
//             upcoming: state.upcoming
//         }}
//         >
//           {props.children}
//         </UpcomingMoviesContext.Provider>
//   )
// }

//export const UpcomingMoviesContextProvider;

// import React, { useState, useEffect } from "react";
// import StubAPI from "../api/stubAPI";
// import { getMovies } from "../api/tmdb-api";

// export const MoviesContext = React.createContext(null)

// const MoviesContextProvider = props => {
//   const [movies, setMovies] = useState([]);

//   const addToFavorites = movieId => {
//     setMovies(movies => {
//       const index = movies.map(m => m.id).indexOf(movieId);
//       StubAPI.add(movies[index])
//       movies.splice(index, 1)
//       return [...movies]
//     });
//   };
//   useEffect(() => {
//     getMovies().then(movies => {
//       setMovies(movies);
//     });
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return (
//     <MoviesContext.Provider
//       value={{
//         movies: movies,
//         addToFavorites: addToFavorites
//       }}
//     >
//       {props.children}
//     </MoviesContext.Provider>
//   );
// };

// export default MoviesContextProvider