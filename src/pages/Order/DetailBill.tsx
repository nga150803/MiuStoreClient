import React from 'react'
import Header from '../../layout/components/Header/Header'
import IonIcon from '@reacticons/ionicons'
import { Link, useParams } from 'react-router-dom'
import http from '../../utils/http'
import { motion } from 'framer-motion'
import axios from 'axios'

const DetailBill = () => {
  const [bill, setBill]: any = React.useState()
  const {_id} = useParams()

  const getBill = async ( ) => {
    try {
      const res = await http.get(`/bill/${_id}`)
    setBill(res.data)
    } catch (error) {
      const res = await axios.get(`http://10.82.31.23:8080/api/bill/${_id}`)
    setBill(res.data)
    }
  }

  React.useEffect(() => {
    getBill()

  }, [bill])

  console.log(bill);
  
  return (
    <motion.div className='left-0 bottom-0 right-0 fixed top-0 p-4 flex justify-center items-start bg-[#000000]'
    initial = {{opacity:0, scale: .9}}
    animate = {{opacity: 1, scale: 1}}
    transition={{duration: .3}}
    >
      <div className=' md:w-wd-medium md:p-12 md:mt-12 mt-4 w-full  items-center gap-4 flex flex-col bg-white rounded-2xl border shadow-lg p-4'>
        <h1 className='uppercase text-[1.4rem] font-bold text-green-400'>Hóa đơn của tôi </h1>
        <div className='p-4 rounded-2xl border border-gray-300 bg-white w-full flex justify-between items-center'>
          <h1 className='text-[1rem] font-semibold text-green-500'>Tên khách hàng: </h1>
          <p className='text-[1rem] text-gray-500 '>{bill?.user?.username}</p>
        </div>
        <div className='p-4 rounded-2xl border border-gray-300 bg-white w-full flex justify-between items-center'>
          <h1 className='text-[1rem] font-semibold text-green-500'>Email: </h1>
          <p className='text-[1rem] text-gray-500 '>{bill?.user?.email}</p>
        </div>
        <div className='p-4 rounded-2xl border border-gray-300 bg-white w-full flex justify-between items-center'>
          <h1 className='text-[1rem] font-semibold text-green-500'>Địa chỉ: </h1>
          <p className='text-[0.8rem] text-gray-500 '>{bill?.address}</p>
        </div>

        <div className='p-4 rounded-2xl border border-gray-300 bg-white w-full flex justify-between items-center'>
          <h1 className='text-[1rem] font-semibold text-green-500'>Số điện thoại: </h1>
          <p className='text-[1rem] text-gray-500 '>{bill?.phoneNumber}</p>
        </div>
        <div className='p-4 rounded-2xl border border-gray-300 bg-white w-full flex justify-between items-center'>
          <h1 className='text-[1rem] font-semibold text-green-500'>Tổng tiền: </h1>
          <p className='text-[1rem] text-gray-500 '>{bill?.total.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</p>
        </div>
        <div className='p-4 rounded-2xl border border-gray-300 bg-white w-full flex justify-between items-center'>
          <h1 className='text-[1rem] font-semibold text-green-500'>PTTT: </h1>
          <p className='text-[0.9rem] text-gray-500 '>{bill?.payment===1?<p>Thanh toán tại nhà</p>:<p>Thanh toán bằng thẻ ngân hàng</p>}</p>
        </div>


        <Link to={'/home'} className='flex justify-center items-center my-4'>
          <button className='btn_container py-3 px-8 rounded-lg'>Tiếp tục mua sắm</button>
        </Link>

      
      </div>
    </motion.div>
  )
}

export default DetailBill
