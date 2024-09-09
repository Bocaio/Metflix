import { useEffect, useState } from "react";

//importing components
import Navbar from "./Nav";
import ResultsMovies from "./Movies";
import { MoviesList } from "./Movies";
import { WatcheOrNot, WatchedList } from "./WatchedList";
import ShowMoive from "./showMovie";
import ErrorMessage from "./error";

//function to calculate the average of rating and runtime etc....
const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

//second main component
export default function App() {

//using useState
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [showMovie,setShowMovie] = useState();
  const [searchMovies,setSearchMovies] = useState('Avengers');
  const [loading,setLoading] = useState(false);
  const [showError,setShowError] = useState('');
  const [darkMode , setDarkMode] = useState(true);
  

  const avgImdbRating = average(watched.map((movie) => movie.imdbRating)).toFixed(2);
  const avgUserRating = average(watched.map((movie) => movie.userRating)).toFixed(2);
  //Calculating runtime average but runtime is a string with mins . so i have to use split and .at to trun it to a number
  const avgRuntime = average(watched.map((movie) => {
   return movie.Runtime.split(' ').at(0);
  })).toFixed(2);

//handleing search function 
  const handleSearch = (search) => {
    if(!search ) {setSearchMovies('Avengers');}
    else {

      setShowMovie();
      setSearchMovies(search);
    }
  }

  useEffect(() => {
    async function fetchMovie() {
      try{
        setLoading(true);
    setShowError(''); // resetting error message
      
      const response = await fetch(`http://www.omdbapi.com/?apikey=70a5694a&s=${searchMovies}`)
      if(!response.ok){ // due to internet connection or something else
        throw new Error('Something went wrong!')
      }
      const data = await response.json();
      if(data.Response === 'False'){ // for no movie and too many movies
        throw new Error(data.Error);
      }
      setMovies(data.Search);
      
      } catch(rre){ // showing error
        setShowError(rre.message);
      } finally{
      setLoading(false)
      }
    }
    fetchMovie()
  }, [searchMovies]);

  const handleSetWatched = (movie,rating) => {
    movie.userRating = rating;
    setWatched((watched) => [...watched,movie]);
    setShowMovie()
  } 

  

  const handleRemoveWatched = (id) => {
    setWatched(watched => watched.filter(e => e.imdbID !== id));
    setShowMovie();
  }

  
  return (
    <>
      <Navbar movies={movies} handleSearch={handleSearch} darkMode={darkMode} setDarkMode={setDarkMode}></Navbar>
      <main className="main">
        <ResultsMovies>
          {loading && <Loader></Loader>}
          {showError && !loading && <ErrorMessage>{showError}</ErrorMessage>}
          {!loading && !showError && <MoviesList setShowMovie={setShowMovie}  movies={movies}></MoviesList>}
        </ResultsMovies>
        <ResultsMovies>
          {showMovie ? <ShowMoive watched={watched} handleRemoveWatched={handleRemoveWatched} movieID={showMovie} onWatched={handleSetWatched}></ShowMoive> : <div><WatcheOrNot
            watched={watched}
            avgImdbRating={avgImdbRating}
            avgRuntime={avgRuntime}
            avgUserRating={avgUserRating}
          ></WatcheOrNot>
          <WatchedList watched={watched} setShowMovie={setShowMovie}></WatchedList></div>}
        </ResultsMovies>
      </main>
    </>
  );
}

const Loader = () => {
  return <p className="loader">Loading ....</p>
}


export {Loader};