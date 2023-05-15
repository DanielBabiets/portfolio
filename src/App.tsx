import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Works from "./pages/Works";
import Navigation from "./components/Navigation";

function App() {
    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/works" element={<Works />} />
            </Routes>
        </Router>
    );
}

export default App;
