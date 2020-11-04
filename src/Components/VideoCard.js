import React, { forwardRef } from 'react';
import TextTruncate from 'react-text-truncate';
import ThumbUpSharpIcon from "@material-ui/icons/ThumbUpSharp";
import './VideoCard.css';

const base_url = "https://image.tmdb.org/t/p/original/"

const VideoCard = forwardRef(({ movie }, ref) => {
    return (
        <div ref={ref} className="videoCard">
            <img 
            src={`${base_url}${movie.backdrop_path || movie.poster_path}`} 
            alt={movie.title || movie.original_name}/>
            
            <TextTruncate
                line={1}
                element="p"
                truncateText="..."
                text={ movie.overview }
            />
            <h3>{movie.title || movie.original_name}</h3>
            <p className="videoCard-stats">
                {movie.release_date || movie.first_air_date} |
                <span style={{ paddingRight: "5px" }}> {movie.vote_count}</span>
                <ThumbUpSharpIcon />
            </p>
        </div>
    )
});

export default VideoCard;
