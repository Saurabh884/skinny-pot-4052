
// import './App.css';
import React from "react"
import HomePage from './Pages/HomePage';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Login from './Pages/Login';
import MainRoutes from "./Pages/MainRoutes";


function App() {
  return (
    <div>
      <Navbar/>
      <HomePage/>
      <Footer/>
      {/* <Login/> */}

      <MainRoutes/>

    </div>
  );
}

export default App;
