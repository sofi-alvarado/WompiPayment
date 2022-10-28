const axios = require('axios')
const config = require('../util/config')

/*  |   GET TOKEN  | */
const generateToken = async (client_id,client_secret) => {
    if(!client_id){
        console.error('Param required: client_id')
    }else if(!client_id && !client_secret){
        console.error('Params required: client_id, client_secret')
    }
    else if(!client_secret){
        console.error('Param required: client_secret')
    }else{
        const data = {
            'grant_type': 'client_credentials',
            'audience': 'wompi_api',
            'client_id': client_id,
            'client_secret': client_secret
        }

        try {
            const response = await axios({
                method: "POST",
                url: config.URL_TOKEN,
                data:new URLSearchParams(data),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })

            return response.data.access_token
        } catch (error) {
            if (error) throw new Error(error)
        }
    }
}

/* ENLACE PAGO */
const generateEnlacePago = async (enlaceObject, token) => {
    try {
        
        const response = await axios({
            method: "POST",
            url: config.API_URL+config.ENLACE_PAGO,
            data:enlaceObject,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })

        return response.data
    } catch (error) {
        if (error) throw new Error(error)
    }
}

const checkEnlacePago = async (id, token) => {
    try {
        const response = await axios({
            method: "GET",
            url: `${config.API_URL}${config.ENLACE_PAGO}${id}`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })

        return response.data
    } catch (error) {
        if (error) throw new Error(error)
    }
}

const disableEnlacePago = async (id, token) => {
    try {
        console.log(token);
        const response = await axios({
            method: "PUT",
            url: `${config.API_URL}${config.ENLACE_PAGO}${id}/${config.ENLACE_PAGO_DIS}`,
            headers: {
                'Content-Type': 'text/html',
                'Authorization': `Bearer ${token}`
            }
        })

        return response.data
    } catch (error) {
        if (error) throw new Error(error)
    }
}



/* APLICATIVO */
const checkAplicativo = async (token) => {
    try {
        const response = await axios({
            method: "GET",
            url: config.API_URL+config.APLICATIVO,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        return response.data
    } catch (error) {
        if(error) throw new Error(error)
    }
}

module.exports = { generateToken, generateEnlacePago, checkAplicativo, checkEnlacePago, disableEnlacePago }
