import { NextResponse } from 'next/server'
import { decrypt } from './app/(admin)/cms-admin/lib'

export async function middleware(request) {    
  // if(request.cookies.has('session')){
    // console.log(request.cookies.get('session').value)
    // const user_cookie  = request.cookies.get('session').value   
    // const decrypted_session = await decrypt(user_cookie)  
    // if(decrypted_session == false){
    //   const response = NextResponse.redirect(new URL('/cms-admin/sign-in', request.url))    
    //   response.cookies.delete('session')
    //     return response
    //   }

  //    const filter = {session_id : decrypted_session.payload.sessionId} 
  //    const user = await User.findOne(filter)
  //    if(user){
  //     if (new Date().getTime() > decrypted_session.payload.exp){
  //       await User.updateOne({"_id" : user._id},{$set : {session_id : "",is_session_active : false}})
  //       const response = NextResponse.redirect(new URL('/cms-admin/sign-in', request.url))    
  //       response.cookies.delete('session')
  //         return response
  //      }
  //    }
     
  //   return NextResponse.next()
  // }else{
  //   return NextResponse.redirect(new URL('/cms-admin/sign-in', request.url))
  // }
}
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/cms-admin'  
}