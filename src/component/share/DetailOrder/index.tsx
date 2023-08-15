import IonIcon from '@reacticons/ionicons'
import { motion } from 'framer-motion'

interface DetailOrderProp {
  children?: React.ReactNode
  onClose: () => void
  name: string
  image: string
  price: number
}

const DetailOrder = ({ children, onClose, name, image, price }: DetailOrderProp) => {
  return (
    <motion.div
      className='fixed bottom-0 left-0 right-0 top-0 z-[200] flex items-center justify-center bg-[#00000070]'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className='rounded-2xl bg-white  shadow-lg p-8'
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className='flex justify-between items-center pb-2'>
          <h1 className='font-bold text-1.2rem'>Đơn hàng</h1>
          <motion.button
            className=' flex h-[2rem] w-[2rem] items-center justify-center rounded-full bg-red-400 p-2 text-white font-bold'
            onClick={onClose}
            whileTap={{scale:.9}}
          >
            <IonIcon name='close-outline' className=' text-[1rem]' />
          </motion.button>
        </div>
        <div className='leading-8 pb-4'>
        <h1 className='font-semibold text-[1.2rem]'>{name}</h1>

        <p className='text-[1.2rem]'>Giá:{price}</p>

        </div>

        {children}
        <div className=' m-auto w-[20rem] h-[20rem] '>
        <img className='w-full h-full object-cover rounded-lg' src={image} alt='' />

        </div>
      </motion.div>
    </motion.div>
  )
}

export default DetailOrder
