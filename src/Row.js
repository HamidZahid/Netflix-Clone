import React, { useState, useEffect } from 'react';
import axios from './axios';
import "./Row.css"
const base_url = "https://image.tmdb.org/t/p/orginal/";
export default function Row({ title, fetchUrl }) {

    const [movie, setMovies] = useState([]);

    useEffect(() => {

        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    return (
        <div className='row' >
            <h2>{title}</h2>
            <div className="row_posters">
                {movie.map(movie => (
                    <img key={movie.id} className='row_poster' src={`${base_url}${movie.poster_path}`} alt={movie.name} />
                ))}
            </div>
        </div>
    )
}
