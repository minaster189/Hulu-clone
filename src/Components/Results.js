import React, { useState, useEffect } from 'react';
import VideoCard from './VideoCard';
import axios from '../axios';
import FlipMove from "react-flip-move";
import './Results.css';

function Results({ selectedOption }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(selectedOption);
            setMovies(request.data.results);
            return request;
        }   
        fetchData();
    }, [selectedOption])

    return (
        <div className="results">
            {movies.map(movie => (
                <FlipMove key={movie.id}>
                     <VideoCard movie={movie}/>
                </FlipMove>
             ))}
        </div>
    )
}

export default Results;
