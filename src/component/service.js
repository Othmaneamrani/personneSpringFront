import axios from "axios";

export const personneApi  = axios.create({
    baseURL : "http://localhost:8080"
});

// export const adresseApi  = axios.create({
//     baseURL : "http://localhost:8080"
// });

export const getPersonnes = () => {
    return personneApi.get('/personnes')
}

export const getPersonnesSort = (sort) => {
    return personneApi.get(`/personnes?page=1&size=4&columnSort=nom&like=${sort}`)
}


// export const deleltePersonne = (personne) => {
//     return personneApi.delete(`/personnes/supprimer${personne.id}`)
// }

// export const getPersonneById = () => {
//     return personneApi.get(`/personnes/${personne.id}`)
// }

// export const delelteAdresse = (adresse) => {
//     return adresseApi.delete(`/adresses/supprimer${adresse.id}`)
// }


export const createPersonne = (personneCommand) => {
    return personneApi.post(`/personnes`, personneCommand)
}

// export const updatePersonne = (personne) => {
//     return personneApi.put = (`/personnes/modifierLight/${personne.id}`, personne)
// }

// export const updateAdresse = (adresse) => {
//     return adresseApi.put = (`/adresses/modifier/${adresse.id}`, adresse)
// }


export const loggg = (connexionCommand) => {
    return personneApi.post('/connexions/connexion',connexionCommand) 
}