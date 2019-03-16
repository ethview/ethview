const erc20 = (state = 0, action) => {
    switch (action.type) {
        case 'SET_ERC20_VALUE':
            return state + action.value
        default:
            return state
    }
}

export default erc20