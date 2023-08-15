import React, { useEffect, useState } from 'react'
import Header from '../../layout/components/Header/Header'
import Footer from '../../layout/components/Footer/Footer'
import ItemProduct from '../../component/share/customs/ItemProduct/ItemProduct'
import axios from 'axios'
import IonIcon from '@reacticons/ionicons'
import { Link } from 'react-router-dom'

interface ItemProduct {
  _id: string
  name: string
  image: string
  description: string
  description_detail: string
  category: 1
  price: number
  price_sale: number
  Views: number
}
interface Category {
  _id: number;
  name: string;
}

const Shop = () => {
  //
  const [isSubMenuHidden, setIsSubMenuHidden] = useState(false)
  // const [isSidebarHidden, setIsSidebarHidden] = useState(true);

  function toggleSubMenu() {
    setIsSubMenuHidden(!isSubMenuHidden)
  }

  const [isProduct, setIsProduct] = useState([])

   const [isCategory, setIsCategory] = useState<Category[]>([])
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

  const handleGetCategory = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/category`)
      setIsCategory(response.data)
    } catch (error) {
      console.error(error) // Handle any errors that occur
    }
  }
  useEffect(() => {
    handleGetCategory()
  }, [])

  // console.log(isProduct)

  return (
    <div>
      <Header />
      <div className=' m-auto  mt-[5rem] w-wd-secondary text-center md:w-wd-tertiary'>
        <div className='flex justify-center gap-[2rem]'>
          <div className='box-shadow w-[25%] rounded-xl bg-white p-6'>
            <div>
              <div className=' flex cursor-pointer items-center rounded-md p-2.5 px-4  w-[90%] border border-green-400 m-auto mt-5  duration-300'>
                <IonIcon name='search-outline' />
                <input className='ml-4 w-full bg-transparent text-[1rem] focus:outline-none ' placeholder='Search' />
              </div>

              <hr className='my-6 border-t-2 border-orange-600 rounded-full w-[90%] ml-4 ' />
              <div className=' flex cursor-pointer items-center rounded-md p-2.5 px-4 duration-300  hover:bg-green-100'>
                <IonIcon name='bookmark-outline' />

                <div className='flex w-full items-center justify-between' onClick={toggleSubMenu}>
                  <span className='ml-2 text-[1.2rem] text-gray-800 font-semibold'>Danh mục sản phẩm</span>
                  <span className={` ${isSubMenuHidden ? '' : 'rotate-180'}`} id='arrow'>
                    <IonIcon name='chevron-down-outline' />
                  </span>
                </div>
              </div>
              
              <div
                className={`mx-auto mt-2 w-4/5 text-left text-base font-thin leading-7 ${
                  isSubMenuHidden ? 'hidden' : ''
                }`}
                id='submenu'
              >
                {isCategory.map((category) => (
                    <div key={category._id}>
                    <h1 className='mt-1 cursor-pointer rounded-md p-2 font-normal hover:bg-green-50'>{category.name}</h1>
                  </div>
                ))}
              </div>

              {/*  */}
              <hr className='my-6 border-t-2 border-orange-600 rounded-full w-[90%] ml-4 ' />

              <div className=' flex cursor-pointer items-center rounded-md p-2.5 px-4 duration-300  hover:bg-green-100'>
                <IonIcon name='sync-outline' />

                <div className='flex w-full items-center justify-between' onClick={toggleSubMenu}>
                  <span className='ml-2 text-[1.2rem] text-gray-800 font-semibold'>Phân loại theo giá</span>
                  <span className={` ${isSubMenuHidden ? '' : 'rotate-180'}`} id='arrow'>
                    <IonIcon name='chevron-down-outline' />
                  </span>
                </div>
              </div>
              <div
                className={`mx-auto mt-2 w-4/5 text-left text-base font-thin leading-7 ${
                  isSubMenuHidden ? 'hidden' : ''
                }`}
                id='submenu'
              >
                <h1 className='mt-1 cursor-pointer rounded-md p-2 font-normal hover:bg-green-50'>Từ thấp đến cao</h1>
                <h1 className='mt-1 cursor-pointer rounded-md p-2 font-normal hover:bg-green-50'>Từ cao đến thấp</h1>
                
              </div>
              

              
            </div>
          </div>

          <div className='w-[75%]'>
            <div className='flex flex-col justify-center items-center  mb-8'>
              <h1 className='uppercase text-[1.7rem] font-bold pb-2 text-[#3ee298]'>Các sản phẩm tại SHop</h1>
                <p className='text-center text-[1rem] w-[65%] '>Miu - Nơi bạn tìm thấy sự hoàn hảo cho làn da của mình! Hãy khám phá ngay hôm nay để trải nghiệm sản phẩm chăm sóc da tốt nhất và giúp làn da của bạn luôn rạng rỡ và tươi trẻ!</p>
            </div>
            <div className='grid_layout gap-[1rem]'>
              {/* <ItemProduct /> */}
              {isProduct.map((product: ItemProduct, index) => (
                <ItemProduct
                id={product._id}
                  key={index}
                  image={product.image}
                  name={product.name}
                  view={product.Views}
                  price={product.price}
                  
                />
              ))}
            </div>
            <div className='flex justify-center items-center gap-8 mt-12'>
            <div className='btn_container w-[3rem] h-[3rem] flex justify-center items-center rounded-full'>
                <IonIcon name="chevron-back-outline" className='text-[1.8rem] font-semibold text-white '></IonIcon>
                </div>
                <div className='text-[1.3rem]'>1</div>
                <div className='text-[1.3rem] text-gray-500'>2</div>
                <div className='text-[1.3rem] text-gray-500'>3</div>
                <div className='btn_container w-[3rem] h-[3rem] flex justify-center items-center rounded-full'>
                <IonIcon name="chevron-forward-outline" className='text-[1.8rem] font-semibold text-white '></IonIcon>
                </div>

            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Shop
