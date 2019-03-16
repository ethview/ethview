import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components'

import { setEthBalanceNw } from '../actions/index'
import BoxWrapper from '../components/BoxWrapper'

const NetWorth = (props) => {
    const { netWorth } = props;

    let balance = 0;

    const returnNetWorth = (netWorth) => {
        netWorth.forEach((item) => {
            balance = balance + item;
        })
        let balanceDisplay = Number((balance).toFixed(2));
        return <BalanceText>{'$ ' + balanceDisplay}</BalanceText>
    }

    return (
        <React.Fragment>
             {returnNetWorth(netWorth)}
        </React.Fragment>
    );
}

const mapStateToProps = state => ({
    netWorth:state.netWorth
})


export default connect(
    mapStateToProps,
)(NetWorth)

const BalanceText = styled.div`
    
`












