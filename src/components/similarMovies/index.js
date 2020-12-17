import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./similarMovies.css";
import "../../globals/fontawesome";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getSimilarMovies } from "../../api/tmdb-api";

export default ({ movie }) => {
    const [similar, setSimilarMovies] = useState([]);

    useEffect(() => {
        getSimilarMovies(movie.id).then(similar => {
          setSimilarMovies(similar);
        });
      }, []);

return (
    <div className="col-sm-3">
        {similar.map(s => {
            return (
              <div className="card bg-white">
              <div key={s.id}>
                <Link to={`/movies/${s.id}`}>
                   <img
                      className="card-img-tag center "
                      alt={s.title}
                      src={
                      s.poster_path
                         ? `https://image.tmdb.org/t/p/w500/${s.poster_path}`
                        : "./film-poster-placeholder.png"
                      }
                    />
                 </Link>
                 <div class="card-body">
                <h4 class="card-title">{s.title}</h4>
                <div>{s.release_date}</div>
                </div>
              </div>
              </div>
            );
          })}
    </div>
  );
};

//export default SimilarMovies;