const initialState={
    balance:0
}

export const BankReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'DEPOSIT':
            return{
                ...state,
                balance:state.balance + parseInt(action.payload)
            }
        case 'WITHDRAW':
            return{
                ...state,
                balance:state.balance - parseInt(action.payload)
            }
        case 'BANKRUPT':
            return { 
                ...state,
                balance:0
            }
        default:
            return state
    }
}