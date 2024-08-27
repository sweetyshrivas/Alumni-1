import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext'; // Ensure correct path
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import UpdateInfoPage from './pages/UpdateInfoPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import EventsPage from './pages/EventsPage';
import JobPortalPage from './pages/JobPortalPage';
import DonationPage from './pages/DonationPage';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    // Simulate authentication check
    const checkAuth = async () => {
      // Replace with real authentication logic
      const user = await new Promise(resolve => setTimeout(() => resolve(true), 1000));
      setAuthenticated(user);
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={authenticated ? <Navigate to="/profile" /> : <LoginPage />} />
            <Route path="/register" element={authenticated ? <Navigate to="/profile" /> : <RegisterPage />} />
            <Route path="/profile" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
            <Route path="/update-info" element={<PrivateRoute><UpdateInfoPage /></PrivateRoute>} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/jobs" element={<JobPortalPage />} />
            <Route path="/donation" element={<DonationPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        <Footer />
      </AuthProvider>
    </Router>
  );
};

export default App;
