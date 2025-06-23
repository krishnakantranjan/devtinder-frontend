import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        {/* Navbar typically goes outside Routes if it should appear on every page */}
        {/* <Navbar />  */}

        <Routes>
          <Route path="/" element={<div>Base Page</div>} />
          <Route path="/profile" element={<div>Profile Page</div>} />
          <Route path="/login" element={<div>Login Page</div>} />
        </Routes> 
      </BrowserRouter>
    </>
  );
}

export default App;