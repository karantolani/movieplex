import "./SearchForm.css";
import {useEffect, useState} from "react";
import {useNavigate, useSearchParams} from "react-router-dom";

function SearchForm() {
    const [searchParams, setSearchParams] = useSearchParams();
    const params = searchParams.get("search") || "";

    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        setSearchQuery(params);
    }, [params]);

    function handleInputChange(e) {
        setSearchQuery(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchQuery.trim().length !== 0) {
            navigate(`/?search=${searchQuery}`);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-container">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="20"
                     height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="lightgray" fill="none"
                     strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/>
                    <path d="M21 21l-6 -6"/>
                </svg>
                <input type="text" placeholder="Search for movies or tv shows" value={searchQuery} onChange={handleInputChange}/>
                <div className="clear-txt-btn" onClick={() => setSearchQuery("")} style={{
                    display: searchQuery.trim().length === 0 && "none"
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-xbox-x" width="20"
                         height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none"
                         strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M12 21a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9a9 9 0 0 0 -9 9a9 9 0 0 0 9 9z"/>
                        <path d="M9 8l6 8"/>
                        <path d="M15 8l-6 8"/>
                    </svg>
                </div>
            </div>
        </form>
    )
}

export default SearchForm;