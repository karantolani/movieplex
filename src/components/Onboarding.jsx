import "./Onboarding.css";
import onboardingBg from "../images/onboarding_bg.jpg";
import {queries} from "../searchQueries";
import {useNavigate} from "react-router-dom";

function Onboarding() {
    const navigate = useNavigate();

    const randomSearch = () => {
        const query = queries[Math.floor(Math.random() * queries.length)];
        navigate(`/?search=${query}`);
    };
    return (
        <div className="onboarding-container">
            <img src={onboardingBg} className="onboarding-img"/>
            <h1>Discover your favourite movies & shows</h1>
            <button onClick={randomSearch}>Random Search</button>
        </div>
    )
}

export default Onboarding;