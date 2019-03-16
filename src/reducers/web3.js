const web3 = (state = null, action) => {
    switch (action.type) {
        case 'SET_WEB3':
            return action.web3
        default:
            return state
    }
}

export default web3