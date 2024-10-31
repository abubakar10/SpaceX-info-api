import React, { useState } from 'react';
import { NavLink} from 'react-router-dom'; // NavLink with useLocation for URL tracking
import SpaceXLogo from './../../Assets/Icons/Spacexlogo.svg';
import { ReactComponent as HistoryIcon } from "./../../Assets/Icons/History.svg";
import { ReactComponent as MissionIcon } from "./../../Assets/Icons/Missions.svg";
import { ReactComponent as CompanyInfoIcon } from "./../../Assets/Icons/Company-info.svg";
import { ReactComponent as Evano } from "./../../Assets/Icons/Evano.svg";
import './Sidebar.css';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activePath, setActivePath] = useState("/"); // Track the active path

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = (path) => {
        setActivePath(path); 
        if (window.innerWidth <= 991) { // Close sidebar only on mobile view
            setIsOpen(false); 
        }
    };
    

    return (
        <div className="container">
        <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
            <button className="toggle-button" onClick={toggleSidebar}>
                {isOpen ? '<' : '>'}
            </button>
            <button 
                className="toggle-buttons" 
                onClick={toggleSidebar} 
                style={{ display: isOpen ? 'none' : 'block' }}
            >
                {isOpen ? '<' : '>'}
            </button>


            <div className="sidebar-content">
                <div className="sidebar-logo">
                    <img src={SpaceXLogo} alt="SpaceX Logo" className="spacex-logo" />
                    {isOpen && <h2>&nbsp;&nbsp;SpaceX</h2>}
                </div>

                <ul className="sidebar-nav">
                    <li>
                        <NavLink
                            to="/"
                            onClick={() => handleLinkClick("/")}
                            className={activePath === "/" ? "active" : ""}
                        >
                            <i className="icon"><CompanyInfoIcon /></i>
                            {isOpen && <span>Company Info</span>}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/history"
                            onClick={() => handleLinkClick("/history")}
                            className={activePath === "/history" ? "active" : ""}
                        >
                            <i className="icon"><HistoryIcon /></i>
                            {isOpen && <span>History</span>}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/missions"
                            onClick={() => handleLinkClick("/missions")}
                            className={activePath === "/missions" ? "active" : ""}
                        >
                            <i className="icon"><MissionIcon className="mission-icon" /></i>
                            {isOpen && <span>Missions</span>}
                        </NavLink>
                    </li>
                </ul>

                <div className="sidebar-upgrade">
                    {isOpen && (
                        <button>
                            Upgrade to PRO to get access all Features!
                            <p>Get Pro Now!</p>
                        </button>
                    )}
                </div>

                <div className="sidebar-footer">
                    <div className="profile">
                        <Evano />
                        {isOpen && <p>Evano <br /><span>Project manager</span></p>}
                    </div>
                </div>
            </div>
        </div>
        </div>
        
    );
};

export default Sidebar;
