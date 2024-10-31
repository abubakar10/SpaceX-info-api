import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './HistoryView.css';
import RedditIcon from './../../Assets/Icons/Reddit.png'; 
import WikipediaIcon from './../../Assets/Icons/Wikipedia.png'; 
import SpaceXStarship from './../../Assets/Icons/Spacexstarship.png';
import HistoryViewImage from "./../../Assets/Images/HistoryView Image.svg"

const HistoryView = () => {
    const { id } = useParams(); 
    const [eventData, setEventData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://api.spacexdata.com/v3/history/${id}`)
            .then((response) => {
                setEventData(response.data);
                setLoading(false);
                console.log(response.data);
            })
            .catch((error) => {
                console.error("Error fetching event details!", error);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <div>Loading...</div>;

    return (
        <div className='container'>
        <h1>History Details</h1>
        <div className="event-details">
            <div className='details'>
                <h2>{eventData.title}</h2>
                <p>{eventData.details || 'No details available'}</p>
                <div className='links'>
                    {eventData.links.article && <a href={eventData.links.article} target="_blank" rel="noopener noreferrer"><img src={SpaceXStarship} alt="Article" /></a>}
                    {eventData.links.reddit && <a href={eventData.links.reddit} target="_blank" rel="noopener noreferrer"><img src={RedditIcon} alt="Reddit" /></a>}
                    {eventData.links.wikipedia && <a href={eventData.links.wikipedia} target="_blank" rel="noopener noreferrer"><img src={WikipediaIcon} alt="Wikipedia" /></a>}
                </div>
            </div>
            <div className="event-image">
                <img src={HistoryViewImage} alt="" />
            </div>

            </div>
                <div className="footer-details">
                    <span>Date: {new Date(eventData.event_date_utc).toLocaleDateString()}</span>
                    <span>Flight No: {eventData.flight_number}</span>
                </div>
        </div>    
            
        
    );
};

export default HistoryView;
