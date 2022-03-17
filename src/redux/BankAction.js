
export const bankDeposit = (amount) => {
    return {
        type: 'DEPOSIT',
        payload: amount
    }
}

export const bankWithdrawal = (amount) => {
    return {
        type: 'WITHDRAW',
        payload: amount
    }
}

export const bankRupt = () => {
    return {
        type: 'BANKRUPT'
    }
}