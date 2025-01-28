import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Header, Footer } from './containers';
import {
  Navbar,
  About,
  Chatbot,
  Services,
  Talktous,
  Contactus,
} from './components';

const HomePage = () => (
  <>
    <Header />
    <Navbar />
    <About />
    <Services />
    <Chatbot />
    <Contactus />
    <Footer />
  </>
);

const TalkToUsPage = () => (
  <>
    <Talktous />
    <Footer />
  </>
);

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/talktous" element={<TalkToUsPage />} />
      {/* Redirect unmatched routes to the homepage */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
