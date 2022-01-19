import React, { useEffect, useState } from "react";
import axios from "./axios";
import styles from "./Row.module.css";

const url = "https://image.tmdb.org/t/p/original/";

const Row = (props) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchMovie() {
            const request = await axios.get(props.fetchUrl);
            console.log(request.data.results);
            setMovies(request.data.results);
            return request;
        }
        fetchMovie();
    }, [props.fetchUrl]);

    return (
        <div className={styles.row}>
            <h2>{props.title}</h2>
            <div className={styles.row__posters}>
                {movies.map((movie) => (
                    <img
                        key={movie.id}
                        className={styles.row__poster}
                        src={`${url}${
                            props.isLargeRow
                                ? movie.poster_path
                                : movie.backdrop_path
                        }`}
                        alt={movie.name}
                    />
                ))}
            </div>
        </div>
    );
};

export default Row;
