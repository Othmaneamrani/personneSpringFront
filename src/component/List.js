import React, { useEffect, useState } from "react";
import { getList } from "./service";
import { Link } from "react-router-dom";


export default function List () {
    const isVisible = true;

  const [personneList, setPersonnesList] = useState([]);
  const [personneCount, setPersonnesCount] = useState(0);

    

        const handleGetList = () => {
                getList()
                .then((resp)=> {
                setPersonnesList(resp.data)
                setPersonnesCount(resp.data.length)
               }).catch((err) => {
                console.log(err)
               })
        }

            useEffect(() =>{
                handleGetList()
            },[])
            


    return (
        <div className={`transition-fade ${isVisible ? "visible" : "invisible"}`}>
        <div>
        <div className="retour-hover">
            <Link className="retour" to={'/home'}><span className="arrow">&#8592;</span> Retour</Link>
        </div>

            <h1>aaaa</h1>
            {personneList &&  personneList.map((person, index)  => (
                <div key={index} >
                  <p>{person.idRepresentation}</p>  
                  <p>{person.nomRepresentation}</p> 
                </div>
            ))}
            {personneCount}



        </div>
        </div>
    )
}