import { useState } from "react";
import ButtonForOpen from "./buttonForOpen";

export default function ResultsMovies ({children}) {
  const [isOpen,setIsOpen] = useState(true)
    return <div className="box">
    <ButtonForOpen isOpen={isOpen} setIsOpen={setIsOpen}></ButtonForOpen>
    {isOpen && children}
  </div>

}

const MoviesList = ({movies,setShowMovie}) => {
  return <ul className="list">
    {movies?.map((movie) => (
          <EachMovie movie={movie} setShowMovie={setShowMovie} key={movie.imdbID}></EachMovie>
        ))}
  </ul>
}

const EachMovie = ({movie,setShowMovie}) => {
    return <li onClick={() => setShowMovie(movie.imdbID)}>
    <img src={movie.Poster} alt='Poster' />
    <h3>{movie.Title}</h3>
    <div>
      <p>
        <span>🗓</span>
        <span>{movie.Year}</span>
      </p>
    </div>
  </li>
} 

export {MoviesList} ;