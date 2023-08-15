import React, {useState} from 'react'
import Header from '../../layout/components/Header/Header'
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { createBill } from '../../redux/reducers/bill/bill.reducer';

const Order = () => {
  const account = useAppSelector(state => state.auth.account)
  const [dataCart, setDataCart] = useState(JSON.parse(localStorage.getItem('cart') || '[]'));
  const shipping = 25000;
  const total = dataCart.reduce((total: number, product: any) => total + product.amount * product.price, 0);
  const [isPayment, setIsPayment] = useState("1")
  const [address, setAddress] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const dispatch = useAppDispatch()

  const handleOrder = () => {

    const product = dataCart.map((item:any) => {
        return {
          id: item.id,
          amount: item.amount
        }
    })


    const data: any = {
      userId: account._id,
      products: product,
      total: total,
      payment: Number(isPayment),
      address,
      phoneNumber
    }

    dispatch(createBill(data))
    

    
  };


  const handlePaymentChange = (event: any) => {
    setIsPayment(event.target.value);
    
  };
  return (
    <div>
      <Header />

        <div className='w-wd-tertiary m-auto mt-12'>
          <div className='min-h-screen grid grid-cols-2 gap-8 '>
            <div className=' '> 
                 <h1 className='text-[1.5rem] font-semibold mb-4 '>Thông tin thanh toán</h1>

                <div className='flex flex-col gap-4 '>
                  <div className='flex flex-col'>
                    <label className='pb-1 pl-2 text-[1rem] '>Họ tên</label>
                    <input type="text" placeholder={account.username} readOnly className='w-[90%] py-3 px-5 border border-solid border-gray-300 rounded-lg outline-none' />
                  </div>
                  <div className='flex flex-col'>
                    <label className='pb-1 pl-2 text-[1rem] '>Địa chỉ Email</label>
                    <input type="text" placeholder={account.email} readOnly className='w-[90%] py-3 px-5 border border-solid border-gray-300 rounded-lg outline-none' />
                  </div>
                  <div className='flex flex-col'>
                    <label className='pb-1 pl-2 text-[1rem] '>Địa chỉ</label>
                    <input type="text" placeholder='Nhập thông tin địa chỉ' value={account.address ? account.address : address} onChange={(e) => setAddress(e.target.value)} className='w-[90%] py-3 px-5 border border-solid border-gray-300 rounded-lg outline-none' />
                  </div>
                  <div className='flex flex-col'>
                    
                    <label className='pb-1 pl-2 text-[1rem] '>Số điện thoại</label>
                    <input type="text" placeholder='Nhập thông tin địa chỉ'  value={account.phoneNumber ? account.phoneNumber : phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className='w-[90%] py-3 px-5 border border-solid border-gray-300 rounded-lg outline-none' />
                  </div>
                  
                

                  
                  
                  
                </div>
                <h1 className='text-[1.5rem] font-semibold mt-[2rem] mb-4'>Phương thức thanh toán</h1>
                <div className='flex flex-col gap-4 text-[1.1rem]'>
                  <div className='flex gap-3'>
                    <input type="radio"
          name="payment"
          value="1"
          checked={isPayment === "1"}
          onChange={handlePaymentChange}  />
                    <span>Thanh toán khi nhận hàng</span> 
                  </div>
                  <div className='flex gap-3'>
                    <input  type="radio"
          name="payment"
          value="0"
          checked={isPayment === "0"}
          onChange={handlePaymentChange}  />
                    <span>Thanh toán bằng thẻ ngân hàng</span> 
                  </div>
                
                </div>
                  <motion.button className='mt-[4rem] py-4 px-8 rounded-lg btn_container text-[1.1rem] font-medium'
                    whileTap={{scale: .9}}
                    onClick={handleOrder}
                  >Thanh toán</motion.button>

            </div>
            
            <div className=''>
              <h1 className='text-[1.5rem] font-semibold pb-[2rem] pl-[5rem]'>Thông tin đơn hàng</h1>
              <div className='border-l-[2px] border-red-500 '>
              <div className='pl-[5.5rem] grid grid-cols-1 gap-4'>
                {/* Hiển thị thông tin giỏ hàng */}
                {dataCart.map((product: any, index: number) => (
                  <div key={index} className='flex gap-4 border-b-[1px] border-gray-300 py-2'>
                    <div className='w-[5rem] h-[5rem] bg-slate-50 rounded-lg'>
                      <img src={product.image} alt={product.name} className='w-full h-full rounded-lg object-cover' />
                    </div>
                    <div>
                      <p className='text-[1.2rem] font-semibold'>{product.name}</p>
                      <span className='text-[1.1rem] font-normal'>
                        Giá: {product.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                      </span>
                      <p className='text-[1.1rem] font-normal'>Số lượng: {product.amount}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className='mt-[3rem] text-right'>
              <h1 className='text-[1.3rem] font-semibold pb-[2rem] pl-[5rem]'>Tổng tiền: {
                      (total+shipping)
                      .toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</h1>
            </div>

                
              </div>
            </div>

          </div>
          

        </div>
    </div>
  )
}

export default Order