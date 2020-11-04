import React from 'react';
import requests from "../requests";
import './Nav.css';

function Nav({ setSelectedOption }) {
    return (
        <div className="nav">
            <h3 onClick={() => {setSelectedOption(requests.fetchTrending)}}>
                Trending
            </h3>

            <h3 onClick={() => {setSelectedOption(requests.fetchTopRated)}}>
                Top Rated
            </h3>

            <h3 onClick={() => {setSelectedOption(requests.fetchAction)}}>
                Action
            </h3>

            <h3 onClick={() => {setSelectedOption(requests.fetchComedy)}}>
                Comedy
            </h3>

            <h3 onClick={() => {setSelectedOption(requests.fetchHorror)}}>
                Horror
            </h3>

            <h3 onClick={() => {setSelectedOption(requests.fetchRomance)}}>
                Romance
            </h3>

            <h3 onClick={() => {setSelectedOption(requests.fetchMystery)}}>
                Mystery
            </h3>

            <h3 onClick={() => {setSelectedOption(requests.fetchSciFi)}}>
                Sci-Fi
            </h3>

            <h3 onClick={() => {setSelectedOption(requests.fetchWestern)}}>
                Western
            </h3>

            <h3 onClick={() => {setSelectedOption(requests.fetchAnimation)}}>
                Animation
            </h3>

            <h3 onClick={() => {setSelectedOption(requests.fetchTV)}}>
                TV Movie
            </h3>
        </div>
    )
}

export default Nav;
