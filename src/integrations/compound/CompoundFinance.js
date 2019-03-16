import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'
import async from 'async'
import { ethers } from 'ethers'

import CompoundFinanceRow from './CompoundFinanceRow'
import { setCompoundBalanceNw } from '../../actions/index'
import BoxWrapper from '../../components/BoxWrapper'
import { CompoundMoneyMarketAbi } from '../../contracts/CompoundMoneyMarketAbi';
import CompoundLogo from '../../images/compound_logo.jpg'
import DaiLogo from '../../images/dai_logo.png'
import RepLogo from '../../images/rep_logo.svg'
import ZrxLogo from '../../images/zrx_logo.svg'
import WethLogo from '../../images/weth_logo.png'
import BatLogo from '../../images/bat_logo.svg'
import { ConvertFromWei } from '../../constants/index'

const CompoundFinance = (props) => {
    const { web3, account, setCompoundBalanceNw, prices } = props;
    const [liquidity, setLiquidity] = useState(null)
    const [balances, setBalances] = useState(null)

    const tokens = [
        {
            address: '0x0d8775f648430679a709e98d2b0cb6250d2887ef',
            name:'Basic Attention Token',
            ticker: 'BAT',
            logo:BatLogo
        },
        {
            address: '0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359',
            name:'Dai',
            ticker: 'DAI',
            logo: DaiLogo
        },
        {
            address: '0x1985365e9f78359a9B6AD760e32412f4a445E862',
            name: 'Augur',
            ticker: 'REP',
            logo: RepLogo
        },
        {
            address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
            name: 'Wrapped Ether',
            ticker: 'WETH',
            logo:WethLogo
        },
        {
            address: '0xe41d2489571d322189246dafa5ebde1f4699f498',
            name: '0x Protocol',
            ticker: 'ZRX',
            logo: ZrxLogo
        },
    ]

    const getCompoundData = async () => {
        //https://compound.finance/developers
        const address = '0x3fda67f7583380e67ef93072294a7fac882fd7e7'
        let compoundData = []

        const moneyMarket = new ethers.Contract(address, CompoundMoneyMarketAbi, web3);

        //get overall liquidity and add to redux Nw
        let liquidity = await moneyMarket.getAccountLiquidity(account)
        liquidity = BigNumber(liquidity.toString())
        const liquidityConverted = liquidity.dividedBy(ConvertFromWei)
        setLiquidity(liquidityConverted.toFixed(6))
        let price = BigNumber(prices.ETH)
        const value = liquidityConverted.multipliedBy(price)
        setCompoundBalanceNw(parseFloat(value.toFixed(2)))
        
        //get individual supply / borrow balances
        //BAT, DAI, REP, WETH, ZRX
        
        async.each(tokens,async (item,callback) => {
            let supplyBalance = await moneyMarket.getSupplyBalance(account, item.address)
            supplyBalance = BigNumber(supplyBalance)
            let balanceConverted = supplyBalance.dividedBy(ConvertFromWei)  
            
            let borrowBalance = await moneyMarket.getBorrowBalance(account, item.address)
            
            borrowBalance = BigNumber(borrowBalance)
            let balanceConvertedBorrow = borrowBalance.dividedBy(ConvertFromWei)

            let tokenData = {
                supplyBalance:balanceConverted.toFixed(6),
                borrowBalance:balanceConvertedBorrow.toFixed(6),
                ticker:item.ticker,
                logo:item.logo,
                name:item.name
            }

            compoundData.push(tokenData)
            callback();

           
        }, (err) => {
            setBalances(compoundData)
            
        })
    }

    useEffect(() => {
        getCompoundData()
    }, [])

    return (
        <BoxWrapper
            minHeight="100px"
            width={props.width}
            headerTitle={"Compound"}
            margin={'20px 0px 20px 0px'}
            headerLogo={CompoundLogo}
            link={"https://app.compound.finance/"}
            
            
        >
            <TopRow>
                <LiquidityLabel>
                    {"Overall Liquidity: "}
                </LiquidityLabel>
                <LiquidityValue>
                    {liquidity ? liquidity + ' ETH' : 'loading'}
                </LiquidityValue>
                
            </TopRow>
            <ContentWrapper>
                {balances && 
                    balances.map(item => {
                    return (
                        <CompoundFinanceRow
                            supply={item.supplyBalance}
                            borrow={item.borrowBalance}
                            logo={item.logo}
                            ticker={item.ticker}
                            key={item.ticker}
                            name={item.name}
                        />
                    )
                })
                }
            </ContentWrapper>        
        </BoxWrapper>
    );

}

const mapStateToProps = state => ({
    web3: state.web3,
    account: state.account,
    prices: state.prices
})

const mapDispatchToProps = dispatch => ({
    setCompoundBalanceNw: value => dispatch(setCompoundBalanceNw(value)),
})



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CompoundFinance)

const ContentWrapper = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-self:flex-start;
`

const TopRow = styled.div`
    width:100%;
    height:40px;
    display:flex;
    align-items:center;
    justify-content:center;
`

const LiquidityLabel = styled.span`
 margin-right:10px;
 font-weight:bold;
`

const LiquidityValue = styled.span`
    font-size:20px;
`














