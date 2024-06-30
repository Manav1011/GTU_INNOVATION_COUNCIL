"use server";
import { headers } from "next/headers";
import User from "../Model/User";
import { redirect } from "next/navigation";
const bcrypt = require("bcrypt");
import { encrypt, decrypt } from "./lib";
const crypto = require("crypto");
import { cookies } from "next/headers";

export async function AuthenticateUser() {  
    if (cookies().has("session")) {    
      const user_cookie = cookies().get("session").value;
      const decrypted_session = await decrypt(user_cookie);
      if (decrypted_session == false) {    
        redirect("cms-admin/sign-in");
      }
  
      const filter = { session_id: decrypted_session.payload.sessionId };
      const user = await User.findOne(filter);
      if (user) {
        if (new Date().getTime() > decrypted_session.payload.exp) {
          await User.updateOne(
            { _id: user._id },
            { $set: { session_id: "", is_session_active: false } }
          );        
          redirect("cms-admin/sign-in");
        }      
        return true;
      }
    }
    redirect("cms-admin/sign-in");  
}
