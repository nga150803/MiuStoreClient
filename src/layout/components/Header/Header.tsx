import IonIcon from '@reacticons/ionicons'
import { Link } from 'react-router-dom'
import Logo from '../../../asset/image/logo.png'
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/useRedux';
import { AuthAction } from '../../../redux/reducers/auth';
const Header = () => {
  const [amountCart, setAmountCart] = useState(0);
  const dataLocal = JSON.parse(localStorage.getItem('cart') || '[]');
  const login = useAppSelector(state => state.auth.account)
  const dispatch = useAppDispatch()

  

  useEffect(() => {
    setAmountCart(dataLocal.length);
  }, [dataLocal]);

  const handleLogout = () => {
    
    dispatch(AuthAction.handleLogout())
  }

 
  return (
    <div className=' sticky top-0 h-20 z-[100] w-screen flex justify-center items-center shadow-sd-primary bg-white'>
      <div className='flex justify-between w-wd-secondary md:w-wd-tertiary items-center'>
      {/* logo */}
        <Link to={'/home'} className='w-[3rem] h-[3rem] flex justify-center items-center gap-[1rem]'>
          <img className='h-full w-full object-cover' src={Logo}/>
          <h1 className='text-[1.5rem]'><span className='font-bold text-[2rem] text-[#3ee298]'>Miu</span>Shop</h1>

        </Link>
     
         {/* menu */}

         <div className='flex gap-7 text-lg'>
          <Link to={'/home'}>Trang chủ</Link>
          <Link to={'/shop'}>Cửa hàng</Link>
          <Link to={'/about'}>Giới thiệu</Link>
          <Link to={'/contact'}>Liên hệ</Link>
          <Link to={'/blog'}>Bài viết</Link>

         </div>
          <div className=' flex gap-6  justify-center items-center'>

            <Link to= {'/cart'}>
              <div className='relative bottom-3'>
              <p className='text-[1rem] relative  top-3 bg-red-400 text-white left-3 rounded-full flex items-center justify-center'>{amountCart || 0}</p>
              <IonIcon name='bag-outline' className='text-2xl' />
              </div>
              
              </Link>
            {/* Conditionally render the user profile section */}
          {login ? (
            <Menu placement='bottom-end'>
              <MenuHandler>
                <div className='w-[2rem] h-[2rem] bg-pink-50 rounded-full'>
                  <img
                    className='w-full h-full rounded-full border border-solid border-red-400'
                    src='https://i.pinimg.com/236x/af/89/40/af8940d956696034e5bd0190dae94b0d.jpg'
                    alt='avatar'
                  />
                </div>
              </MenuHandler>
              <MenuList className='rounded-lg z-[110] outline-none w-[14rem]'>
                <MenuItem className='px-0'>
                  <Link
                    to={'/profile'}
                    className='text-start px-6 pt-4 pb-2 text-[1rem] flex justify-start items-center gap-4 hover:bg-green-100'
                  >
                    <IonIcon className='text-[1.1rem]' name='person-outline' />
                    Hồ sơ cá nhân
                  </Link>
                </MenuItem>
                {/* Add other menu items for logged-in users here */}
                {/* For example, "Đơn hàng của bạn" and "Đăng xuất" */}
                {/* <MenuItem className='px-0'>
                  <Link
                    to={'/ordermanager'}
                    className='text-start px-6 py-2 text-[1rem] flex justify-start items-center gap-4 hover:bg-green-100'
                  >
                    <IonIcon className='text-[1.1rem]' name='albums-outline' />
                    Đơn hàng của bạn
                  </Link>
                </MenuItem> */}
                <MenuItem className='px-0'>
                  <Link
                    to={'/my-bill'}
                    className='text-start px-6 py-2 text-[1rem] flex justify-start items-center gap-4 hover:bg-green-100'
                  >
                    <IonIcon className='text-[1.1rem]' name='ticket-outline' />
                   Hóa đơn của bạn
                  </Link>
                </MenuItem>
                <MenuItem className='px-0'>
                  <button
                    className='text-start px-6 py-2 text-[1rem] flex justify-start items-center gap-4 hover:bg-green-100'
                    onClick={handleLogout}
                  >
                    <IonIcon className='text-[1.1rem]' name='log-out-outline' />
                    Đăng xuất
                  </button>
                </MenuItem>
              </MenuList>
            </Menu>
          ) : (
            <Link to={'/login'}>
              <IonIcon name='person-outline' className='text-2xl' />
            </Link>
          )}
          </div>

      </div>
    </div>


  )
}

export default Header
