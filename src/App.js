import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Footer } from './containers';
import {
  Navbar,
  About,
  Chatbot,
  Services,
  Talktous,
  Contactus,
} from './components';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Navbar />
              <About />
              <Services />
              <Chatbot />
              <Contactus />
              <Footer />
            </>
          }
        />

        <Route
          path="/techSynergysol"
          element={    
                   <>
              <Header />
              <Navbar />
              <About />
              <Services />
              <Chatbot />
              <Contactus />
              <Footer />
            </>
          }
        />

        <Route
          path="/talktous"
          element={
            <>
              <Talktous />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
