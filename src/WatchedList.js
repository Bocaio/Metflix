
const WatchedList = ({watched,setShowMovie}) => {
  return <ul className="list">
          {watched.map((movie) => (
            <EachMovie movie={movie} key={movie.imdbID} setShowMovie={setShowMovie}></EachMovie>
          ))}
        </ul>
}

const EachMovie = ({movie,setShowMovie}) => {

    return <li onClick={() => setShowMovie(movie.imdbID)}>
    <img src={movie.Poster} alt={`${movie.Title} poster`} />
    <h3>{movie.Title}</h3>
    <div>
      <p>
        <span>⭐️</span>
        <span>{movie.imdbRating}</span>
      </p>
      <p>
        <span>🌟</span>
        <span>{movie.userRating}</span>
      </p>
      <p>
        <span>⏳</span>
        <span>{movie.runtime} min</span>
      </p>
    </div>
  </li>
}

const WatcheOrNot = ({watched,avgImdbRating,avgRuntime,avgUserRating}) => {
    return <div className="summary">
    <h2>Movies you watched</h2>
    <div>
      <p>
        <span>#️⃣</span>
        <span>{watched.length} movies</span>
      </p>
      <p>
        <span>⭐️</span>
        <span>{avgImdbRating}</span>
      </p>
      <p>
        <span>🌟</span>
        <span>{avgUserRating}</span>
      </p>
      <p>
        <span>⏳</span>
        <span>{avgRuntime} min</span>
      </p>
    </div>
  </div>
}

export {WatcheOrNot,WatchedList};