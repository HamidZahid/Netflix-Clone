import React, { useState, useEffect } from 'react';
import axios from './axios';
import "./Row.css"
const base_url = "https://image.tmdb.org/t/p/orginal/";
export default function Row({ title, fetchUrl, isLargeRow }) {

    const [movie, setMovies] = useState([]);

    useEffect(() => {

        async function fetchData() {
            const requests = await axios.get(fetchUrl);
            setMovies(requests.data.results);
            return requests;
        }
        fetchData();
    }, [fetchUrl]);

    return (
        <div className='row' >
            <h2>{title}</h2>
            <div className="row_posters">
                {movie.map(movie => (
                    <img key={movie.id} className={`row_poster ${isLargeRow && "row_posterLarge"}`} src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                ))}
            </div>
        </div>
    )
}
