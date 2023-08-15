import IonIcon from '@reacticons/ionicons'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'



const Navigation = () => {
  const [selectedIcon, setSelectedIcon]= useState<string>('home')
  
  const handleIconClick = (iconName:string)=>{
    setSelectedIcon(iconName)
  }
  return (
    <div className='fixed bottom-0 w-screen z-50  bg-white shadow-sd-primary'>
      <div className='m-auto flex w-4/5 translate-y-1 items-center justify-between text-2xl  p-4 text-gray-600'>
        <Link to='' onClick={()=> handleIconClick('search')} className={selectedIcon ==='search' ? ' -translate-y-8 flex justify-center items-center scale-110 duration-300 text-white w-[3rem] h-[3rem]  background_gradient rounded-full ' : 'text-gray-500 w-[3rem] h-[3rem] rounded-full' } >
          <IonIcon name='search'  />
        </Link>
        <Link to='/home'onClick={()=> handleIconClick('home')} className={selectedIcon ==='home' ? ' -translate-y-8 flex justify-center items-center scale-110 duration-300 text-white w-[3rem] h-[3rem]  background_gradient rounded-full ' : 'text-gray-500 w-[3rem] h-[3rem] rounded-full' } >
          <IonIcon name='home' />
        </Link>
        <Link to='' onClick={()=> handleIconClick('add')} className={selectedIcon ==='add' ? ' -translate-y-8 flex justify-center items-center scale-110 duration-300 text-white w-[3rem] h-[3rem]  background_gradient rounded-full ' : 'text-gray-500 w-[3rem] h-[3rem] rounded-full' } >
          <IonIcon name='add'  /> 
        </Link>
        <Link to='' onClick={()=> handleIconClick('notifications')} className={selectedIcon ==='notifications' ? ' -translate-y-8 flex justify-center items-center scale-110 duration-300 text-white w-[3rem] h-[3rem]  background_gradient rounded-full ' : 'text-gray-500 w-[3rem] h-[3rem] rounded-full' } >
          <IonIcon name='notifications' />
        </Link>
        <Link to='' onClick={()=> handleIconClick('person')} className={selectedIcon ==='person' ? ' -translate-y-8 flex justify-center items-center scale-110 duration-300 text-white w-[3rem] h-[3rem]  background_gradient rounded-full ' : 'text-gray-500 w-[3rem] h-[3rem] rounded-full' } >
          <IonIcon name='person'  />
        </Link>
      </div>
      <div className=''></div>
    </div>
  )
}

export default Navigation
