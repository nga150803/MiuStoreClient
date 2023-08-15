import IonIcon from '@reacticons/ionicons'
import React, { useState } from 'react'
import Card from '../../component/share/Card/Card'
import DetailOrder from '../../component/share/DetailOrder'
import Header from '../../layout/components/Header/Header'

const TABLE_HEAD = ['STT', 'Tên sản phẩm', 'Giá', 'Thao tác']

const TABLE_ROWS = [
  {
    id: 1,
    image: 'https://i.pinimg.com/564x/c9/4a/b3/c94ab3d5cc3b3a64a27e1665188404f9.jpg',
    name: 'Nước hoa hồng lưu hương 1',
    price: 120000
  },
  {
    id: 2,
    image: 'https://i.pinimg.com/564x/c9/4a/b3/c94ab3d5cc3b3a64a27e1665188404f9.jpg',
    name: 'Nước hoa hồng lưu hương 2',
    price: 120000
  },
  {
    id: 3,
    image: 'https://i.pinimg.com/564x/c9/4a/b3/c94ab3d5cc3b3a64a27e1665188404f9.jpg',
    name: 'Nước hoa hồng lưu hương 3',
    price: 120000
  },
  {
    id: 4,
    image: 'https://i.pinimg.com/564x/c9/4a/b3/c94ab3d5cc3b3a64a27e1665188404f9.jpg',
    name: 'Nước hoa hồng lưu hương 4',
    price: 120000
  },
  {
    id: 5,
    image: 'https://i.pinimg.com/564x/c9/4a/b3/c94ab3d5cc3b3a64a27e1665188404f9.jpg',
    name: 'Nước hoa hồng lưu hương 5',
    price: 120000
  }
]

interface Product {
  id: number
  image: string
  name: string
  price: number
}
const OrderManager = () => {
  const [isDetail, setIsDetail] = useState(false)
  const [selectedRow, setSelectedRow] = useState<Product>({
    id: 0,
    image: '',
    name: '',
    price: 0
  })

  return (
    <>
      <Header />

    <div className='md: m-auto mt-[5rem] w-wd-secondary w-wd-small '>
      <div  className='p-[3rem]'>
        <h1 className=' text-[1.3rem] font-semibold pb-[2rem]'>
          <IonIcon className='mr-4' name='cart-outline' />
          Đơn hàng của bạn
        </h1>
        <Card className='box-shadow rounded-2xl'>
          <table className='w-full min-w-max table-auto text-left'>
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th key={head} className='border-blue-gray-100 bg-blue-gray-50 border-b p-8'>
                    <p color='blue-gray' className='font-normal leading-none opacity-70'>
                      {head}
                    </p>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map(({ id, image, name, price }, index) => (
                <tr
                  key={name}
                  className=' even:bg-blue-gray-50/50  border-blue-gray-100 border-b p-4 hover:bg-green-50'
                >
                  <td className='pl-[2.5rem]'>{id}</td>

                  <td className='p-4'>
                    <p color='blue-gray' className='font-normal'>
                      {name}
                    </p>
                  </td>
                  <td className='p-4'>
                    <p color='blue-gray' className='font-normal'>
                      {price}
                    </p>
                  </td>

                  <td className='flex items-center  p-4'>
                    <button
                      className='background_gradient rounded-full px-6 py-2 text-white'
                      onClick={() => {
                        setSelectedRow({ id, image, name, price })
                        setIsDetail(true)
                      }}
                    >
                      Xem
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>

      {isDetail && (
        <DetailOrder
          name={selectedRow.name}
          price={selectedRow.price}
          image={selectedRow.image}
          onClose={() => setIsDetail(false)}
        ></DetailOrder>
      )}
    </div>
    </>
    
  )
}

export default OrderManager
