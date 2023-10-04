import React, { useState } from "react";
import Home from "./Home";
import Sort from "./Sort";
import Modifier from "./Modifier"
import Create from "./Create";
import PopValider from "./PopValider";

export default function ControlHome ({onClickDeconnexion}){

    const [afficherSort, setAfficherSort] = useState(false)

    const toggleSearch = () => {
        setAfficherSort(true)
      };
    
    const toggleRetour = () => {
        setAfficherSort(false)
      };
      

    const [afficherModifier, setAfficherModifier] = useState(false)

    const toggleModifier= () => {
        setAfficherModifier(true)
      };
      
      const toggleModifierRetour= () => {
        setAfficherModifier(false)
      };

      const [afficherCreate, setAfficherCreate] = useState(false)

      const toggleCreate= () => {
          setAfficherCreate(true)
        };
        
        const toggleCreateRetour= () => {
          setAfficherCreate(false)
        };

        const [afficherPop, setAfficherPop] = useState(false)

        const togglePop= () => {
            setAfficherPop(true)
          };
        
          
          const onClose = () => {
            setAfficherPop(false)
          };
    


      let contenu = null; 

      if (!afficherSort && !afficherModifier && !afficherCreate && !afficherPop) {
        contenu = <Home onRechercherClick={toggleSearch} 
                        onModifierClick={toggleModifier} 
                        onCreateClick={toggleCreate}
                        onSupprimerClick={togglePop}
                        onClickDeconnexion={onClickDeconnexion}
                    />;

        } else if (afficherSort) {
        contenu = <Sort onRetourClick={toggleRetour} />;
        
            } else if (afficherModifier ) {
        contenu = <Modifier onRetourClick={toggleModifierRetour} />;
                } else if (afficherCreate) {
            contenu = <Create onRetourClick={toggleCreateRetour} />;
                    }else if (afficherPop) {
                        contenu = <PopValider onRetourClick={onClose} />
                                }
  

    return(
        <div>
                {contenu}
        </div>
    )
}
