import React from "react";
import { Link, Route, withRouter } from "react-router-dom";
import ActorDetails from "../components/actorDetails";
import PageTemplate from "../components/templateActorPage";
// import MovieReviews from "../components/movieReviews";
//import ActorCredits from "../components/actorCredits";
import useActor from "../hooks/useActor";
//import SimilarMovies from "../components/similarMovies";

const ActorDetailsPage = props => {
    const { id } = props.match.params;
    const [person] = useActor(id)  // NEW
  return (
    <>
    {person ? (
      <>
        <PageTemplate person={person}>
          <ActorDetails person={person} />
        </PageTemplate>
      </>
    ) : (
      <p>Waiting for movie details</p>
    )}
  </>
  );
};

export default withRouter(ActorDetailsPage);
