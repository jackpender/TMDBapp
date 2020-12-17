import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToWatchlistButton from '../components/buttons/addToWatchlist'

const MovieListPage = () => {
  const context = useContext(MoviesContext);
  const upcoming = context.upcoming.filter((m) => {  // New
    return !("watchlist" in m);
  });

  return (
      <PageTemplate 
        title='No. Movies'
        movies={upcoming}  /* Changed */
        action={(upcoming) => {
          return <AddToWatchlistButton movie={upcoming} /> 
        }}
      />
  );
};

export default MovieListPage;