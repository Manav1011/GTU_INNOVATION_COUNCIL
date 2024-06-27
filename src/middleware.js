import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request) {  
  if(request.cookies.has('session')){
    return NextResponse.next()
  }else{
    return NextResponse.redirect(new URL('/cms-admin/sign-in', request.url))
  }
}
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/cms-admin',
}