import createAuth from "./createAuth.js";
import axios from "axios";
import { FONET_URL } from "../config/config.js";

async function verifyAuth(key, secret) {
    if (!key || !secret) console.log("El key y el secret son necesarios");

    try {

        const cifrado = await createAuth(key, secret);
        if (!cifrado) throw new Error("Error al cifrar el key y el secret");

        const response = await axios.get(
            `${FONET_URL}/get_token`,
            { headers: { 
                "accept": "application/json",
                Authorization: `Bearer ${cifrado}` 
            } },
        );

        console.log("Respuesta", response.data);
    }
    catch (error) {
        return error;
    }
}

const key = process.argv[2];
const secret = process.argv[3];

verifyAuth(key, secret)