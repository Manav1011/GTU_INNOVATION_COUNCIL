import { cookies } from "next/headers"
import { headers } from 'next/headers'; 
import { userAgent } from 'next/server';
const crypto = require('crypto')
import { encrypt,decrypt } from "../../lib";

export async function POST(request,res) {  
  const { ua } = userAgent(request);
  const headersList = headers();
  const ip = headersList.get("x-forwarded-for");

  const data = {    
    sessionId:crypto.randomBytes(16).toString('base64'),
    ip_address: ip,
    user_agent: ua,
  };
  const encryptedSession = await encrypt(data)  
  cookies().set('session', encryptedSession, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 7, // One week
    path: '/',
  })
  return Response.json({
    success:true
  })
}