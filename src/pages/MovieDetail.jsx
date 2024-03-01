import "./MovieDetail.css";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import searchESImg from "../images/search_empty_state.svg";
import wrongESImg from "../images/wrong_empty_state.svg";
import EmptyState from "../components/EmptyState";
import {API_KEY} from "../config";


function MovieDetail() {
    const [movieDetail, setMovieDetail] = useState(undefined);
    const [error, setError] = useState(undefined);

    const {imdbID} = useParams();

    useEffect(() => {
        const endpoint = `https://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbID}&plot=full`;


        fetch(endpoint)
            .then(response => response.json())
            .then(data => {
                if (data["Response"] === 'False') {
                    setError({
                        message: data["Error"],
                        img: searchESImg
                    });
                    return;
                }

                setError(undefined);
                setMovieDetail(data);
            }).catch(err => {
            setError({
                message: err.message,
                img: wrongESImg
            });
        });
    }, [imdbID]);

    return (
        error ? <EmptyState imgSrc={error.img} title={error.message}/> :
            <>
                {movieDetail && <>
                    <div className="movie-detail-container">
                        <img className="movie-detail-img" src={movieDetail.Poster}/>
                        <div className="movie-info">
                            <h1 className="movie-detail-title">{movieDetail.Title}</h1>
                            <span className="movie-sub-info">{movieDetail.Type}</span>
                            <span className="movie-sub-info">{`${movieDetail.Genre}  •  ${movieDetail.Language}`}</span>
                            <p className="movie-plot">
                                {movieDetail.Plot}
                            </p>
                            <div className="movie-facts-container">
                                <span className="key">Director</span>
                                <span className="value">{movieDetail.Director}</span>
                                <span className="key">Writers</span>
                                <span className="value">{movieDetail.Writer}</span>
                                <span className="key">Star Cast</span>
                                <span className="value">{movieDetail.Actors}</span>
                                <span className="key">Release</span>
                                <span className="value">{movieDetail.Released}</span>
                                <span className="key">Runtime</span>
                                <span className="value">{movieDetail.Runtime}</span>
                                <span className="key">Rated</span>
                                <span className="value">{movieDetail.Rated}</span>
                            </div>
                        </div>
                    </div>
                    <div className="movie-ratings-bottom">
                        <div className="grid-box">
                            <span className="property">IMDB Rating</span>
                            <span className="value">⭐ {movieDetail.imdbRating} / 10</span>
                        </div>
                        <div className="grid-box">
                            <span className="property">Box Office Collection</span>
                            <span className="value">{movieDetail.BoxOffice}</span>
                        </div>
                    </div>
                </>
                }
            </>
    );
}

export default MovieDetail;