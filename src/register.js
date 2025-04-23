import axios from 'axios';
import { FONET_URL } from '../config/config.js';

async function registerEmail(email) {

    if (!email) console.log("El Email es necesario");

    try {
        const response = await axios.post(
        `${FONET_URL}/register`,
        { email },
        { headers: { "accept": "application/json" } }
        );
        console.log("Respuesta", response.data);
    } catch (error) {
        console.error("Error", error.response?.data || error.message);
    }
}

const email = process.argv[2] || "cesardarizaleta@gmail.com";
registerEmail(email);