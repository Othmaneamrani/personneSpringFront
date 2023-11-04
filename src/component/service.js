import axios from "axios";

export const personneApi  = axios.create({
    baseURL : "http://localhost:8080/personnes"
});

export const adresseApi  = axios.create({
    baseURL : "http://localhost:8080/adresses"
});

export const connexionApi  = axios.create({
    baseURL : "http://localhost:8080/connexions"
});

export const getPersonnes = (currentPage , size,id) => {
    return personneApi.get(`/con?page=${currentPage}&size=${size}&id=${id}`)
}

export const getPersonnesSort = (currentPage , size ,sort,id) => {
    return personneApi.get(`/con?page=${currentPage}&size=${size}&like=${sort}&id=${id}`)
}


export const getAllPersonnes = (id) => {
    return personneApi.get(`/list?id=${id}`)
}

export const deletePersonne = (id) => {
    return personneApi.delete(`/supprimer/${id}`)
}


export const deleteAdresse = (adresse) => {
    return adresseApi.delete(`/supprimer/${adresse}`)
}


export const createPersonne = (personneCommand) => {
    return personneApi.post('', personneCommand)
}

export const updatePersonne = (personneCommand) => {
    return personneApi.put('/modifier', personneCommand)
}

export const updateAdresse= (adresseCommand) => {
    return adresseApi.put('/modifier', adresseCommand)
}



export const loggg = (connexionCommand) => {
    return connexionApi.post('/connexion',connexionCommand) 
}


export const getList = (id) => {
    return personneApi.get(`/cart?id=${id}`)
}

export const addList = (id) => {
    return personneApi.patch(`/add/${id}`)
}

export const retirerList = (id) =>{
    return personneApi.patch(`/personnes/retirer/${id}`)
}

export const epinglerList = (id) =>{
    return personneApi.patch(`/epingle/${id}`)
}

export const desepinglerList = (id) =>{
    return personneApi.patch(`/desepingle/${id}`)
}

export const vider = (id) => {
    return connexionApi.delete(`/vider/${id}`) 
}

export const usernameChange = (id,usernameCommand) => {
    return connexionApi.patch(`/username/${id}`, usernameCommand, {
        headers: {
          'Content-Type': 'text/plain',
        },
      })
}