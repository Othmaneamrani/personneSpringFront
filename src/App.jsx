import React, { useState } from 'react';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import Authentification from './component/Authentification';
import ControlHome from './component/ControlHome';


export default function App() {

  const isVisible=true

  const [auth,setAuth]= useState(true)
const toggleAuth = () => {
  setAuth(!auth)
}

  return (
    <div className={`transition-fade ${isVisible ? 'visible' : 'invisible'}`}>
     <Navbar />
        {auth ? (
        <Authentification onClickConnexion={toggleAuth}
                                    onClickInscription={toggleAuth}
              />
        ): (<div className={`transition-fade ${isVisible ? 'visible' : 'invisible'}`}>
          <ControlHome onClickDeconnexion={toggleAuth} />
          </div>
      ) }
     <Footer />
    </div>
  );
}


 

