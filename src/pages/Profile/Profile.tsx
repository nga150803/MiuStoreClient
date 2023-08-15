import React , {useEffect, useState}from 'react'
import Header from '../../layout/components/Header/Header'
import Card from '../../component/share/Card/Card'
import { useAppSelector } from '../../hooks/useRedux'


const Profile = () => {
  const [isUpdate, setIsUpdate] = useState(false)

  const account = useAppSelector(state => state.auth.account)

  

  return (
    <div>
      <Header />
      <div className='md: m-auto mt-[5rem] w-wd-secondary w-wd-small flex justify-center '>
        <div className='  w-[30%]'>
          <div className='mt-[3rem]'>
            <Card extra={'items-center flex-col w-full h-full p-[16px]  box-shadow'}>
              {/* Background and profile */}
              <div className='background-image-profile relative mt-1 flex h-40 w-full justify-center rounded-xl bg-cover'>
                <div className='dark:!border-navy-700 absolute -bottom-12 flex h-[150px] w-[150px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400'>
                  <img
                    className='h-full w-full rounded-full object-cover'
                    src={
                      account.avatar ? account.avatar : (
                        'https://i.pinimg.com/564x/cb/cf/62/cbcf625bd57cd4a076329b94eefadace.jpg'
                      )
                    }
                    alt=''
                  />
                </div>
              </div>

              {/* Name and position */}
              <div className='mt-16 flex flex-col items-center'>
                <input type="text" value={account.username} className='text-center uppercase outline-none font-bold text-[1.4rem] bg-white' disabled={!isUpdate}/>
                <h5 className='text-base font-normal translate-x-[-0.5rem] text-gray-600'>Thành viên tại Miu</h5>
              </div>

              {/* Post followers */}
              <div className='mb-3 mt-6 flex flex-col gap-4  '>
                <div className='flex items-center  justify-between gap-4'>
                  <h4 className='text-navy-700 text-[1rem] font-bold dark:text-white'>Email:</h4>
                  <input type="text" placeholder={account.email} disabled={!isUpdate} className='bg-white text-gray-900' />
                </div>
                <div className='flex items-center  justify-between gap-4'>
                  <h4 className='text-navy-700 text-[1rem] font-bold dark:text-white'>SĐT:</h4>
                  <input type="text" placeholder={account.phoneNumber || '---'} disabled={!isUpdate} className='bg-white text-gray-900' />          
                </div>
              </div>
              <div className='gap-4 flex mt-4 justify-center items-center'>
                <button className='btn_container py-2 px-4 text-white rounded-lg' type={isUpdate ? 'submit' : 'button'}
                  onClick={ () => setIsUpdate(true)}
                >{isUpdate ? 'Luu' : 'Cập nhật'}</button>
                {
                  isUpdate && (<button className='bg-red-400 py-2 px-4 text-white rounded-lg'
                    onClick={ () => {
                      setIsUpdate(false)
                    }}
                  >Hủy</button>)
                }

              </div>
            </Card>
          </div>
          
        </div>
      </div>
      
      
    </div>
  )
}

export default Profile
