import { cookies } from "next/headers"
import { SignJWT,jwtVerify } from "jose"

console.log(process.env.signKey);
const key = new TextEncoder().encode(process.env.signKey)
export async function encrypt(payload) {
    return await new SignJWT(payload).setProtectedHeader({alg:'HS256'}).setIssuedAt().setExpirationTime('10 sec from now').sign(key);
}

export async function decrypt(input){
    const payload = await jwtVerify(input,key,{algorithms:['HS256']})
    return payload
}