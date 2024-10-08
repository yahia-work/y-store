import React, { useState } from 'react';
import { Outlet } from 'react-router-dom'; // Outlet pour rendre le contenu des sous-routes
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { PanierContext } from './Context/PanierContext';

function App() {
  const [Produits,setproducts]= useState([])
  const handelAdd = (p) => setproducts([...Produits,p]);
  
  return (
    <PanierContext.Provider value={{Produits,handelAdd}}>
      <div className="App">
        <Header />
        <div className="urgent flex">
                Livraison disponible 58 wilaya
        </div>
        <Outlet /> 
        <Footer />
      </div>
    </PanierContext.Provider>
  );
}

export default App;
