import React, { useState } from 'react';
import PopVoid from "./PopVoid"
import ModifierAdresse from './ModifierAdresse';

export default function ModifierAdressePlus ({onRetourClick, onOkClick}){

    const [afficherModifierAdresse,setafficherModifierAdresse] = useState(true)
const toggleModifierAdresse = ()=> {
    setafficherModifierAdresse(!afficherModifierAdresse)
}



return(
    <div>
        {afficherModifierAdresse ? (
            <ModifierAdresse onRetourClick={onRetourClick} onSauvegarderClick={toggleModifierAdresse} />
        ):(
            <PopVoid onOkClick={onOkClick} />
        )
        }

    </div>
)
}