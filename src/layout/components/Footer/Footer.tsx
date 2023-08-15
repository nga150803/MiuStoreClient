import IonIcon from '@reacticons/ionicons'
import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../../asset/image/logo.png'

const Footer = () => {
  return (
    <div  className=' m-auto  w-wd-secondary md:w-wd-tertiary mt-[7rem] text-center'>
      <hr />
      <div className='flex justify-between items-center px-12 py-8'>
        {/* //logo */}
        <div className='w-[4rem] h-[4rem] flex justify-center items-center gap-[1rem]'>
          <img className='h-full w-full object-cover' src={Logo}/>
          <h1 className='text-[1.5rem]'><span className='font-bold text-[2rem] text-[#3ee298]'>Miu</span>Shop</h1>

        </div>
      
        <div><span className='text-center text-[1.2rem]'>© Miu - Chăm sóc da hoàn hảo cho vẻ đẹp tự nhiên của bạn®</span></div>
        

        <div className='mt-4 flex justify-center gap-6 text-[2rem]'>
            <Link to=''>
                <IonIcon name='logo-facebook' className='text-blue-500' />
            </Link>
            <Link to=''>
                <IonIcon name='logo-youtube' className='text-red-500' />
            </Link>
            <Link to=''>
                <IonIcon name='logo-github' className='' />
            </Link>
        </div>
        



      </div>
    </div>
  )
}

export default Footer