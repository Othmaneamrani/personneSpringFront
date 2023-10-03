import React from 'react';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import Login from './component/Login';
import Home from './component/Home';
import Create from './component/Create';
import Modifier from './component/Modifier' ;
import Authentification from './component/Authentification';


export default function App() {
  return (
    <div>
     <Navbar />
     <Authentification />
     {/* <Home /> */}
     {/* <Create /> */}
     {/* <Modifier /> */}
     <Footer />
    </div>
  );
}


 

