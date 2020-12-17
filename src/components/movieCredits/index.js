import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCredits } from "../../api/tmdb-api";

export default ({ movie }) => {
  const [credits, setCredits] = useState([]);
    
  useEffect(() => {
    getCredits(movie.id).then(credits => {
      setCredits(credits);
    });
  }, []);

  return (
    
    <div className="col-sm-3">
        {credits.map(c => {
            return (
              <div className="card bg-white">
              <div key={c.id}>
                <Link to={{ pathname: `/person/${c.id}`,}}> 
                   <img
                      className="card-img-tag center "
                      alt={c.name}
                      src={
                      c.profile_path
                         ? `https://image.tmdb.org/t/p/w500/${c.profile_path}`
                        : "./film-poster-placeholder.png"
                      }
                    />
                 </Link>
                 <div className="card-body">
                <h4 className="card-title">{c.name}</h4>
                <h5 className="card-title center">( {c.character} )</h5>
                </div>
              </div>
              </div>
            );
          })}
    </div>
  );
};