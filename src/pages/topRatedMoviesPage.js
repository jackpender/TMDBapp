import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
//import AddToFavoritesButton from '../components/buttons/addToFavorites'

const TopRatedPage = () => {
  const context = useContext(MoviesContext);
  const movies = context.top_rated;//.filter((m) => {  // New
    //return !("favorite" in m);
 // });

  return (
      <PageTemplate 
        title='No. Movies'
        movies={movies}
        action={(top_rated) => {
          //return <AddToFavoritesButton movie={top_rated} /> 
        }}
      />
  );
};

export default TopRatedPage;