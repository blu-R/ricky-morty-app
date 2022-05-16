import axios from "axios";
import React, { useEffect, useState } from "react";
import Pagination from "../Pagination/Pagination";
import ResidentList from "../ResidentList/ResidentList";
import "./Location.style.css";

const randomIndex = (limit) => Math.floor(Math.random() * limit);

function Location() {
    const [location, setLocation] = useState({});
    const [id, setId] = useState("");

    // const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(12);

    useEffect(() => {
        // const randomIndex = (limit) => Math.floor(Math.random() * limit);
        setLoading(true);
        axios
            .get(`https://rickandmortyapi.com/api/location/${randomIndex(127)}`)
            .then((res) => {
                setLocation(res.data);
                setLoading(false);
            });
    }, []);
    // console.log(location);
    // console.log(id);

    // GET CURRENT POSTS
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = location.residents?.slice(
        indexOfFirstPost,
        indexOfLastPost
    );

    const searchLocation = () => {
        axios
            .get(`https://rickandmortyapi.com/api/location/${id}`)
            .then((res) => {
                setLocation(res.data);
            });
    };

    // CHANGE PAGE

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="container-location">
            <div className="location-info">
                <h1>{location.name}</h1>
                <div className="row">
                    <div>
                        <b>Type: </b> {location.type}
                    </div>
                    <div>
                        <b>Dimension: </b> {location.dimension}
                    </div>
                    <div>
                        <b>Population: </b>
                        {location.residents?.length}
                    </div>
                </div>
                <div className="search">
                    <input
                        placeholder="Type a location id"
                        type="text"
                        onChange={(e) => setId(e.target.value)}
                        value={id}
                    />
                    <button onClick={searchLocation}>
                        <i className="fas fa-search"></i>
                    </button>
                </div>
            </div>
            <ResidentList
                // residents={location.residents}
                residents={currentPosts}
                loading={loading}
            />
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={location.residents?.length}
                paginate={paginate}
            />
        </div>
    );
}

export default Location;
