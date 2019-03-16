const netWorth = (state = [0], action) => {
    switch (action.type) {
        case 'SET_ETH_BALANCE_NW':
            return [...state,action.value]
        case 'SET_MAKER_BALANCE_NW':
            return [...state, action.value]
        case 'SET_COMPOUND_BALANCE_NW':
            return [...state, action.value]
        case 'SET_ERC20_BALANCE_NW':
            return [...state, action.value]
        case 'SET_UNISWAP_BALANCE_NW':
            return [...state, action.value]
        default:
            return state
    }
}

export default netWorth