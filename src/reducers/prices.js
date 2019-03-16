const prices = (state = {}, action) => {
    switch (action.type) {
        case 'SET_ETH_PRICE':
            let ethState = {...state}
            ethState['ETH'] = action.price
            return ethState
        default:
            return state
    }
}

export default prices