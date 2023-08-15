import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Header from '../../layout/components/Header/Header'

import { RootState } from '../../routes/type/Cart'
import { Product } from '../../routes/type/Products'
import IonIcon from '@reacticons/ionicons'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useAppDispatch } from '../../hooks/useRedux'

const Cart = () => {
  const dispatch = useAppDispatch()
  const [dataCart, setDataCart] = React.useState(JSON.parse(localStorage.getItem('cart') as string) || []);
  const shipping = 25000;
  const total = dataCart?.reduce((total: number, product: any) => (total + product.amount * product.price), 0) || 0;
  const handleIncreaseAmount = (productId: any) => {
    const updatedDataCart = dataCart.map((product: any) => {
      if (product.id === productId) {
        return {
          ...product,
          amount: product.amount + 1
        }
      }
      return product
    })
    setDataCart(updatedDataCart)
    localStorage.setItem('cart', JSON.stringify(updatedDataCart))
  }

  const handleDecreaseAmount = (productId: any) => {
    const updatedDataCart = dataCart.map((product: any) => {
      if (product.id === productId && product.amount > 1) {
        return {
          ...product,
          amount: product.amount - 1
        }
      }
      return product
    })
    setDataCart(updatedDataCart)
    localStorage.setItem('cart', JSON.stringify(updatedDataCart))
  }

  const handleRemoveFromCart = (productId: any) => {
    const updatedDataCart = dataCart.filter((product: any) => product.id !== productId)
    setDataCart(updatedDataCart)

    localStorage.setItem('cart', JSON.stringify(updatedDataCart))
  }
  const handlePayment = () => {
   
    setDataCart([]);
  };

  return (
    <div>
      <Header />
      <div className='m-auto mt-12  w-wd-tertiary'>
        <div className='min-h-screen rounded-2xl bg-gray-100 pt-20'>
          <h1 className='mb-10 text-center text-[1.5rem] font-bold'>Giỏ hàng của bạn</h1>
          <div className='mx-auto max-w-7xl justify-center px-6 md:flex md:space-x-6 xl:px-0'>
            <div className='rounded-lg  md:w-2/3'>
             {
              dataCart.length === 0 ? (
                <div className='text-center text-lg font-bold p-2 bg-white rounded-lg border-gray-300 h-full flex justify-center items-center'>Giỏ hàng trống</div>
              ) :
                (
                  dataCart.map((product: any, index: any) => (
                    <div
                      key={index}
                      className='mb-6 justify-between rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start'
                    >
                      <img src={product.image} alt='product-image' className='w-full rounded-lg sm:w-40' />
                      <div className='sm:ml-4 sm:flex sm:w-full sm:justify-between'>
                        <div className='mt-5 sm:mt-0'>
                          <h2 className='text-xl font-bold text-gray-900'>{product.name}</h2>
                          <p className='font-base mt-1 text-[1.1rem] text-red-600'>
                            {product.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                          </p>
                        </div>
    
                        <div className='mt-4 flex justify-between sm:mt-0 sm:block sm:space-x-6 sm:space-y-6'>
                          <div className='flex items-center border-gray-100'>
                            <span
                              className='cursor-pointer rounded-l bg-gray-100 px-3.5 py-2 duration-100 hover:bg-blue-500 hover:text-blue-50'
                              onClick={() => handleDecreaseAmount(product.id)}
                            >
                              {' '}
                              -{' '}
                            </span>
                            <input
                              className='h-10 w-10 border bg-white text-center text-xs outline-none'
                              type='text'
                              value={product.amount}
                              disabled
                            />
                            <span
                              className=' mr-4 cursor-pointer rounded-r bg-gray-100 px-3 py-2 duration-100 hover:bg-blue-500 hover:text-blue-50'
                              onClick={() => handleIncreaseAmount(product.id)}
                            >
                              {' '}
                              +{' '}
                            </span>
                            <IonIcon
                              name='close'
                              className='relative bottom-6 left-2 text-[1.3rem] font-bold'
                              onClick={() => handleRemoveFromCart(product.id)}
                            />
                          </div>
    
                          <div className=''>
                            <p className='text-[1.2rem]'>
                              {' '}
                              {(product.amount * product.price).toLocaleString('vi-VN', {
                                style: 'currency',
                                currency: 'VND'
                              })}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )
                
             
             }
            </div>
            {/* <!-- Sub total --> */}
            <div className='mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3'>
              <div className='mb-2 flex justify-between'>
                <p className='text-gray-700'>Tổng phụ</p>
                <p className='text-gray-700'>
                  {dataCart
                    .reduce((total: number, product: any) => total + product.amount * product.price, 0)
                    .toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                </p>
              </div>

              <div className='mb-2 flex justify-between'>
                <p className='text-gray-700'>Tổng phụ</p>
                <p className='text-gray-700'>
                  {
                    shipping.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })
                  }
                </p>
              </div>
              {/* ... */}
              <div className='flex justify-between'>
                <p className='text-lg font-bold'>Tổng cộng</p>
                <div>
                  <p className='mb-1 text-lg font-bold'>
                    {
                      (total+shipping)
                      .toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                  </p>
                  <p className='text-sm text-gray-700'>Bao gồm VAT</p>
                </div>
              </div>
              <Link to={'/order'}>
              <button onClick={handlePayment} className='mt-6 w-full rounded-md bg-green-500 py-3 font-medium text-blue-50 hover:bg-blue-600'>
                Thanh toán
              </button>
              </Link>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
