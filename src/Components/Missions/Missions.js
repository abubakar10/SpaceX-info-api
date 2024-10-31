import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Missions.css';
import { useNavigate } from 'react-router-dom';
import WikipediaIcon from './../../Assets/Icons/Wikipedia.png'; 
import TwitterIcon from './../../Assets/Icons/TwitterIcon.png'; 
import WebsiteIcon from './../../Assets/Icons/Spacexlogo.svg';
import SearchIcon from "./../../Assets/Icons/SearchIcon.svg";

const truncateText = (text, maxLength = 100) => {
    if (!text) return 'No details available';
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
};

const Missions = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const itemsPerPage = 2; 

    const fetchMissions = (page) => {
        const offset = (page - 1) * itemsPerPage;

        setLoading(true); 
        axios.get(`https://api.spacexdata.com/v3/missions?limit=${itemsPerPage}&offset=${offset}`)
            .then((response) => {
                setData(response.data);
                setTotalPages(Math.ceil(10/ itemsPerPage)); 
                setLoading(false); 
            })
            .catch((error) => {
                console.error("Error fetching data!", error);
                setLoading(false);
            });
    };

    
    useEffect(() => {
        fetchMissions(currentPage);
    }, [currentPage]);

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1); 
    };

    const handleSortChange = (e) => {
       
        setCurrentPage(1); 
    };

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    return (
        <div className="missions-table-container">
            <h2>Missions</h2>
            <div className="controls">
                <div className='search'>
                    <img src={SearchIcon} alt="" />
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="search-input"
                    />
                </div>
                <div className="sort-options">
                    <label htmlFor="sortOrder">Sort by:</label>
                    <select 
                        id="sortOrder" 
                        onChange={handleSortChange} 
                        className="sort-dropdown"
                    >
                        <option value="newest">Newest</option>
                        <option value="oldest">Oldest</option>
                    </select>
                </div>
            </div>

            <table className="missions-table">
                <thead>
                    <tr>
                        <th>Mission Name</th>
                        <th>Manufacturers</th>
                        <th>Description</th>
                        <th>Links</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.mission_id}>
                            <td>{item.mission_name}</td>
                            <td>{item.manufacturers.join(', ')}</td>
                            <td title={item.description}>{truncateText(item.description)}</td>
                            <td className='links'>
                                {item.wikipedia && (
                                    <a href={item.wikipedia} target="_blank" rel="noopener noreferrer">
                                        <img src={WikipediaIcon} alt="Wikipedia" title="Wikipedia" className="link-icon" />
                                    </a>
                                )}
                                {item.twitter && (
                                    <a href={item.twitter} target="_blank" rel="noopener noreferrer">
                                        <img src={TwitterIcon} alt="Twitter" title="Twitter" className="link-icon" />
                                    </a>
                                )}
                                {item.website && (
                                    <a href={item.website} target="_blank" rel="noopener noreferrer">
                                        <img src={WebsiteIcon} alt="Website" title="Website" className="link-icon" />
                                    </a>
                                )}
                            </td>
                            <td className='btn'>
                                <button className="status-button" onClick={() => navigate(`/missions-view/${item.mission_id}`)}>
                                    View
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Pagination Controls */}
            <div className="pagination">
                <button 
                    onClick={() => handlePageClick(currentPage - 1)} 
                    disabled={currentPage === 1}>
                    &lt;
                </button>
                {[...Array(totalPages)].map((_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => handlePageClick(index + 1)}
                        className={currentPage === index + 1 ? 'page-number active' : 'page-number'}
                    >
                        {index + 1}
                    </button>
                ))}
                <button
                    onClick={() => handlePageClick(currentPage + 1)} 
                    disabled={currentPage === totalPages}>
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default Missions;
