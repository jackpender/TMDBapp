import React from "react";
import "./actorDetails.css";

export default ({ person }) => {
  return (
    <>
      <h4>Overview</h4>
      <p>{person.biography}</p>
      <ul className="list-group list-group-horizontal">
        <li key="rdh" className="list-group-item list-group-item-dark">
          Date of Birth
        </li>
        <li key="rdv" className="list-group-item ">
          {person.birthday}
        </li>
      </ul>
      <ul className="list-group list-group-horizontal">
      <li key="rdh" className="list-group-item list-group-item-dark">
          Place of Birth
        </li>
        <li key="rdv" className="list-group-item ">
          {person.place_of_birth}
        </li>
      </ul>
      {/* <ul className="list-group list-group-horizontal">
      <li key="rdh" className="list-group-item list-group-item-dark">
          Popularity
        </li>
        <li key="rdv" className="list-group-item ">
          {person.popularity}
        </li>
      </ul> */}
    </>
  );
};