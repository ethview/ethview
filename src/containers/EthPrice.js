import React from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components'


const EthPrice = (props) => {
    const { prices } = props;

    return (
        <PriceWrapper>
            <PriceLabel>ETH-USD </PriceLabel> <PriceAmount>{prices.ETH}</PriceAmount>
        </PriceWrapper>
    );
}

const mapStateToProps = state => ({
    prices: state.prices
})


export default connect(
    mapStateToProps
)(EthPrice)

const PriceWrapper = styled.div`
    width:100%;
    border-radius:5px;
    width:100%;
    height:25px;
    color:white;
    display:flex;
    align-items:baseline;
    justify-content:center;
    font-weight:bold;
    margin-top:6px;
`

const PriceLabel = styled.div`
    font-size:12px;
    margin-right:5px;
    color:CDDCE9;
`

const PriceAmount = styled.div`
    font-size:16px;
`







