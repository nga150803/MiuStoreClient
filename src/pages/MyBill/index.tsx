import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { getAllBill } from '../../redux/reducers/bill';
import QRCode from 'react-qr-code';
import { Link } from 'react-router-dom';

const MyBill = () => {
    const dispatch = useAppDispatch()
    const listBill = useAppSelector(state => state.bill.bill)

    React.useEffect(() => {
        dispatch(getAllBill())
    }, [dispatch])

    console.log(listBill);
    
  return (
    <div className='min-h-screen flex  gap-8 items-start justify-start'>
            {
                listBill.map((bill,index) => (
                   <div className='flex flex-col items-center gap-4'>
                     <div key={index} className='p-4 rounded-2xl border bg-gray-100 border-gray-300'>
                        {      
        <QRCode value={`http://10.82.31.23:3000/bill/${bill._id}`}/>
                        }
                    </div>
                    <Link className='py-2 px-4 rounded-lg border border-gray-300 bg-white text-gray-700 hover:text-white hover:bg-green-500 duration-200' to={`http://localhost:3000/bill/${bill._id}`}>Xem hóa đơn</Link>
                   </div>
                ))
            }

        
    </div>
  )
}

export default MyBill