import SingleMovie from "./SingleMovie";
import "./Movies.css";
import {useEffect, useRef, useState} from "react";
import searchESImg from "../images/search_empty_state.svg";
import EmptyState from "./EmptyState";
import wrongESImg from "../images/wrong_empty_state.svg";
import {API_KEY} from "../config";


function Movies({searchQuery}) {
    const [moviesData, setData] = useState(undefined);
    const [error, setError] = useState(undefined);
    const [loading, setLoading]  = useState(false);

    const pageRef = useRef(1);

    useEffect(() => {
        const endpoint = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchQuery}`;
        pageRef.current = 1;

        fetch(endpoint)
            .then(response => {
                return response.json();
            })
            .then(data => {
                if (data["Response"] === 'False') {
                    setError({
                        message: data["Error"],
                        img: searchESImg
                    });
                    return;
                }

                setError(undefined);
                setData({
                    totalResults: data["totalResults"],
                    movies: data["Search"]
                });
            })
            .catch(err => {
                setError({
                    message: err.message,
                    img: wrongESImg
                });
            })

    }, [searchQuery]);

    const showMoreMovies = () => {
        pageRef.current += 1;

        const endpoint = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchQuery}&page=${pageRef.current}`;
        setLoading(true);

        fetch(endpoint)
            .then(response => {
                return response.json();
            })
            .then(data => {
                if (data["Response"] === 'False') {
                    setError({
                        message: data["Error"],
                        img: searchESImg
                    });
                    return;
                }

                setLoading(false);
                setError(undefined);
                setData({...moviesData, movies: [...moviesData.movies, ...data["Search"]]});
            })
            .catch(err => {
                setLoading(false);
                setError({
                    message: err.message,
                    img: wrongESImg
                });
            })

    };
    return (
        error ? <EmptyState imgSrc={error.img} title={error.message} /> :
        <div className="movies">
            <p className="text-search-result">
                We have found <span className="result-count">{moviesData && moviesData.totalResults}</span> results
            </p>
            {moviesData && moviesData.movies.map(movie => <SingleMovie key={movie.imdbID} {...movie}/>)}
            {
                moviesData && moviesData.totalResults > moviesData.movies.length && !loading && <button className="btn-show-more" onClick={showMoreMovies}>Show more</button>
            }
        </div>
    );
}

export default Movies;