// App.js
import React from 'react';
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from "./Components/Sidebar/Sidebar"
import CompanyInfo from './Components/CompanyInfo/CompanyInfo';
import Missions from "./Components/Missions/Missions"
import History from "./Components/History/History"
import HistoryView from './Components/HistoryView/HistoryView';


function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <main>
          <Routes>
            <Route path="/" element={<CompanyInfo />} />
            <Route path="/history" element={<History />} />
            <Route path="/missions" element={<Missions />} />
            <Route path="/history-view/:id" element={<HistoryView />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
