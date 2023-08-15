import React, { useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import welcome from '../../../asset/image/welcome.png'
import welcome_miu from '../../../asset/image/miu_welcome.png'
import {motion} from 'framer-motion'
const Welcome = () => {


const navigate = useNavigate()

const [checkWidth, setCheckWidth] = useState(false)

const handleWatchWelcome=()=>{
      sessionStorage.setItem('isCheckWelcome', 'true')
      navigate('/login')
}

    useEffect(()=>{
        const checkWelcome = sessionStorage.getItem('isCheckWelcome')

        if(checkWelcome){
            navigate('/login')
        }

        const handleResize =() =>{
            if(window.innerWidth > 768){
                setCheckWidth(true)
            }else {
                setCheckWidth(false)
                
            }
        }
        handleResize()
        window.addEventListener('resize', handleResize)

       

    }, [checkWidth])
    if(checkWidth) return <div className=' w-[100%] flex items-center justify-center gap-8 min-h-screen bg-gradient-to-r from-blue-300 to-purple-400 '>
        <div className='w-[40%] h-full flex flex-col justify-center items-center leading-6'>
        <motion.div initial={{opacity:0, y:100}}
            animate={{opacity:1, y:0}}
            transition={{duration:1, delay:1}}>
            <h1  className='text-white text-[2.5rem] font-bold text-center pb-6'>Welcome to <span className='font-logo text-[3rem]'>Miu</span>  </h1>
            <p className='text-white text-[1.1rem] text-center pb-6'>Miu sẽ giúp các bạn trở thành những người hoàn hảo hơn bởi các sản phẩm tại MiuShop! <br />Hãy đến và khám quá tại MiuShop bạn nhé!</p>
            <motion.button className=' w-[100%] rounded-3xl py-4 px-20  bg-white font-bold text-gray-700' onClick={handleWatchWelcome} 
            initial={{opacity:0, y:100}}
            animate={{opacity:1, y:0}}
            transition={{duration:1, delay:1}}
            >Let's go</motion.button>

          </motion.div>

        </div>

        <motion.div className='w-[50%] h-full'
        initial={{opacity:0, y:100}}
        animate={{opacity:1, y:0}}
        transition={{duration:1, delay:0}}
        >
            <img src={welcome_miu} alt="" />
        </motion.div>

    </div>
    


  return (
    <div className='min-h-screen bg-gradient-to-r from-blue-300 to-purple-400 flex flex-col items-center justify-center '>
          <motion.div initial={{opacity:0, y:100}}
            animate={{opacity:1, y:0}}
            transition={{duration:1, delay:1}}>
            <h1  className='text-white text-[1.5rem]  md:text-[2rem] font-bold text-center'>Welcome to <span className='font-logo text-[2rem] md:text-[2.5rem]'>Miu</span>  </h1>
            <p className='text-white text-[0.9rem] md:text-[1.5rem] text-center'>Miu sẽ giúp các bạn trở thành những người hoàn hảo hơn bởi các sản phẩm tại MiuShop</p>

          </motion.div>

        <motion.div className=''
          initial={{opacity:0, y:100}}
          animate={{opacity:1, y:0}}
          transition={{duration:1, delay:1}}
        >
        <img src={welcome} alt="" />
        </motion.div>
        <div>
            <motion.button className='rounded-xl py-4 px-20 bg-gradient-to-r from-yellow-400 to-red-500 font-bold text-white' onClick={handleWatchWelcome} 
            initial={{opacity:0, y:100}}
            animate={{opacity:1, y:0}}
            transition={{duration:1, delay:1}}
            >Let's go</motion.button>

        </div>
      
    </div>
  )
}

export default Welcome