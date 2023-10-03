import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Login from './Login';
import Sign from './Sign';
import Home from './Home';
import Create from './Create';
import Modifier from './Modifier' ;


export default function App() {
  return (
    <div>
     <Navbar />
     <Sidebar />
     {/* <Login /> */}
     <Home />
     {/* <Sign /> */}
     {/* <Create /> */}
     {/* <Modifier /> */}
     <Footer />
    </div>
  );
}


 

