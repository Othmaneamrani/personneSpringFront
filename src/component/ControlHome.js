import React, { useState } from "react";
import Home from "./Home";
import Sort from "./Sort";
import CreatePlus from "./CreatePlus";
import PopValider from "./PopValider";
import ModifierPlus from "./ModifierPlus";

export default function ControlHome ({onClickDeconnexion}){

    const [afficherSort, setAfficherSort] = useState(false)

    const toggleSearch = () => {
        setAfficherSort(!afficherSort)
      };
    
      

    const [afficherModifier, setAfficherModifier] = useState(false)

    const toggleModifier= () => {
        setAfficherModifier(!afficherModifier)
      };
      


      const [afficherCreate, setAfficherCreate] = useState(false)

      const toggleCreate= () => {
          setAfficherCreate(!afficherCreate)
        };
        


        const [afficherPop, setAfficherPop] = useState(false)

        const togglePop= () => {
            setAfficherPop(!afficherPop)
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
        contenu = <Sort onRetourClick={toggleSearch} />;
        
            } else if (afficherModifier ) {
        contenu = <ModifierPlus onRetourClick={toggleModifier} onOkClick={toggleModifier} />;
                } else if (afficherCreate) {
            contenu = <CreatePlus onRetourClick={toggleCreate} onNonClick={toggleCreate} />;   
                    }else if (afficherPop) {
                        contenu = <PopValider onRetourClick={togglePop} />
                                }
  

    return(
        <div>
                {contenu}
        </div>
    )
}
