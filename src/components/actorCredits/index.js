import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMovieCredits } from "../../api/tmdb-api";

export default ({ person }) => {
  const [movieCredits, setMovieCredits] = useState([]);
    
  useEffect(() => {
    getMovieCredits(person.id).then(movieCredits => {
      setMovieCredits(movieCredits);
    });
  }, []);

  return (
    
    <div className="col-sm-3">
        {movieCredits.map(c => {
            return (
              <div className="card bg-white">
              <div key={c.id}>
                <Link to={{ pathname: `/person/${c.id}/movie_credits`,}}> 
                   <img
                      className="card-img-tag center "
                      alt={c.name}
                      src={
                      c.poster_path
                         ? `https://image.tmdb.org/t/p/w500/${c.poster_path}`
                        : "./film-poster-placeholder.png"
                      }
                    />
                 </Link>
                 <div className="card-body">
                <h4 className="card-title">{c.title}</h4>
                {/* <h5 className="center">"( "{c.character}" )"</h5> */}
                </div>
              </div>
              </div>
            );
          })}
    </div>
  );
};