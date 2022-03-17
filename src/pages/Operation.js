import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { bankDeposit,bankWithdrawal } from '../redux/BankAction' 

const Operation = () => {
    const[depositAmount,setDepositAmount]=useState("")
    const[withdrawAmount,setWithdrawAmount]=useState("")
    const[message,setMessage]=useState('operations')

    const dispatch = useDispatch()

    const bankBalance = useSelector(state => state. bankBalance.balance)

    //handle deposit
    const handleDeposit=()=>{
        if(depositAmount<=0){
            setMessage('deposit amount must be greater than 0')
            setDepositAmount("")
        }
        //if deposit amount  is not a number
        else if(isNaN(depositAmount)){
            setMessage('deposit amount must be a number')
            setDepositAmount("")
        }
        else if(depositAmount.startsWith('0')){
            setMessage('deposit amount must be greater than 0')
            setDepositAmount("")
        }
       else{
              dispatch(bankDeposit(depositAmount))
              setDepositAmount("")
              setMessage('deposit successful')
       }
    }

    const handleWithdraw=()=>{        
        if(bankBalance<withdrawAmount){
            setMessage('Insufficient Balance')
            setWithdrawAmount("")
        }
        else if(withdrawAmount.startsWith('0')){
            setMessage('Withdrawal amount must be greater than 0')
            setWithdrawAmount("")
        }
        else if(withdrawAmount<=0){
            setMessage('withdraw amount must be greater than 0')
            setWithdrawAmount("")
        }
        else if(isNaN(withdrawAmount)){
            setMessage('withdraw amount must be a number')
            setWithdrawAmount("")
        }
        else{
            dispatch(bankWithdrawal(withdrawAmount))
            setWithdrawAmount("")
            setMessage('Withdraw Successful')
        }
    }
  
  return (
    <div>
        <section className='w-full min-h-[calc(100vh-70px)] flex flex-col justify-start items-center bg-indigo-200 relative'>
            <span className='text-4xl md:text-7xl font-bold text-center text-slate-600 pt-8'>{bankBalance}</span
            >
            <div className='w-full flex flex-col justify-center items-center min-h-[50vh] fixed bottom-0'>
                <h3 className='py-4 text-xl text-slate-500 text-center font-bold uppercase'>{message} </h3>
               <div className='w-full min-h-[50vh] flex justify-center items-center'>
               <div className='flex-1 bg-indigo-500 h-full min-h-[50vh] flex flex-col justify-center items-center relative'>
               <h5 className='absolute top-8 font-bold uppercase text-xl text-indigo-50'>DEPOSIT</h5>
            <div className='w-full flex flex-col justify-center items-center'>
                    <div className='flex flex-col justify-center items-start px-3 py-5 w-full md:w-2/3'>
                    <label htmlFor="" className='text-md text-indigo-200'>Amount</label>
                    <input type="text" className='pl-2 py-2 focus:outline-dotted text-md font-semibold mt-2 w-full'value={depositAmount}  onChange={(e)=>setDepositAmount(e.target.value)}/>
                     </div>
                    <button className='bg-green-300 text-semibold text-slate-900 px-10 md:px-20 py-2 md:py-3 rounded-lg' onClick={handleDeposit}>Deposit</button>
            </div>
</div> 
<div className='flex-1 bg-indigo-600 h-full min-h-[50vh] flex flex-col justify-center items-center relative'>
<h5 className='absolute top-8 font-bold uppercase text-xl text-indigo-50'>Withdrawal</h5>
<div className='w-full flex flex-col justify-center items-center'>
                    <div className='flex flex-col justify-center items-start px-3 py-5 w-full md:w-2/3'>
                    <label htmlFor="" className='text-md text-indigo-200'>Amount</label>
                    <input type="text"  className='pl-2 py-2 focus:outline-dotted text-md font-semibold mt-2 w-full placeholder:hidden placeholder:md:flex' value={withdrawAmount}   onChange={(e)=>setWithdrawAmount(e.target.value)}/>
                    </div>
                    <button className='bg-red-400 text-semibold text-semibold text-slate-900 px-10 md:px-20 py-2 md:py-3 rounded-lg' onClick={handleWithdraw}>Withdraw</button>
            </div>
</div>
               </div>
            </div>
        </section>  
    </div>
  ) 
}

export default Operation