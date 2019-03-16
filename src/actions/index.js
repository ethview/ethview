export const addWidget = widget => ({
    type: 'ADD_WIDGET',
    widget  
})

export const setWeb3 = web3 => ({
    type: 'SET_WEB3',
    web3
})

export const setAccount = account => ({
    type: 'SET_ACCOUNT',
    account
})

export const setEns = ens => ({
    type: 'SET_ENS',
    ens
})

export const setEthBalance = value => ({
    type: 'SET_ETH_BALANCE',
    value
})

export const setEthPrice = price => ({
    type: 'SET_ETH_PRICE',
    price
})

export const setERC20Value = value => ({
    type: 'SET_ERC20_VALUE',
    value
})

export const setEthBalanceNw = value => ({
    type: 'SET_ETH_BALANCE_NW',
    value
})

export const setMakerBalanceNw = value => ({
    type: 'SET_MAKER_BALANCE_NW',
    value
})

export const setCompoundBalanceNw = value => ({
    type: 'SET_COMPOUND_BALANCE_NW',
    value
})

export const setERC20BalanceNw = value => ({
    type: 'SET_ERC20_BALANCE_NW',
    value
})

export const setUniswapBalanceNw = value => ({
    type: 'SET_UNISWAP_BALANCE_NW',
    value
})


