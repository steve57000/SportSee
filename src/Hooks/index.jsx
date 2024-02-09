import axios from "axios";

const urlData = 'http://localhost:3000/user'

const getUserId = async (id) => {
    let response
    let data

    try {
        response = await axios.get(`${urlData}/${id}`)
        data = await response.data.data

    } catch (err) {
        throw new Error('Erreur lors de la requete API :' + err)
    }

    console.log(data)
    return data
};
const getUserActivity = async (id) => {
    let response
    let data
    try {
        response = await axios.get(`${urlData}/${id}/activity`)
        data = await response.data.data

    } catch (err) {
        throw new Error('Erreur lors de la requete API :' + err)
    }
    return data
};
const getUserSessions = async (id) => {
    let response
    let data

    try {
        response = await axios.get(`${urlData}/${id}/average-sessions`)
        data = await response.data.data.sessions

    } catch (err) {
        throw new Error('Erreur lors de la requete API :' + err)
    }
    return data
};
const getUserPerformance = async (id) => {
    let response
    let data
    let dataSession
    let separateData
    try {
        response = await axios.get(`${urlData}/${id}/performance`)
        data = await response
        dataSession = await data.data.data
        separateData = {
            sessionData : dataSession.data,
            sessionKind : dataSession.kind
        }
    } catch (err) {
        throw new Error('Erreur lors de la requete API :' + err)
    }
    return separateData
};


const HousingService = {
    getUserId,
    getUserActivity,
    getUserSessions,
    getUserPerformance
};
export default HousingService;
