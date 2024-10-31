import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './History.css';
import { useNavigate } from 'react-router-dom';
import SpacexIcon from './../../Assets/Icons/Spacexstarship.png'; 
import RedditIcon from './../../Assets/Icons/Reddit.png'; 
import WikipediaIcon from './../../Assets/Icons/Wikipedia.png'; 
import SearchIcon from "./../../Assets/Icons/SearchIcon.svg";

// Function to format date
const formatDate = (utcDate) => {
    const date = new Date(utcDate);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
};

// Function to truncate text
const truncateText = (text, maxLength = 100) => {
    if (!text) return 'No details available';
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
};

const History = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1); 
    const [searchTerm, setSearchTerm] = useState(""); 
    const [sortOrder, setSortOrder] = useState("flight_number"); 
    const itemsPerPage = 5; 
    
    const fetchHistoryData = async () => {
        setLoading(true); 
        try {
            const response = await axios.get('https://api.spacexdata.com/v3/history', {
                params: {
                    sort: 'title'
                },
            });
            setData(response.data);
        } catch (error) {
            console.error("There was an error fetching data!", error);
        } finally {
            setLoading(false); 
        }
    };

    useEffect(() => {
        fetchHistoryData(); 
    }, [sortOrder]); 

    
    const filteredData = data.filter(item => 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        (item.details && item.details.toLowerCase().includes(searchTerm.toLowerCase())) // Check if details exist
    );
    
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentData = filteredData.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1); 
    };

    const handleSortChange = (e) => {
        setSortOrder(e.target.value);
        setCurrentPage(1); 
    };

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    return (
        <div className="history-table-container">
            <h2>History</h2>
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
                        value={sortOrder} 
                        onChange={handleSortChange} 
                        className="sort-dropdown"
                    >
                        <option value="flight_number">Flight Number</option>
                        <option value="newest">Newest</option>
                        <option value="oldest">Oldest</option>
                    </select>
                </div>
            </div>

            <table className="history-table">
                <thead>
                    <tr>
                        <th>Flight Number</th> 
                        <th>Title</th>
                        <th>Event Date</th>
                        <th>Details</th>
                        <th>Links</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {currentData.map((item) => (
                        <tr key={item.id}>
                            <td>{item.flight_number || 'N/A'}</td> 
                            <td>{item.title}</td>
                            <td>{formatDate(item.event_date_utc)}</td>
                            <td title={item.details}>{truncateText(item.details)}</td>
                            <td>
                                {item.links && (
                                    <>
                                        {item.links.article && (
                                            <a href={item.links.article} target="_blank" rel="noopener noreferrer">
                                                <img src={SpacexIcon} alt="Article" title="Article" className="link-icon" />
                                            </a>
                                        )}
                                        {item.links.reddit && (
                                            <a href={item.links.reddit} target="_blank" rel="noopener noreferrer">
                                                <img src={RedditIcon} alt="Video" title="Video" className="link-icon" />
                                            </a>
                                        )}
                                        {item.links.wikipedia && (
                                            <a href={item.links.wikipedia} target="_blank" rel="noopener noreferrer">
                                                <img src={WikipediaIcon} alt="Wikipedia" title="Wikipedia" className="link-icon" />
                                            </a>
                                        )}
                                    </>
                                )}
                            </td>
                            <td>
                                <button className="status-button" onClick={() => navigate(`/history-view/${item.id}`)}>
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

export default History;
