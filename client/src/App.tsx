import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import pages and components
import Home from "./pages/Home";
import CV from "./pages/CV/CV";
import Navbar from "./components/Navbar";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cv" element={<CV />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
