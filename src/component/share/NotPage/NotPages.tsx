import React from 'react'
import { Link } from 'react-router-dom'
const NotPages = () => {
  return (
    <div className=''>
        <div className='flex flex-col justify-center items-center '>
            <div className='w-[50rem] h-[25rem]'>
                <img className='w-full h-full object-cover' src="https://i.pinimg.com/564x/21/77/91/2177910dba59b5ecde3619d178e0e61d.jpg" alt="" />
            </div>
            <div className='flex flex-col justify-center items-center gap-[2rem]'>
                <h1 className='font-bold text-[4rem] '>
                Not Page

                </h1>
                <Link  to={'/home'} className='bg-[#3ee298] text-white py-4 px-12 font-medium rounded-full text-[1.2rem] ' > Về trang chủ</Link>
            </div>
        </div>
    </div>
  )
}

export default NotPages