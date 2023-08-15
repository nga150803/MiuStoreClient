import React, { useEffect, useState } from 'react'
import welcome_web from '../../asset/image/webcome_web.png'

export interface AuthLayoutProps {
  children: React.ReactNode
}

const AuthLayout = (props: AuthLayoutProps) => {


  useEffect(() => {

    localStorage.removeItem('token')
  },[])
  
  return (
      <div className="bg-gray-300 min-h-screen flex items-center justify-center">
        <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
          {props.children}

          <div className="md:block hidden w-1/2">
          <img className="rounded-2xl" src="https://i.pinimg.com/564x/f8/bd/85/f8bd85ac22b48f53f446d327d95c616b.jpg" />
            
            {/* <img className="rounded-2xl" src="https://i.pinimg.com/564x/95/21/9e/95219e702cd578321b5f0991a67d5bf5.jpg" /> */}
          </div>
        </div>

      </div>


  
  )
}

export default AuthLayout
