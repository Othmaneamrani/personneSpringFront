import React, { useState } from 'react';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import Authentification from './component/Authentification';
import ControlHome from './component/ControlHome';





export default function App() {

  const [auth,setAuth]= useState(true)

const toggleAuth = () => {
  setAuth(!auth)
}

  return (
    <div>
     <Navbar />
        {auth ? ( <Authentification onClickConnexion={toggleAuth}
                                    onClickInscription={toggleAuth}
              />
          ): (<ControlHome onClickDeconnexion={toggleAuth} />
      ) }
     <Footer />
    </div>
  );
}


 

