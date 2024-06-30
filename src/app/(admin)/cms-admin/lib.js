import { SignJWT,jwtVerify } from "jose"

// console.log(process.env.signKey);
const key = new TextEncoder().encode(process.env.signKey)
export async function encrypt(payload) {
    return await new SignJWT(payload).setProtectedHeader({alg:'HS256'}).setIssuedAt().setExpirationTime(new Date().getTime() + (10 * 24 * 60 * 60 * 1000)).sign(key);
}

export async function decrypt(input){
    try {
        const payload = await jwtVerify(input,key,{algorithms:['HS256']})   
        return payload
    } catch (error) {
        return false
    }
}

