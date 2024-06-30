"use server";
import { headers } from "next/headers";
import User from "../../Model/User";
import { redirect } from "next/navigation";
const bcrypt = require("bcrypt");
import { encrypt,decrypt } from "../lib";
const crypto = require('crypto')
import { cookies } from "next/headers";

export async function SignInUser(prevState, formData) {
  const headersList = headers();
  const ua = headersList.get("user-agent");
  const ip = headersList.get("x-forwarded-for");
  const email = formData.get("email");
  const password = formData.get("password");
  let filter = {
    user_email: email,
  };
  let user = await User.findOne(filter);
  // console.log(user);
  if (user) {
    const flag = await bcrypt.compare(password, user.user_password);
    if (!flag) {
      return {
        error: true,
        message: "Please enter valid credentials!!",
      };
    }
    if (user.is_session_active == false) {
      redirect("/cms-admin");
    }
    const data = {
      sessionId: crypto.randomBytes(16).toString("base64"),
      ip_address: ip,
      user_agent: ua,
    };
    const logged_in = await User.findOneAndUpdate(
      { _id: user._id },
      { $set: { session_id: data.sessionId, is_session_active: true } }
    );    
    const encryptedSession = await encrypt(data);
    cookies().set("session", encryptedSession, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // One week
      path: "/",
    });
    redirect("/cms-admin");
  }else{    
      return {
        error: true,
        message: "Please enter valid credentials!!",
      };    
  }
}


export async function AuthenticateUser(){
  if(cookies().has('session')){
    const user_cookie  = cookies().get('session').value    
    const decrypted_session = await decrypt(user_cookie)  
    if(decrypted_session != false){ 
      const filter = {session_id : decrypted_session.payload.sessionId} 
      const user = await User.findOne(filter)
      if(user){
        if (new Date().getTime() > decrypted_session.payload.exp){
          await User.updateOne({"_id" : user._id},{$set : {session_id : "",is_session_active : false}})
          cookies().delete('session')
          return false;
        }
        redirect("/cms-admin");        
       }      
    }else{
      // console.log('malformed cookie');
      cookies().delete('session');
      return false;
    }
  }return false;
}