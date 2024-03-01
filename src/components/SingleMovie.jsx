import "./SingleMovie.css";
import {useNavigate} from "react-router-dom";

function SingleMovie({imdbID, Poster, Title, Year}) {
    const navigate = useNavigate();

    const handleMovieClick = () => {
        navigate(`/movie/${imdbID}`);
    }

    return (
        <div className="movie" onClick={handleMovieClick}>
            <img className="movie-img" src={Poster}/>
            <h1 className="movie-title">{Title}</h1>
            <p className="movie-year">{Year}</p>
        </div>
    )
}

export default SingleMovie;