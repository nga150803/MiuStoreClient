import React, { useState } from 'react'
import IonIcon from '@reacticons/ionicons'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../config/firebase.config'
import { PayloadRegisterUser, authRegister } from '../../../redux/reducers/auth'
import { useAppDispatch } from '../../../hooks/useRedux'

const Register = () => {
const navigate = useNavigate()
const dispatch = useAppDispatch()


const [email, setEmail]= useState('')
const [password, setPassword] = useState('')
const [username, setUsername] = useState('')
const [retypePassword, setRetypePassword] = useState('')

const regulerEmail =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/


const handleRegister =(e:React.FormEvent<HTMLFormElement>)=>{
  e.preventDefault()


  if(!email || !password || !retypePassword){
    toast.warning('Vui lòng nhập đầy đủ thông tin!')
    return
  }

  if(!regulerEmail.test(email)){
    toast.error('Email không hợp lệ')
    return
  }

  if( password.length < 8){
    toast.error('Mật khẩu phải lớn hơn 8 ký tự! ')
    return
  }
  if( password !== retypePassword){
    toast.error('Mật khẩu không khớp');
    return
  }


 const data: PayloadRegisterUser = {
  email,
  username,
  authentication: {
    password  
  }
 }

 dispatch(authRegister(data))

}




  return (
    <div className="md:w-1/2 px-8 md:px-8">
    <h2 className="font-bold text-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">Đăng ký</h2>
    <p className="text-xs mt-4 text-[#002D74]">Hãy đăng ký tài khoản để có thể tâm sự cùng Miu</p>

    <form  className="flex flex-col gap-4" onSubmit={handleRegister}>
    <input className="p-2 px-4 mt-8 rounded-xl border outline-none" type="text" name="username" placeholder="Tên và Họ"  
       value={username}
       onChange={(e)=>{
           setUsername(e.target.value);
       }}  
      />
      <input className="p-2 px-4 rounded-xl border outline-none" type="email" name="email" placeholder="Email"  
       value={email}
       onChange={(e)=>{
           setEmail(e.target.value);
       }}  
      />
      <div className="relative">
        <input className="p-2 px-4 rounded-xl border w-full outline-none" type="password" name="password" placeholder="Mật khẩu" 
        value={password}
        onChange={(e)=>{
            setPassword(e.target.value);
        }}  
        />
        <IonIcon name='eye-outline' className='absolute top-1/2 right-3 -translate-y-1/2' />
      </div>

      <div className="relative">
        <input className="p-2 px-4 rounded-xl border w-full outline-none" type="password" name="password" placeholder="Nhập lại mật khẩu" 
        value={retypePassword}
        onChange={(e)=>{
            setRetypePassword(e.target.value);
        }}  
        />
        <IonIcon name='eye-outline' className='absolute top-1/2 right-3 -translate-y-1/2' />
      </div>
      <button className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white py-2 hover:scale-105 duration-300"
      >Đăng ký</button>
    </form>


    <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
      <p>Bạn đã có tài khoản?</p>
      <button className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300"
       onClick={() => navigate('/login')}
      >Đăng nhập</button>
    </div>
  </div>
  )
}

export default Register