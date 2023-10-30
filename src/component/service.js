import axios from "axios";

export const personneApi  = axios.create({
    baseURL : "http://localhost:8080"
});

export const adresseApi  = axios.create({
    baseURL : "http://localhost:8080"
});

export const getPersonnes = (currentPage , size,id) => {
    return personneApi.get(`/personnes/con?page=${currentPage}&size=${size}&id=${id}`)
}

export const getPersonnesSort = (currentPage , size ,sort) => {
    return personneApi.get(`/personnes?page=${currentPage}&size=${size}&like=${sort}`)
}


export const getAllPersonnes = () => {
    return personneApi.get('/personnes/list')
}

export const deletePersonne = (id) => {
    return personneApi.delete(`/personnes/supprimer/${id}`)
}


export const deleteAdresse = (adresse) => {
    return adresseApi.delete(`/adresses/supprimer/${adresse}`)
}


export const createPersonne = (personneCommand) => {
    return personneApi.post(`/personnes`, personneCommand)
}

export const updatePersonne = (personneCommand) => {
    return personneApi.put('/personnes/modifier', personneCommand)
}

export const updateAdresse= (adresseCommand) => {
    return adresseApi.put('/adresses/modifier', adresseCommand)
}



export const loggg = (connexionCommand) => {
    return personneApi.post('/connexions/connexion',connexionCommand) 
}


export const getList = () => {
    return personneApi.get('/personnes/cart')
}

export const addList = (id) => {
    return personneApi.patch(`/personnes/add/${id}`)
}

export const retirerList = (id) =>{
    return personneApi.patch(`/personnes/retirer/${id}`)
}

export const epinglerList = (id) =>{
    return personneApi.patch(`/personnes/epingle/${id}`)
}

export const desepinglerList = (id) =>{
    return personneApi.patch(`/personnes/desepingle/${id}`)
}