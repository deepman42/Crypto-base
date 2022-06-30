import React from "react";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";
import {Route, Routes} from 'react-router-dom'
import Home from "./routes/Home";


function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} /> 
      </Routes>
     
    </ThemeProvider>
  );
}

export default App;
