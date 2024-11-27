import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Property from '../pages/property/Property';
import Error from '../pages/error/Error';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/property/:id" element={<Property />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
