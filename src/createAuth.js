import { Buffer } from 'buffer';

async function createAuth(key, secret){

    if (!key || !secret) console.log("El key y el secret son necesarios");

    try {
        const cifrado = Buffer.from(`${key}:${secret}`, 'utf-8').toString('base64');
        if(!cifrado) throw new Error("Error al cifrar el key y el secret");
        if(typeof cifrado !== 'string') throw new Error("El cifrado no es un string");

        return cifrado;

    } catch (error) {
        return error;
    }
}

export default createAuth;