import React, { useEffect,useState } from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'

import {setEthBalanceNw} from '../actions/index'
import { ConvertFromWei } from '../constants/index'

const BalanceWidget = (props) => {
    const { web3,account,prices } = props;
    const [balance,setBalance] = useState(null)

    const getAndSetBalance = async () => {
        const balanceWei = await web3.getBalance(account);
        const balanceEth = BigNumber(balanceWei).dividedBy(ConvertFromWei);
        const priceEth = BigNumber(prices.ETH)
        const dollarValue = priceEth.multipliedBy(balanceEth)

        setBalance(balanceEth.toFixed(6))
        //race condition with eth price action?
        props.setEthBalanceNw(parseFloat(dollarValue.toFixed(2)))

    }

    useEffect(() => {
       getAndSetBalance()
    },[])

    return (
        <BalanceText>{balance}</BalanceText>
    );

}

const mapStateToProps = state => ({
    web3: state.web3,
    account: state.account,
    prices:state.prices
})

const mapDispatchToProps = dispatch => ({
    setEthBalanceNw: value => dispatch(setEthBalanceNw(value)),
})



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BalanceWidget)

const BalanceText = styled.span`
`












