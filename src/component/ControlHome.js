import React, { useState } from "react";
import Home from "./Home";
import Sort from "./Sort";
import Modifier from "./Modifier"
import Create from "./Create";
import Pop from "./Pop";

export default function ControlHome (){

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
          setAfficherModifier(true)
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
                    />;

        } else if (afficherSort) {
        contenu = <Sort onRetourClick={toggleRetour} />;
        
            } else if (afficherModifier ) {
        contenu = <Modifier onRetourClick={toggleModifierRetour} />;
                } else if (afficherCreate) {
            contenu = <Create onRetourClick={toggleCreateRetour} />;
                    }else if (afficherPop) {
                        contenu = <Pop onRetourClick={onClose} />
                                }
  

    return(
        <div>
                {contenu}
        </div>
    )
}
