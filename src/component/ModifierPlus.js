import React, { useState } from 'react';
import PopVoid from "./PopVoid"
import Modifier from './Modifier';

export default function ModifierPlus ({onRetourClick, onOkClick}){

    const [afficherModifier,setafficherModifier] = useState(true)
const toggleModifier = ()=> {
    setafficherModifier(!afficherModifier)
}



return(
    <div>
        {afficherModifier ? (
            <Modifier onRetourClick={onRetourClick} onSauvegarderClick={toggleModifier} />
        ):(
            <PopVoid onOkClick={onOkClick} />
        )
        }

    </div>
)
}