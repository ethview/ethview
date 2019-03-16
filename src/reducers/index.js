import { combineReducers } from 'redux'
import layout from './layout'
import web3 from './web3'
import account from './account'
import netWorth from './networth'
import prices from './prices'
import erc20 from './erc20'
import ens from './ens'

export default combineReducers({
    layout,
    web3,
    account,
    netWorth,
    prices,
    erc20,
    ens
})