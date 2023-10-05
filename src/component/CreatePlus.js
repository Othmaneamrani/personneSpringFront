import React, { useState } from 'react';
import PopDemander from "./PopDemander"
import Create from './Create';

export default function CreatePlus ({onRetourClick, onNonClick}){

    const [afficherCreate,setafficherCreate] = useState(true)
const toggleCreate = ()=> {
    setafficherCreate(!afficherCreate)
}


return(
    <div>

       



        {afficherCreate ?(
            <Create onRetourClick={onRetourClick} onCreerClick={toggleCreate} />
        ):(
            <PopDemander onOuiClick={toggleCreate} onNonClick={onNonClick} />
        )
        }

    </div>
)
}