import EmptyState from "../components/EmptyState";
import "./Home.css";
import {useSearchParams} from "react-router-dom";
import Movies from "../components/Movies";
import camera from "../images/film-roll.png"
import Onboarding from "../components/Onboarding";

function Home() {
    const [searchParams] = useSearchParams();

    const searchQuery = searchParams.get("search");

    return (
        <div className="home-container">
            {searchQuery ?
                <Movies searchQuery={searchQuery}/> :
                <Onboarding /> }
        </div>
    )
}

export default Home;

// <EmptyState title="🍿 Get started and discover your favorite movies! 🍿"
            // imgSrc={camera} />}