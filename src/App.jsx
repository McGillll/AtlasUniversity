import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import EnrollNow from './pages/EnrollNow';
import About from './pages/About'
import Courses from './pages/Courses'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/enroll" element={<EnrollNow />} />
            {/* Placeholder routes for other pages */}
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/news" element={
              <div className="min-h-screen flex items-center justify-center bg-neutral-50">
                <div className="text-center">
                  <h1 className="font-viga text-4xl font-bold text-neutral-950 mb-4">Latest News</h1>
                  <p className="text-lg text-neutral-700">This page is under construction.</p>
                </div>
              </div>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
