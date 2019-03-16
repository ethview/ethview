const ens = (state = null, action) => {
    switch (action.type) {
        case 'SET_ENS':
            return action.ens
        default:
            return state
    }
}

export default ens;