import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Landing from "./pages/Landing";
import SuccessStories from "./pages/SuccessStories";
import CurrentNews from "./pages/CurrentNews";
import BudgetTools from "./pages/BudgetTools";
import Crypto from "./pages/Crypto";
import Blockchain from "./pages/Blockchain";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import Courses from "./pages/Courses";


const App = () => {
    return (
        <Router>
          <div className="h-screen w-screen flex flex-col bg-gray-50">
               <Navbar/>
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Landing />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/success-stories" element={<SuccessStories />} />
                        <Route path="/current-news" element={<CurrentNews />} />
                        <Route path="/crypto" element={<Crypto />} />
                        <Route path="/blockchain" element={<Blockchain />} />
                        <Route path="/budget-tools" element={<BudgetTools />} />
                        <Route path="/about-us" element={<AboutUs />} />
                        <Route path="/courses" element={<Courses />} />
                        
                    </Routes>
                </main>

               <Footer/>
            </div>
        </Router>
    );
};

export default App;
