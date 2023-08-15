import React from 'react';
import { useDispatch } from 'react-redux';
import IonIcon from '@reacticons/ionicons'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';

interface ItemProductProp {
  id?: string,
  image: string
  name: string
  price?: number
  view: number
}

const ItemProduct = ({id, image, name, price=0, view}:ItemProductProp) => {

  const formattedPrice = price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
  const handleAddCart = () => {
    const cartLocalStorage = localStorage.getItem('cart');
  
    const data = {
      id,
      image,
      name,
      price,
      view
    };
  
    let newDataCart: any[] = [];
  
    if (cartLocalStorage !== null) {
      newDataCart = JSON.parse(cartLocalStorage);
    }
  
    const existingProduct = newDataCart.find((item) => item.id === data.id);
    if (existingProduct) {
      // Nếu sản phẩm đã tồn tại trong giỏ hàng, tăng giá trị của amount lên 1
      existingProduct.amount += 1;
    } else {
      // Nếu sản phẩm chưa tồn tại trong giỏ hàng, thêm sản phẩm mới với amount là 1
      newDataCart.push({ ...data, amount: 1 });
    }
  
    localStorage.setItem('cart', JSON.stringify(newDataCart));
    toast.success('Thêm giỏ hàng thành công');
  };
  
  


  return (
    <div>
      
        {/* item start */}
        <div className='rounded-xl bg-white p-4 shadow-sd-primary'>
          {/* <!-- image --> */}
          <Link to={''}>
            <div className=' relative'>
              <div className='mx-auto h-[14rem] w-[14rem] rounded-xl bg-slate-100 '>
                <img className='h-full z-[10] w-full rounded-xl object-cover' src={image} alt='' />
              </div>
              <div className='absolute inset-0 flex items-center justify-center gap-4 opacity-0 transition-opacity duration-300 hover:opacity-100'>
                <button
                  onClick={handleAddCart}
                  className=' flex cursor-pointer items-center justify-center rounded-full text-white bg-gray-300 px-2 py-2 text-base duration-300 hover:bg-green-500 hover:text-white'
                >
                  <IonIcon className='p-2 text-xl' name='bag-outline'></IonIcon>
                  
                </button>
                <Link
                  to=''
                  className='flex cursor-pointer items-center justify-center rounded-full  text-white bg-gray-300 px-2 py-2 text-base duration-300 hover:bg-red-300 hover:text-white'
                >
                  <IonIcon className='p-2 text-xl' name='heart-outline'></IonIcon>
                </Link>
              </div>
            </div>
          </Link>
          {/* <!-- title --> */}
          <Link to={`/detail/${id}`}>
            <div className='mx-auto p-2'>
              <h1 className='py-1 text-lg font-medium text-start limit'>{name}</h1>
              <div className='flex items-center justify-between'>
                <p className='text-[1.2rem] text-red-600'>{formattedPrice}</p>
                <p className='flex items-center justify-center text-[0.9rem]'>
                  <IonIcon className='mr-1 text-lg text-yellow-300 ' name='eye-outline'></IonIcon>
                  {view} lượt xem
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* item end */}

      </div>
    
  )
}

export default ItemProduct
