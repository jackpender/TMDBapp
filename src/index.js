import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homePage";
import MoviePage from './pages/movieDetailsPage'

import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom"
import FavoriteMoviesPage from './pages/favoritesMoviesPage' 

import MovieReviewPage from "./pages/movieReviewPage";

import SiteHeader from './components/siteHeader'

import UpcomingMoviesPage from './pages/upcomingMoviesPage'

import MoviesContextProvider from "./contexts/moviesContext";

import GenresContextProvider from "./contexts/genresContext";

import AddMovieReviewPage from './pages/addMovieReviewPage'

import WatchlistMoviesPage from "./pages/watchlistMoviesPage";

import TopRatedMoviesPage from "./pages/topRatedMoviesPage";

import ActorDetailsPage from "./pages/actorDetailsPage";

const App = () => {
    return (
      <BrowserRouter>
      <div className="jumbotron">
          <SiteHeader></SiteHeader>
        <div className="container-fluid">
          {/* <ul className="navbar-nav text-black">
            <li className="nav-item">
              <Link className="nav-link " to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/movies/upcoming">
                Upcoming Movies
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/movies/favorites">
                Favorites
              </Link>
            </li>
            <li classname="nav-item">
              <Link classname="nav-link " to="/movies/upcoming/watchlist">
                Watchlist
              </Link>
            </li>
            <li classname="nav-item">
              <Link classname="nav-link " to="/movies/top_rated">
                Top Rated
              </Link>
            </li>
          </ul> */}
          <MoviesContextProvider>
          <GenresContextProvider>
          <Switch>
          <Route exact path="/reviews/form" component={AddMovieReviewPage} />
            <Route path="/reviews/:id" component={MovieReviewPage} />
            <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
            {/* <Route exact path="/movies/top_rated" component={TopRatedMoviesPage} /> */}
            <Route exact path="/movies/upcoming" component ={UpcomingMoviesPage} />
            <Route exact path="/movies/watchlist" component={WatchlistMoviesPage} />
            <Route exact path="/movies/top_rated" component={TopRatedMoviesPage} />
            <Route exact path="/person/:id" component={ActorDetailsPage} />
            <Route path="/movies/:id" component={MoviePage} />
            <Route path="/" component={HomePage} />
            <Redirect from="*" to="/" />
          </Switch>
          </GenresContextProvider>
          </MoviesContextProvider>
        </div>
      </div>
    </BrowserRouter>
    );
  };

ReactDOM.render(<App />, document.getElementById("root"));
