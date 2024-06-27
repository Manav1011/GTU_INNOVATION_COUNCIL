import { cookies } from "next/headers"
import { headers } from 'next/headers'; 
import { userAgent } from 'next/server';
const crypto = require('crypto')
import { encrypt,decrypt } from "../../lib";

import User from "@/app/(admin)/Model/User";

export async function POST(req,res) {  
  const {email,password} = await req.json()
  const { ua } = userAgent(req);
  const headersList = headers();
  const ip = headersList.get("x-forwarded-for");
  
  let filter = {
    "user_email":email
  }
  let user = await User.findOne(filter)
  if(!user)
    {
      return new Response(JSON.stringify({
        "error":true,
        "message":"Unauthorized access"
      }), {
        status: 200,   
      })
    }
    if (user.user_password != password){
      return new Response(JSON.stringify({
        "error":true,
        "message":"Unauthorized access"
      }), {
        status: 200,   
      })
    }
  if (user.is_session_active == false)
    {
      return Response.json({
        success:true
      })
    }
  
  const data = {    
    sessionId:crypto.randomBytes(16).toString('base64'),
    ip_address: ip,
    user_agent: ua,
  };
  const logged_in = await User.findOneAndUpdate({_id : user._id},{$set : {session_id : data.sessionId,is_session_active:true}})
  console.log("first")
  console.log(logged_in)
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