import IonIcon from '@reacticons/ionicons'
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'

import { auth, facebook, google } from '../../../config/firebase.config';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/useRedux';
import { authLogin } from '../../../redux/reducers/auth';


const Login = () => {
  const navigate = useNavigate();
const [email, setEmail] =useState('')
const [password, setPassword] = useState('')


const dispatch = useAppDispatch()
  
// login with facebook
  const handleLoginFacebook = ()=>{
    signInWithPopup(auth, facebook)
    .then((result)=>{
      const user = result.user;
      console.log(user);
      toast.success('Đăng nhập thành công')
      localStorage.setItem('token', user?.refreshToken || '');
      navigate('/home')

    })
    .catch((error)=>{
      toast.error('Đăng nhập thất bại')
    })
  }
// login with google
  const handleLoginGoogle = () => {

    signInWithPopup(auth, google)
    .then((result)=>{
      const user = result.user;
      console.log(user);
      toast.success('Đăng nhập thành công')
      localStorage.setItem('token', user?.refreshToken || '');
      navigate('/home')

    })
    .catch((error)=>{
      toast.error('Đăng nhập thất bại')
    })
  }

  //login with account


  const handleLoginAccount = (e:React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if(!email || !password){
        toast.warning('Nhập đủ thông tin!');
        return
      }

      const data = {
        email,
        password
      }
     

      dispatch(authLogin(data))

  }







  return (
    <div className="md:w-1/2 px-8 md:px-8">
    <h2 className="font-bold text-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">Đăng nhập</h2>
    <p className="text-xs mt-2 text-[#002D74]">Nếu bạn đã là thành viên, hãy đăng nhập</p>

    <form className="flex flex-col gap-4" onSubmit={handleLoginAccount}>
      <input className="p-2 px-4 mt-8 rounded-xl border outline-none" type="email" name="email" placeholder="Email"  
      value={email}
      onChange={ (e)=>{
          setEmail(e.target.value)
      }}
      />
      <div className="relative">
        <input className="p-2 px-4 rounded-xl border w-full outline-none" type="password" name="password" placeholder="Password" 
         value={password}
         onChange={ (e)=>{
             setPassword(e.target.value)
         }}
        />
        <IonIcon name='eye-outline' className='absolute top-1/2 right-3 -translate-y-1/2' />
      </div>
      <button className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white py-2 hover:scale-105 duration-300">Đăng nhập</button>
    </form>

    <div className="mt-4 grid grid-cols-3 items-center text-gray-400">
      <hr className="border-gray-400" />
      <p className="text-center text-sm">OR</p>
      <hr className="border-gray-400" />
    </div>

    <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]"
    onClick={handleLoginGoogle}
    >
      <IonIcon  name='logo-google' className="mr-3"/>
      Đăng nhập bằng Google
    </button>
    <button className="bg-white border py-2 w-full rounded-xl mt-2 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]"
    onClick={handleLoginFacebook}
    >
      <IonIcon  name='logo-facebook' className="mr-3"/>
      Đăng nhập bằng FaceBook
    </button>

    <div className="mt-1 text-xs border-b border-[#002D74] py-2 text-[#002D74]">
      <a href="#">Quên mật khẩu</a>
    </div>

    <div className="mt-2 text-xs flex justify-between items-center text-[#002D74]">
      <p>Bạn chưa có tài khoản?</p>
      <button className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300"  
       onClick={() => navigate('/register')}
      >Đăng ký</button>
    </div>
  </div>

    
  )
}

export default Login