import React, { useEffect,useState } from 'react';
import MovieTable from './pages/MovieTable/MovieTable';
import './App.scss';

function App() {
  const [movieData,setMovieData] = useState(null);

  useEffect(() => {
    //defining async function inside the callback function 
    //instead of making the callback itself as async to avoid race conditions
    async function fetchMovieData() {
      const response = await fetch('https://skyit-coding-challenge.herokuapp.com/movies');
      const data = await response.json();
      //format rating to percentage format
      for (let i = 0; i < data.length; i++) {
        data[i].rating = (data[i].rating * 20).toFixed(2) + '%';        
      }
      setMovieData(data);
    }
    fetchMovieData();
  },[]);

  return (
    <div className="App">
      <header className="page-header">Favourite Movie List</header>
      <MovieTable movieData={movieData} />
    </div>
  );
}

export default App;
