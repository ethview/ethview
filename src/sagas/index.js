import { put, takeEvery,call, all } from 'redux-saga/effects'
import axios from 'axios'
import { setEthPrice } from '../actions/index'

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* ethPriceLoop() {
    let i=0;
    let url = 'https://api.coinbase.com/v2/exchange-rates?currency=ETH'
    while (true){
        if (i !== 0){
            yield delay(30000)
        }
        
        let priceResponse = yield call(axios.get,url) 
        let price = priceResponse.data.data.rates.USD;
        yield put(setEthPrice(parseFloat(price)))
        i++
    }
}

//REMEMBER TO ALWAYS ADD NEW WATCHER SAGAS TO THE ROOT SAGA

export default function* rootSaga() {
    yield all([
        ethPriceLoop(),
    ])
}