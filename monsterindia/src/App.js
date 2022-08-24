
import './App.css';
import React from "react"
import Navbar from './Components/Navbar';
import JobCard from './Components/JobCard';
import JobPage from './Pages/JobPage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <JobPage/>
    </div>
  );
}

export default App;
