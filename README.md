# Assignment 1 - ReactJS app.

Name: Jack Pender

## Features.

...... A bullet-point list of the ADDITIONAL user features you have implemented for the  Movies Fan app ......,
 
 + Watchlist page created - allows users to add upcoming movie to a watch list
 + Added a cast tab to movieDetailsPage - displays the cast of the movie in question
 + Similar movies tab added to movieDetailsPage - displays similar movies to the movie in question
 + Added actorDetailsPage- display the details of an actor when selected from the cast of a movie
 + Added a top rated movies page - displays the top rated movies on tmdb

## API Data Model.

..... List the additional TMDB endpoints used in your assignment, e.g.

+ https://api.themoviedb.org/3/movie/upcoming - get a list of upcoming movies 
+ https://api.themoviedb.org/3/movie/${id}/credits - get the cast of a movie 
+ https://api.themoviedb.org/3/movie/top_rated - gets a list of the top rated movies
+ https://api.themoviedb.org/3/movie/${id}/similar - gets a list of similar movies of a specific movie
+ https://api.themoviedb.org/3/person/${id} - gets the details of an actor
+

## App Design.

### Component catalogue (If required).

....... Insert a screenshot from the Storybook UI, hi-light stories relating to new/modified components you developed - see example screenshot below] .......

![][stories]

### UI Design.

...... Insert screenshots of the new/modified views you have added to the Movies Fan app. Include a caption for each one clearly stating its purpose and any user interaction it supports ........

![][cast]
>Shows the cast of a movie in the movieDetailsPage

![][watchListFull]
>Shows a list of movies added to watch list from upcoming movies

![][topRated]
>Shows a list of the top rated movies

## Routing.

...... Insert a list of the additional routes supported by your Movies Fan app. If relevant, specify which of the routes require authentication, i.e. protected/private.

+ /person/:id - displays an actors details
+ /movies/watchlist - displays a list of movies added to the watchlist
+ /movies/${id}/similar - displays a list of movies similar to the selected movie
+ /movies/${id}/credits - shows the cast of the selected movie
+ /movies/top_rated - displays a list of the top rated movies

### Data hyperlinking.

.... Use screenshots to illustrate where data hyperlinking is present in your views - include captions.

![][cast]
![][actorDetail]
>Shows the details of a selected actor from the cast of a movie

![][witches]
![][witchesSimilar]
![][witches2]
>Selecting a movie in similar movies bring you to the details page of that movie

---------------------------------

[cast]: ./cast.jpg
[actorDetail]: ./nicCage.jpg
[topRated]: ./topRated.jpg

[upcomingFull]: ./upcomingFull.jpg
[upcoming]: ./upcoming.jpg
[watchListFull]: ./watchListFull.jpg
[watchList]: ./watchList.jpg

[witches]: ./witches.jpg
[witchesSimilar]: ./witchesSimilar.jpg
[witches2.jpg]: ./witches2.jpg
