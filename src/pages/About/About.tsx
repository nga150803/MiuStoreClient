import React from 'react'
import Header from '../../layout/components/Header/Header'
import Footer from '../../layout/components/Footer/Footer'
import About1 from '../../asset/image/about10.jpg'
import About2 from '../../asset/image/about8.gif'
import About3 from '../../asset/image/about2.jpg'
import About4 from '../../asset/image/about3.jpg'
import About5 from '../../asset/image/about4.jpg'
import About6 from '../../asset/image/about5.jpg'

import About8 from '../../asset/image/about11.jpg'
import About9 from '../../asset/image/about12.gif'
import About10 from '../../asset/image/about13.jpg'
import About11 from '../../asset/image/about14.jpg'
import About12 from '../../asset/image/about15.jpg'

import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <Header />
      <div className='m-auto mt-12 w-wd-secondary w-wd-tertiary '>
        <div className='mb-[4rem] flex  md:items-center justify-center gap-[1rem] rounded-2xl bg-gray-100 md:p-[2rem] py-[3.5rem]'>
          <div className=' px-12'>
            <h1 className='pb-[1rem] text-[2rem] font-bold uppercase'>MIU - Nơi tình yêu bắt đầu 💕</h1>
            <p className='pb-3 text-[1.1rem] leading-[2rem]'>
              
              Miu Store là một địa chỉ tin cậy cho các chị em phụ nữ có nhu cầu sử dụng các sản phẩm chăm sóc da và làm
              đẹp. Với nhiều năm kinh nghiệm trong lĩnh vực mỹ phẩm. Miu Store đã trở thành một trong những địa chỉ uy
              tín nhất khi mà các sản phẩm mỹ phẩm fake, kém chất lượng tràn lan trên thị trường.
            </p>
            <p className='pb-12 text-[1.1rem] leading-[2rem] '>
              
              Hãy tham quan cửa hàng để chọn cho mình những món đồ ưng ý nhé❤
            </p>
            <Link to={'/shop'} className='btn_container rounded-full px-12 py-4 text-lg'>
              Tới cửa hàng
            </Link>
          </div>
          <div className=' flex  justify-center  gap-[1rem]'>
            <div className='flex flex-col gap-4'>
              <div className='h-[10rem] w-[10rem] bg-pink-50'>
                <img className='h-full w-full rounded-lg object-cover' src={About1} alt='about1' />
              </div>
              <div className='h-[10rem] w-[10rem] bg-pink-50'>
                <img className='h-full w-full rounded-lg object-cover' src={About2} alt='about2' />
              </div>
              <div className='h-[10rem] w-[10rem] bg-pink-50'>
                <img className='h-full w-full rounded-lg object-cover' src={About3} alt='about3' />
              </div>
            </div>
            <div className='flex flex-col  gap-4'>
              <div className='h-[10rem] w-[10rem] bg-pink-50'>
                <img className='h-full w-full rounded-lg object-cover' src={About4} alt='about4' />
              </div>
              <div className='h-[10rem] w-[10rem] bg-pink-50'>
                <img className='h-full w-full rounded-lg object-cover' src={About5} alt='about5' />
              </div>
              <div className='h-[10rem] w-[10rem] bg-pink-50'>
                <img className='h-full w-full rounded-lg object-cover' src={About6} alt='about6' />
              </div>
            </div>
            <div className='flex flex-col  gap-4'>
              <div className='h-[21rem] w-[15rem] bg-pink-50'>
                <img className='h-full w-full rounded-lg object-cover' src={About8} alt='about7' />
              </div>
            </div>
          </div>
        </div>
        {/*  */}

        <div className='flex h-[50vh] items-center justify-center px-4  '>
        <div className='w-[50%] '>
            <div className='flex items-center justify-center gap-4'>
              <div className='h-[21rem] w-[21rem] '>
                <img
                  className='h-full h-full rounded-xl border-4 border-solid border-[#97d8bb] object-cover'
                  src={About10}
                  alt=''
                />
              </div>
              <div className='flex flex-col gap-4'>
                <div className='h-[10rem] w-[10rem] '>
                  <img
                    className='h-full h-full rounded-xl border-4 border-solid border-[#97d8bb] object-cover'
                    src={About11}
                    alt=''
                  />
                </div>
                <div className='h-[10rem] w-[10rem] '>
                  <img
                    className='h-full h-full rounded-xl border-4 border-solid border-[#97d8bb] object-cover'
                    src={About12}
                    alt=''
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='w-[50%]'>
            <h1 className='pb-[1rem] text-[2rem] font-bold uppercase'> Chất lượng 100% & ưu đãi 🎁</h1>

            <p className='mx-auto text-[1.1rem] leading-[2.2rem] pb-4'>
              Tất cả các sản phẩm tại Miu Store đều được kiểm tra kỹ lưỡng trước khi đưa ra thị trường, đảm bảo chất lượng và an toàn cho người sử dụng.

            </p>
            <p className='mx-auto text-[1.1rem] leading-[2.2rem]'>
            Ngoài ra, Miu Store còn có nhiều chương trình khuyến mãi và ưu đãi đặc biệt dành cho khách hàng thân thiết, bao gồm các sản phẩm giảm giá, quà tặng hấp dẫn và các dịch vụ chăm sóc khách hàng tốt nhất. Hãy đến với Miu Store ngay hôm nay để không bỏ lỡ những ưu đãi hấp dẫn này!
            </p>
          </div>

        </div>

        {/*  */}
        {/*  */}
        <div className='mb-[4rem] flex items-center justify-center  p-[4rem] px-[8rem]'>
        <div className=' w-[50%] '>
            <h1 className='pb-[1rem] text-[2rem] font-bold uppercase'> Điều Cam kết 🤝</h1>

            <p className='mx-auto text-[1.1rem] leading-[2.2rem]'>
              Tại Miu Store, chúng tôi cam kết cung cấp đến khách hàng những sản phẩm chính hãng, được nhập khẩu từ các
              thương hiệu nổi tiếng trên thế giới. Chúng tôi sẽ giúp các chị em phụ nữ tìm được những sản phẩm phù hợp
              nhất cho làn da của mình, giúp da luôn được tươi trẻ, mịn màng và rạng rỡ. Ngoài ra, Miu Store còn cung
              cấp đến khách hàng nhiều loại phụ kiện và trang sức đẹp mắt, giúp các chị em phụ nữ hoàn thiện phong cách
              và trở nên xinh đẹp hơn.
            </p>
          </div>
          <div className=' flex w-[50%] justify-center '>
            <div className=' h-[22rem] w-[22rem]'>
              <img
                className='h-full  w-full rounded-[50%] border-4 border-solid border-[#e2c73e] object-cover '
                src={About9}
                alt=''
              />
            </div>
          </div>

        </div>
        {/*  */}
      </div>

      <Footer />
    </div>
  )
}

export default About

