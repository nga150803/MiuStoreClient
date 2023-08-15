import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BillState } from "./bill.type";
import http from "../../../utils/http";

type BillType = {
    bill: BillState[]
}

const initialState: BillType = {
    bill: []
}

export const createBill = createAsyncThunk('bill/createBill', async (payload: BillState) => {
    const res = await http.post(`/bill/create`, payload)

    console.log(res.data);
    

    return res.data
})

export const getAllBill = createAsyncThunk('bill/getAllBill', async () => {
    const res = await http.get(`/bill/all`)

    console.log(res.data);
    

    return res.data
})

const reducer = createSlice({
    name: 'bill',
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder.addCase(createBill.fulfilled, (state, action) => {
            if (!action.payload) return state
            localStorage.removeItem('cart')
            window.location.href = '/home';
            const newState = { ...state };
            newState.bill.push(action.payload);
            return newState;
          });
          builder.addCase(getAllBill.fulfilled, (state, action) => {
            state.bill = action.payload;
          });
    }
})

export const BillAction = reducer.actions
export const BillReducer = reducer.reducer