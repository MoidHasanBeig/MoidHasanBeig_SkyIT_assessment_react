import React, { useEffect,useState } from 'react';
import MovieTable from './pages/MovieTable/MovieTable';
import './App.css';

function App() {
  const [movieData,setMovieData] = useState(null);

  useEffect(() => {
    //defining async function inside the callback function 
    //instead of making the callback itself as async to avoid race conditions
    async function fetchMovieData() {
      const response = await fetch('https://skyit-coding-challenge.herokuapp.com/movies');
      const data = await response.json();
      setMovieData(data);
    }
    fetchMovieData();
  },[]);

  return (
    <div className="App">
      <MovieTable movieData={movieData} />
    </div>
  );
}

export default App;
