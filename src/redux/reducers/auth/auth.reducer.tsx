import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { AuthState, PayloadLoginUser, PayloadRegisterUser, PayloadUpdateUser } from './auth.type'
import { toast } from 'react-toastify'
import http from '../../../utils/http'


const initialState: AuthState = {
    access_token: '',
    refresh_token: '',
    account: {
        username: '',
        email: '',
        phoneNumber: '',
        avatar: '',
        address: '',
        role: '',
        _id: ''
    }
}

// REGISTER
export const authRegister = createAsyncThunk('auth/register', async (payload: PayloadRegisterUser) => {
    const res = await http.post('auth/register', payload)

    if (res.data.statusCode != 200) {
        toast.error(res.data.message)
        return
    }

    return res.data.data
})

// LOGIN
export const authLogin = createAsyncThunk('auth/login', async (payload: PayloadLoginUser) => {
    const res = await http.post('/auth/login', payload)

    if (res.data.statusCode != 200) {
        toast.error(res.data.message)
        return
    }

    return res.data.data
})

// UPDATE ACCOUNT
export const authUpdateAccount = createAsyncThunk('auth/updateAccount', async (payload: PayloadUpdateUser) => {
    const formData = new FormData()

    formData.append('_id', payload._id)
    formData.append('username', payload.username)
    formData.append('phoneNumber', payload.phoneNumber)
    formData.append('address', payload.address)
    if (payload.avatar) formData.append('file', payload.avatar)

    const res = await http.put('/user/update', formData)

    if (res.data.statusCode != 200) {
        toast.error(res.data.message)
        return
    }

    return res.data.data
})

const reducer = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        handleLogout: (state: AuthState) => {
            
            state.access_token = ''
            state.refresh_token = ''
            state.account = {
                username: '',
                email: '',
                phoneNumber: '',
                avatar: '',
                address: '',
                _id: '',
                role: ''
            }
            window.location.href = ('/login')
            
        }
    },
    extraReducers: (builder) => {
        builder.addCase(authRegister.fulfilled, (state, action) => {
            if (!action.payload) return state

            toast.success('Đăng ký thành công')
            window.location.href = '/login';
            return {
                ...action.payload
            }
        })
        builder.addCase(authLogin.fulfilled, (state, action) => {
            if (!action.payload) return state
            toast.success('Đăng nhập thành công')
            window.location.href = '/home';

            return {
                ...action.payload
            }
        })
        builder.addCase(authUpdateAccount.fulfilled, (state, action) => {
            if (!action.payload) return state
            toast.success('Cập nhật thành công')
            return {
                ...state,
                user: {
                    ...state.account,
                    ...action.payload
                }
            }
        })
    }
})

export const AuthAction = reducer.actions
export const AuthReducer = reducer.reducer