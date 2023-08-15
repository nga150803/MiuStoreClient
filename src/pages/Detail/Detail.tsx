import React, { useState, useEffect } from 'react'
import Header from '../../layout/components/Header/Header'
import Footer from '../../layout/components/Footer/Footer'
import IonIcon from '@reacticons/ionicons'
import { Rating, Typography } from "@material-tailwind/react";
import { HeartIcon as RatedIcon } from "@heroicons/react/24/solid";
import { HeartIcon as UnratedIcon } from "@heroicons/react/24/outline";
import { initialTabs as tabs } from '../../motion/ingredients'
import { motion, AnimatePresence } from 'framer-motion'
import { useParams } from 'react-router-dom';
import axios from 'axios';

interface productProp{
  Views: number,
category: string,
description: string,
description_detail: string, 
image: string,
name: string,
price: number,
_id: string
}

const Detail = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0])
  const param = useParams()  
  const [product, setProduct] = useState<productProp>()

  const [rated, setRated] = React.useState(4);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/products/${param._id}`).then((response) =>
    setProduct(response.data)).catch((err) => {
      console.log(err);
      
    })
    
  }, [])

  return (
    <div>
      <Header />
      <div className='md: m-auto mt-12 w-wd-secondary w-wd-tertiary'>
        <div className=' flex items-center justify-center gap-[2rem]'>
          <div className=' flex  w-[50%] justify-center gap-[2rem]'>
            {/* image con */}
            <div className='flex flex-col items-center justify-center gap-4'>
              <img
                className='h-[9rem] w-[9rem] rounded-lg'
                src='https://i.pinimg.com/564x/c4/55/c6/c455c684326dc1dfcab425b7ab7280c5.jpg'
              />
              <img
                className='h-[9rem] w-[9rem] rounded-lg'
                src='https://i.pinimg.com/564x/e9/10/72/e910721300f1849e17495e06fb7b9b2f.jpg'
              />
              <img
                className='h-[9rem] w-[9rem] rounded-lg'
                src='https://i.pinimg.com/564x/e8/80/73/e88073e2df23813c47d4d233eb431bfa.jpg'
              />
            </div>
            {/* image container */}
            <div className='h-[30rem] w-[30rem] '>
              <img
                className=' h-full w-full rounded-lg object-cover'
                src={product?.image}
              />
            </div>
          </div>
          <div className='w-[50%] '>
            <div className='mt-[3rem] flex items-center text-base font-medium italic text-blue-500 md:text-lg'>
              <div className='mr-2 h-[2px] w-6 bg-blue-600'></div>Bán chạy
            </div>
            {/* title&des */}
            <div>
              <h1 className='mb-2 text-[1.9rem] font-bold'>{product?.name}</h1>
              <div className="flex items-center gap-2 py-2">
                  <Rating
                    value={4}
                    onChange={(value) => setRated(value)}
                    ratedIcon={<IonIcon name='star-sharp' className="text-yellow-400 text-[1.2rem]" />}
                    unratedIcon={<IonIcon name='star-sharp' className="text-gray-400 text-[1.2rem]" />}
                  />
                  <Typography color="blue-gray" className="font-medium text-lg text-gray-500">
                    Sản phẩm được đánh giá {rated} sao
                  </Typography>
                </div>
              <p className='text-[1.1rem] leading-[1.8rem] tracking-wider'>
               {product?.description}
              </p>
            </div>
            {/* price& price_sale & category */}
            <div className='mt-6 flex items-center gap-[3rem]'>
              <div className='rounded-full bg-yellow-50 px-6 py-3 font-bold uppercase text-yellow-400 '>Nước hoa</div>
              <div className='flex gap-4'>
                <span className=' text-[1.2rem] text-gray-400 line-through'>280.000 đ</span>
                <span className='text-[1.4rem] font-semibold '>{product?.price} đ</span>
              </div>
            </div>
            {/* button add to cart */}

            <div className='mt-10 flex  items-center gap-8 '>
              <button className='btn_container rounded-3xl px-10 py-3 text-[1.1rem] font-medium'>Thêm vào giỏ</button>
              {/* <Rating
                  ratedColor="red"
                  ratedIcon={<RatedIcon className="h-6 w-6" />}
                  unratedIcon={<UnratedIcon className="h-6 w-6" />}
            /> */}
            <div className='flex items-center justify-center'>
            <IonIcon name='heart-outline' className='text-[2rem] hover:text-red-600' /> 
               Thêm vào yêu thích
            </div>
            </div>
          </div>
        </div>
        <div className=' mt-[3rem] flex items-center justify-center gap-[2rem] overflow-hidden '>
          <div className='w-[45%] p-4'>
            <h1 className='text-[2rem] font-bold mt-4 mb-2'>Để lại bình luận</h1>
            <span className='text-[1rem]'>Hãy để lại những lời góp ý cũng như bình luận về những điều Nice Face còn thiều xót</span>
            <form className=' mt-8 flex flex-col gap-6'>
              <div>
                <span className='my-3'>Họ tên</span>
                <input className='w-[100%]  rounded-full bg-[#f5f5f5] px-4 py-3  md:outline-none' />
              </div>
              <div>
                <span className='my-3'>Email</span>
                <input className='w-[100%]  rounded-full bg-[#f5f5f5] px-4 py-3 md:outline-none ' />
              </div>
              <div>
                <span className=''>Lời nhắn nhủ</span>
                <textarea className='w-[100%]  rounded-xl bg-[#f5f5f5] px-4 py-3 md:outline-none'></textarea>
              </div>

              <button className='btn_container  shadow-offset-y-2  shadow-offset-x-2 shadow-blur-4 shadow-opacity-50 w-[100%]   rounded-full px-4 py-3 text-white shadow-xl'>
                Gửi lời nhắn
              </button>
            </form>
          </div>
          <div className='w-[55%] '>
            <div className=' h-360 rounded-10 flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm'>
              <nav className='rounded-10  rounded-b-none border-b border-gray-300 bg-gray-50 '>
                <ul className='font-poppins m-0 flex w-full list-none gap-8 p-0 text-base font-medium'>
                  {tabs.map((item) => (
                    <li
                      key={item.label}
                      className={
                        item === selectedTab
                          ? 'border-b border-solid border-[#3ee298] bg-gray-200 p-5 '
                          : 'p-5 text-[1.1rem] '
                      }
                      onClick={() => setSelectedTab(item)}
                    >
                      {`${item.icon} ${item.label}`}
                      {item === selectedTab ? <motion.div className='' layoutId='underline' /> : null}
                    </li>
                  ))}
                </ul>
              </nav>
              <main className=' flex-grow-1 flex select-none items-center justify-center bg-gray-100 text-8xl'>
                <AnimatePresence>
                  <motion.div
                    key={selectedTab ? selectedTab.label : 'empty'}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className='p-[2rem] text-lg leading-[2rem]'
                  >
                    {selectedTab ? selectedTab.content : '😋'}
                  </motion.div>
                </AnimatePresence>
              </main>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Detail
