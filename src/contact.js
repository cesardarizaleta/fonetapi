import axios from "axios";
import { FONET_URL } from "../config/config.js";

async function contact(tempAuth, phone, tester_name, project_url) {
    if (!tempAuth) console.log("El token es necesario");

    try {

        const personal = {
            phone: phone,
            tester_name: tester_name,
            project_url: project_url,
        }

        const response = await axios.post(
            `${FONET_URL}/challenge_me`,
            personal,
            { headers: { 
                "accept": "application/json",
                Authorization: `Bearer ${tempAuth}` 
            } },
        );

        console.log("Respuesta", response.data);
    }
    catch (error) {
        console.error("Error al contactar:", error.response ? error.response.data : error.message);
    }
}

const tempAuth = process.argv[2] || "";
const phone = process.argv[3] || "";
const tester_name = process.argv[4] || "";
const project_url = process.argv[5] || "";

contact(tempAuth, phone, tester_name, project_url)