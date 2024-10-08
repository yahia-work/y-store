import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Acceuil from './Acceuil/Acceuil';
import Boutique from './Boutique/Boutique';
import Apropre from './Aproprs/Apropre';
import Faq from './Faq/Faq';
import Contact from './Contact/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './Product/Product';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Acceuil />} />
        <Route path="boutique" element={<Boutique />} />
        <Route path="boutique/produit/:productName" element={<Product />} />
        <Route path="apropre" element={<Apropre />} />
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
