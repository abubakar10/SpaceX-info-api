import React, { useState } from 'react';
import { NavLink} from 'react-router-dom';
import SpaceXLogo from './../../Assets/Icons/Spacexlogo.svg';
import { ReactComponent as HistoryIcon } from "./../../Assets/Icons/History.svg";
import { ReactComponent as MissionIcon } from "./../../Assets/Icons/Missions.svg";
import { ReactComponent as CompanyInfoIcon } from "./../../Assets/Icons/Company-info.svg";
import { ReactComponent as Evano } from "./../../Assets/Icons/Evano.svg";
import './Sidebar.css';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [activePath, setActivePath] = useState("/");

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = (path) => {
        setActivePath(path); 
        if (window.innerWidth <= 991) {
            setIsOpen(false); 
        }
    };

    const navigationItems = [
        { path: "/", icon: <CompanyInfoIcon />, label: "Home" },
        { path: "/company-info", icon: <CompanyInfoIcon />, label: "Company Info" },
        { path: "/history", icon: <HistoryIcon />, label: "History" },
        { path: "/missions", icon: <MissionIcon className="mission-icon" />, label: "Missions" },
        { path: "/about", icon: <CompanyInfoIcon />, label: "About Us" },
        { path: "/contact", icon: <CompanyInfoIcon />, label: "Contact" }
    ];

    return (
        <>
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
                        {navigationItems.map((item, index) => (
                            <li key={index}>
                                <NavLink
                                    to={item.path}
                                    onClick={() => handleLinkClick(item.path)}
                                    className={activePath === item.path ? "active" : ""}
                                >
                                    <i className="icon">{item.icon}</i>
                                    {isOpen && <span>{item.label}</span>}
                                </NavLink>
                            </li>
                        ))}
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
        </>
    );
};

export default Sidebar;
