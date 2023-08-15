import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import bannerImg from '../../asset/image/bannerImg.png'
import Go1 from '../../asset/image/go1.png'
import Go2 from '../../asset/image/go2.png'
import Go3 from '../../asset/image/go3.png'

import IonIcon from '@reacticons/ionicons'
import ItemProduct from '../../component/share/customs/ItemProduct/ItemProduct'
import axios from 'axios'

const links = [
  { name: 'Miu', href: '#' },
  { name: 'Trang chủ', href: '#' },
  { name: 'Giới thiệu', href: '#' },
  { name: 'Liên hệ', href: '#' }
]
const stats = [
  { name: '0975 383 290', value: 'Hotline' },
  { name: 'Ttnga1508@gmail.com', value: 'Email' },
  { name: '8H-18H (Thứ 2 - Thứ 7)', value: 'Thời gian' },
  { name: '23 - Tô Ký - Quận 12 - TP.HCM', value: 'Địa điểm' }
]

interface ItemProduct {
  _id: string
  name: string
  image: string
  description: string
  description_detail: string
  category: 1
  price: number
  Views: number
}


interface Product {
  _id: string;
  image: string;
  name: string;
  price: number;
  Views: number;
}


const Home = () => {

  const [isProduct, setIsProduct] = useState([])

  const [products, setProducts] = useState<Product[]>([]);
  
  const handleGetProduct = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/products`)
      setIsProduct(response.data)
    } catch (error) {
      console.error(error) // Handle any errors that occur
    }
  }

  useEffect(() => {
    handleGetProduct()
  }, [])

  


 
useEffect(() => {
    // Call server API to get popular products
    axios.get('http://localhost:8080/api/products/popular')
      .then(response => setProducts(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    
    <div>
      {/* banner */}
      <div className='mt-10 flex justify-center gap-[2rem] rounded-2xl bg-slate-100 px-6 py-4 md:px-20 md:py-10'>
        <div className=' mx-auto flex h-full items-center justify-around'>
          {/* text */}
          <div className='flex flex-col  justify-center md:w-[50%] '>
            <div className='flex items-center text-base font-medium italic  text-blue-500 md:text-xl'>
              <div className='mr-3 h-[2px] w-10 bg-blue-600'></div>Xu hướng mới
            </div>
            {/* title */}
            <h1 className=' mb-4  text-[30px] font-semibold uppercase leading-[1.3] md:text-[50px]'>
            Miu - Sản phẩm chăm sóc da tốt nhất cho bạn!
              <br />
            </h1>

            <Link
              to={'/shop'}
              className='btn_container mt-4 self-start rounded-full border-b-2 px-6 py-2 text-[1.1rem] font-semibold  md:mt-6 md:px-12 md:py-4'
            >
              Đi tới cửa hàng
            </Link>
          </div>
          {/* img */}
          <div className=' hidden h-full w-[50%] items-center justify-center lg:block'>
            <img src={bannerImg} />
          </div>
        </div>
      </div>
      {/* // show category*/}

      <div className=' mt-4 md:mt-10'>
        <div className=''>
          <div className='mt-[3rem] flex items-center py-2 text-base font-medium italic text-blue-500 md:text-lg'>
            <div className='mr-3 h-[2px] w-6 bg-blue-600'></div>Danh mục
          </div>
          <h1 className='mb-10 text-[1.8rem] font-semibold'>Danh mục chứa sản phẩm</h1>

          <div className='mt-[3rem] flex items-center justify-center gap-[3rem]'>
            {/* item */}
            <div className='h-[120px] w-[120px] cursor-pointer rounded-xl bg-slate-100 duration-300 hover:translate-y-[-2rem] hover:bg-[#000] hover:text-white'>
              {/* icon category */}
              <div className=' flex h-[60px] items-center justify-center '>
                <IonIcon name='bag-handle-outline' className='text-[2rem] text-[#35d492]' />
              </div>
              {/* name category */}
              <div className='flex items-center justify-center'>
                <h1 className='text-[1.1rem] font-medium'>Dưỡng ẩm</h1>
              </div>
            </div>
            {/* item end */}
            {/* item */}
            <div className='h-[120px] w-[120px] cursor-pointer rounded-xl bg-slate-100 duration-300 hover:translate-y-[-2rem] hover:bg-[#000] hover:text-white'>
              {/* icon category */}
              <div className=' flex h-[60px] items-center justify-center '>
                <IonIcon name='happy-outline' className='text-[2rem] text-[#35d492]' />
              </div>
              {/* name category */}
              <div className='flex items-center justify-center'>
                <h1 className='text-[1.1rem] font-medium'>Dưỡng trắng</h1>
              </div>
            </div>
            {/* item end */}
            {/* item */}
            <div className='h-[120px] w-[120px] cursor-pointer rounded-xl bg-slate-100 duration-300 hover:translate-y-[-2rem] hover:bg-[#000] hover:text-white '>
              {/* icon category */}
              <div className=' flex h-[60px] items-center justify-center '>
                <IonIcon name='sunny-outline' className='text-[2rem] text-[#35d492]' />
              </div>
              {/* name category */}
              <div className='flex items-center justify-center'>
                <h1 className='text-[1.1rem] font-medium'>Chống nắng</h1>
              </div>
            </div>
            {/* item end */}
            {/* item */}
            <div className='h-[120px] w-[120px] cursor-pointer rounded-xl bg-slate-100 duration-300 hover:translate-y-[-2rem] hover:bg-[#000] hover:text-white'>
              {/* icon category */}
              <div className=' flex h-[60px] items-center justify-center '>
                <IonIcon name='accessibility-outline' className='text-[2rem] text-[#35d492]' />
              </div>
              {/* name category */}
              <div className='flex items-center justify-center'>
                <h1 className='text-[1.1rem] font-medium'>Chăm sóc da</h1>
              </div>
            </div>
            {/* item end */}
            {/* item */}
            <div className='h-[120px] w-[120px] cursor-pointer rounded-xl bg-slate-100 duration-300 hover:translate-y-[-2rem] hover:bg-[#000] hover:text-white'>
              {/* icon category */}
              <div className=' flex h-[60px] items-center justify-center '>
                <IonIcon name='glasses-outline' className='text-[2rem] text-[#35d492]' />
              </div>
              {/* name category */}
              <div className='flex items-center justify-center'>
                <h1 className='text-[1.1rem] font-medium'>Phụ kiện</h1>
              </div>
            </div>
            {/* item end */}
            {/* item */}
            <div className='h-[120px] w-[120px] cursor-pointer rounded-xl bg-slate-100 duration-300 hover:translate-y-[-2rem] hover:bg-[#000] hover:text-white'>
              {/* icon category */}
              <div className=' flex h-[60px] items-center justify-center '>
                <IonIcon name='woman-outline' className='text-[2rem] text-[#35d492]' />
              </div>
              {/* name category */}
              <div className='flex items-center justify-center'>
                <h1 className='text-[1.1rem] font-medium'>Chăm sóc tóc</h1>
              </div>
            </div>
            {/* item end */}
          </div>
        </div>
      </div>
      {/* //show product */}
      <div className='mt-10'>
        <div>
        <div className='mt-[2rem] flex items-center py-2 text-base font-medium italic text-blue-500 md:text-lg'>
            <div className='mr-3 h-[1.5px] w-6 bg-blue-600'></div>Sản phẩm
          </div>
          <div className='flex justify-between'>
            <h1 className='mb-10 text-[1.8rem] font-semibold'>Sản phẩm nổi bật</h1>
            <div className=''></div>
          </div>
          {/* product */}
          {/* <ItemProduct /> */}
          <div className='grid_layout gap-[1rem]'>
              {isProduct.slice(0, 5).map((product: ItemProduct, index) => (
                <ItemProduct id={product._id} key={index} image={product.image} name={product.name} view={product.Views} price={product.price}/>
              ))}
            </div>
          {/* <?product end */}
        </div>
      </div>

      {/*  */}
      {/* //show product by views */}
      <div className='mt-[4rem]'>
        <div>
          <div className='mt-[2rem] flex items-center py-2 text-base font-medium italic text-blue-500 md:text-lg'>
            <div className='mr-3 h-[1.5px] w-6 bg-blue-600'></div>Sản phẩm
          </div>
          <div className='flex justify-between'>
            <h1 className='mb-10 text-[1.8rem] font-semibold'>Sản phẩm xem nhiều</h1>
            <div className=''></div>
          </div>
          {/* product */}
          {/* <ItemProduct /> */}
          <div className='grid_layout gap-[1rem]'>
          {products.map((product) => (
          <ItemProduct
            key={product._id}
            id={product._id}
            image={product.image}
            name={product.name}
            price={product.price}
            view={product.Views}
          />
        ))}
            </div>
          {/* <?product end */}
        </div>
      </div>

      {/*  */}
      <div className=' mt-[4rem]'>
        <div className='text-center'>
          <h5 className=' text-[2.2rem] font-bold text-[#3ee298] '>DỊCH VỤ TẠI MIU</h5>
          <h2 className='text-[1.1rem]'>Bạn chỉ cần ở nhà chúng tôi sẽ giao hàng tận nhà cho bạn</h2>
        </div>
        <div className='mx-auto max-w-7xl gap-x-4 px-6 lg:px-8'>
          <div className='mt-8 grid grid-cols-1  gap-x-4 gap-y-16 text-center lg:grid-cols-3'>
            <div className='mx-auto flex max-w-sm flex-col gap-y-4 rounded-xl bg-green-50 p-4 px-8'>
              <div className='flex items-center justify-center gap-4 text-base leading-7 text-gray-600'>
                <div className='h-[5rem] w-[5rem] '>
                  <img src={Go1} alt='' />
                </div>
                <div className='text-[1.3rem] font-semibold'>Miễn phí 100%</div>
              </div>
              <div className='text-[1rem]'>
                Với một tinh thần trách nhiệm cao chúng tôi luôn luôn giao đúng giờ với những sản phẩm mà khách hàng
                chọn
              </div>
            </div>
            <div className='mx-auto flex max-w-sm flex-col gap-y-4 rounded-xl bg-green-50 p-4 px-8'>
              <div className='flex items-center justify-center gap-4 text-base leading-7 text-gray-600'>
                <div className='h-[5rem] w-[5rem] '>
                  <img src={Go2} alt='' />
                </div>
                <div className='text-[1.3rem] font-semibold'>Chất lượng hàng đầu</div>
              </div>
              <div className='text-[1rem]'>
                Với Miu sản phẩm tốt được đặt lên hàng đầu. Với những sản phẩm đều được chiết xuất từ các thực phẩm
                thiên nhiên.
              </div>
            </div>
            <div className='mx-auto flex max-w-sm flex-col gap-y-4 rounded-xl bg-green-50 p-4 px-8'>
              <div className='flex items-center justify-center text-base leading-7 text-gray-600'>
                <div className='h-[5rem] w-[7rem] '>
                  <img src={Go3} alt='' />
                </div>
                <div className='text-[1.3rem] font-semibold'>Tư vấn nhiệt tình</div>
              </div>
              <div className='text-[1rem]'>
                Đến với Miu khách hàng có thắc mắc hay muốn giải đáp, Miu đều đáp ứng một cáh nhanh nhất có thể
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}

      {/*  */}
      <div className=' mt-[6rem] relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 rounded-lg'>
        <img
          src='https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply'
          alt=''
          className='absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center'
        />
        <div
          className='hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl'
          aria-hidden='true'
        >
          <div
            className='aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20'
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
            }}
          />
        </div>
        <div
          className='absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu'
          aria-hidden='true'
        >
          <div
            className='aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20'
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
            }}
          />
        </div>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl lg:mx-0'>
            <h2 className='text-3xl font-bold tracking-tight text-white sm:text-6xl'>Liên hệ với chúng tôi</h2>
            <p className='mt-6 text-lg leading-8 text-gray-300'>
            Nếu bạn cần tư vấn hoặc gặp bất kỳ vấn đề gì liên quan đến sản phẩm, hãy liên hệ với Miu để được hỗ trợ.
             Miu sẽ giải đáp mọi thắc mắc của bạn và cung cấp những lời khuyên hữu ích để giúp bạn sử dụng sản phẩm hiệu quả hơn.
            </p>
          </div>
          <div className='mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none'>
            <div className='grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10'>
              {links.map((link) => (
                <a key={link.name} href={link.href}>
                  {link.name} <span aria-hidden='true'>&rarr;</span>
                </a>
              ))}
            </div>
            <dl className='mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4'>
              {stats.map((stat) => (
                <div key={stat.name} className='flex flex-col-reverse'>
                  <dt className='text-base leading-7 text-gray-300'>{stat.name}</dt>
                  <dd className='text-2xl font-bold leading-9 tracking-tight text-white'>{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/*  */}
    </div>
  )
}

export default Home
