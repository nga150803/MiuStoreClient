import IonIcon from '@reacticons/ionicons'
import ContactImg from '../../asset/image/contact.png'
import Footer from '../../layout/components/Footer/Footer'
import Header from '../../layout/components/Header/Header'
import {motion} from 'framer-motion'
const Contact = () => {
  return (
    <div>
      <Header />
        <div className='  md: m-auto mt-12 w-wd-secondary w-wd-tertiary'>
            <div className='flex  h-full flex-col-reverse md:flex-row md:gap-12'>
                <div className='md:w-[50%] w-full mt-[3.5rem] mx-auto'>
                    {/* //title */}
                    <div className=''>
                        <h1 className='mt-4 text-[1.4rem] font-bold  uppercase md:mt-12 md:text-[1.5rem]'>
                            Liên hệ với chúng tôi
                        </h1>
                        <p className=' py-4 text-[1.2rem] md:text-[1rem] '>
                            Với hàng trăm mặt hàng đa dạng từ quần áo, giày dép đến phụ kiện, Miu luôn đem đến dịch vụ tốt nhất và
                            chất lượng sản phẩm đảm bảo. Với Miu, bạn sẽ luôn tự tin và nổi bật trong mọi hoàn cảnh.
                        </p>
                    </div>
                   

                    {/* //form */}
                    <div>
                        <form className=' mt-4 flex flex-col gap-6'>
                            <div>
                            <span className='my-3'>Your Name</span>
                            <input className='w-[100%]  rounded-full bg-[#f5f5f5] px-4 py-3  md:outline-none' />
                            </div>
                            <div>
                            <span className='my-3'>Your Email</span>
                            <input className='w-[100%]  rounded-full bg-[#f5f5f5] px-4 py-3 md:outline-none ' />
                            </div>
                            <div>
                            <span className=''>Your Message</span>
                            <textarea className='w-[100%]  rounded-xl bg-[#f5f5f5] px-4 py-3 md:outline-none'></textarea>
                            </div>

                            <motion.button className='btn_container  shadow-offset-y-2  shadow-offset-x-2 shadow-blur-4 shadow-opacity-50 w-[100%]   rounded-full px-4 py-3 text-white shadow-xl'
                                 whileHover={{ scale: 1.05   }}
                                 whileTap={{scale:0.9}}
                                 drag = 'x'
                            >
                            Gửi lời nhắn
                            </motion.button>
                        </form>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center md:w-[50%] w-[100%]'>
                    {/* //image */}
                        <div className='md:w-[30rem] md:h-[30rem] w-[20rem] h-[20rem] mx-auto flex'>
                        <img className='w-full h-full object-cover' src={ContactImg} />
                        </div>
                         {/* //map */}
                         <div className=' leading-[1.8rem] text-center'>
                            <h1 className=' text-[1.4rem] font-bold  uppercase  md:text-[1.5rem]'>Thông tin liên hệ</h1>
                            <div className=' mt-2 font-family text-[1.1rem]  md:text-[1rem]'>
                                <IonIcon name='location-outline' className='mr-3' />
                                03 Tô Ký, Quận 12, TP.HCM
                            </div>
                            <div className=' font-family text-[1.1rem]  md:text-[1rem]'>
                                <IonIcon name='call-outline' className='mr-3' />
                                0975 383 290
                            </div>
                            <div className=' font-family text-[1.1rem]  md:text-[1rem]'>
                                <IonIcon name='mail-outline' className='mr-3' />
                                Ttnga1508@gmail.com
                            </div>
                        </div>
                    
                    {/* logo
                        <div className='mt-4 flex justify-center gap-6 text-[2rem]'>
                            <Link to=''>
                                <IonIcon name='logo-facebook' className='text-blue-500' />
                            </Link>
                            <Link to=''>
                                <IonIcon name='logo-youtube' className='text-red-500' />
                            </Link>
                            <Link to=''>
                                <IonIcon name='logo-github' className='' />
                            </Link>
                        </div> */}
                </div>
            </div>
        </div>
      <Footer />
    </div>
  )
}

export default Contact
