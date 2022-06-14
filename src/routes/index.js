import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Feedback from '../pages/Feedback';
import Success from '../pages/Feedback/Success';

function Root() {
  return (
    <BrowserRouter>
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8  bg-white">
        <Routes>
          <Route path="/" element={<Feedback />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default Root;