// App.js
import React from 'react';
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from "./Components/Sidebar/Sidebar"
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import Home from "./Components/Home/Home"
import CompanyInfo from './Components/CompanyInfo/CompanyInfo';
import Missions from "./Components/Missions/Missions"
import History from "./Components/History/History"
import HistoryView from './Components/HistoryView/HistoryView';
import About from "./Components/About/About"
import Contact from "./Components/Contact/Contact"

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="main-content">
          <Header />
          <main className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/company-info" element={<CompanyInfo />} />
              <Route path="/history" element={<History />} />
              <Route path="/missions" element={<Missions />} />
              <Route path="/history-view/:id" element={<HistoryView />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
