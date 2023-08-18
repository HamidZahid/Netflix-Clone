import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
function App() {
  return (
    <div className="App">
      <h1>Hi Hamid Zahid! Let's create Netflix-Clone Front-End Today :</h1>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
    </div>
  );
}

export default App;
