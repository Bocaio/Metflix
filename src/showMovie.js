import { useEffect, useState } from "react";
import "./index.css";
import StarRating from "./Star";
import { Loader } from "./App";
import ErrorMessage from "./error";

const ShowMoive = ({ movieID, onWatched, watched, handleRemoveWatched }) => {
  const [details, setDetails] = useState({});
  const [loadingDetails, setLoadingDetails] = useState(false);
  const [erorrTime, setErrorTime] = useState(null);

  

  
  const isMovie = watched.find((e) => e.imdbID === movieID);
  useEffect(() => {
    async function fetchDetails(id) {
      try {
        setLoadingDetails(true);
        setErrorTime(null);
        const response = await fetch(
          `http://www.omdbapi.com/?apikey=70a5694a&i=${movieID}`
        );
        const data = await response.json();
        if (data.Poster === "N/A" || data.Plot === "N/A")
          throw new Error("Not Enough Information For this Movie!");
        setDetails(data);
      } catch (e) {
        setErrorTime(e.message);
      } finally {
        setLoadingDetails(false);
      }
    }
    fetchDetails(movieID);
    // checkWatched();
  }, [movieID]);

  console.log(watched);

  return (
    <>
      {loadingDetails && <Loader />}
      {!loadingDetails && erorrTime && <ErrorMessage>{erorrTime}</ErrorMessage>}
      {!loadingDetails && !erorrTime && (
        <div className="shortCut" key={movieID}>
          <img src={details.Poster}></img>
          <div>
            <h2>{details.Title}</h2>
            <p>{details.Actors}</p>
            <p>
              <span>{details.imdbRating}</span>
              <span>{details.Runtime}</span>
            </p>
          </div>
          <StarRating
            userRating={
               isMovie ? isMovie.userRating : 0
            }
            maxRating={10}
            onWatched={onWatched}
            handleRemoveWatched={handleRemoveWatched}
            isWatched={isMovie}
            details={details}
          >
            {isMovie ? "Remove from List" : "Add to List"}
          </StarRating>
          <p className="movieSummary">{details.Plot}</p>
        </div>
      )}
    </>
  );
};

export default ShowMoive;
