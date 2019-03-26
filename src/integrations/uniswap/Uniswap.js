import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'
import async from 'async'
import { ethers } from 'ethers'

import { setUniswapBalanceNw } from '../../actions/index'
import { exchangeInfo } from '../../constants/uniswapExchanges'
import { exchangeABI } from '../../contracts/exchangeABI'
//import { factoryABI } from '../../contracts/factoryABI'
import { erc20Abi } from '../../contracts/erc20Abi'
import { ConvertFromWei } from '../../constants/index'
import UniswapRow from './UniswapRow'
import UniswapLogo from '../../images/uniswap_logo.png'
import BoxWrapper from '../../components/BoxWrapper'


const Uniswap = (props) => {
    const { web3, account, prices,setUniswapBalanceNw } = props;
    const [totalValue,setTotalValue] = useState(0);
    const [tokenInfo,setTokenInfo] = useState(null)

    const initUniswap = async () => {
        
        let totalValueTemp = BigNumber(0)
        let tokenData = []
        
        async.each(exchangeInfo,async (item, callback)=> {
            //instantiate erc20 contract
    
            const erc20Contract = new ethers.Contract(item.erc20Address, erc20Abi, web3);
            //instantiate exchange contract
            const exchangeContract = new ethers.Contract(item.exchangeAddress, exchangeABI, web3);

            //Get balance of liquidity tokens
            let share = await exchangeContract.balanceOf(account)
            
            if (share.toString() === '0'){
                //no balance
                
                callback()
            } else {
                share = BigNumber(share.toString())
                
                let shareConverted = share.dividedBy(ConvertFromWei)
                
                //get total supply of liquidity tokens
                let totalSupply = await exchangeContract.totalSupply()
                totalSupply = BigNumber(totalSupply.toString())

                //calculate fractional share of liquidity
                let percentShare = share.dividedBy(totalSupply)
                
                let etherBalance;
                try {
                    //Get ether balance of exchange
                    etherBalance = await web3.getBalance(item.exchangeAddress)
                    etherBalance = BigNumber(etherBalance.toString())
   
                } catch (error){
                    console.log("error with getting ether balance",error);
                    
                }

                let erc20Balance;
                try {
                    //get erc20 balance of exchange
                    erc20Balance = await erc20Contract.balanceOf(item.exchangeAddress)
                    erc20Balance = BigNumber(erc20Balance.toString())
                    
                } catch (error) {
                    console.log("error with getting erc20 balance", error);

                }
                
                let ethWithdrawValue = percentShare.multipliedBy(etherBalance)
                ethWithdrawValue = BigNumber(Math.trunc(ethWithdrawValue.toNumber()))
                ethWithdrawValue = ethWithdrawValue.dividedBy(ConvertFromWei)
               

                let erc20WithdrawValueWei = percentShare.multipliedBy(erc20Balance)
                erc20WithdrawValueWei = BigNumber(Math.trunc(erc20WithdrawValueWei.toNumber()))
             

                //helper function for avoiding scientific notation. Todo: move to utils later
                Number.prototype.toFixedSpecial = function (n) {
                    var str = this.toFixed(n);
                    if (str.indexOf('e+') < 0)
                        return str;

                    // if number is in scientific notation, pick (b)ase and (p)ower
                    return str.replace('.', '').split('e+').reduce(function (p, b) {
                        return p + Array(b - p.length + 2).join(0);
                    }) + '.' + Array(n + 1).join(0);
                    //TO DO: Try to fix trailing . later
                };

                let ethValueErc20;
                try {
                    let erc20WeiNoSci = erc20WithdrawValueWei.toNumber().toFixedSpecial(0)
                    //for some reason there is trailing '.' at the end
                    erc20WeiNoSci = erc20WeiNoSci.slice(0,-1)
                    
                    ethValueErc20 = await exchangeContract.getTokenToEthInputPrice(erc20WeiNoSci)
                    ethValueErc20 = BigNumber(ethValueErc20.toString())
                    ethValueErc20 = ethValueErc20.dividedBy(ConvertFromWei)
                } catch(error){
                    console.log("error with getting eth to token price", error);
                }
                

                let ethPrice = BigNumber(prices.ETH)

                let totalEth = ethValueErc20.plus(ethWithdrawValue)
                
                let dollarValue = ethPrice.multipliedBy(totalEth)

                totalValueTemp = totalValueTemp.plus(dollarValue)
                let tokenInformation = {
                    value: dollarValue.toFixed(2),
                    symbol: item.symbol,
                    liquidityTokens: shareConverted.toFixed(5),
                    logo:item.logo
                }

                tokenData.push(tokenInformation)
                callback();
                //push dollar value along with symbol, as well as number of shares
            }
        }, function(err){
            //Runs after all async loop iterations run
            setTotalValue(totalValueTemp.toFixed(2))
            setUniswapBalanceNw(parseFloat(totalValueTemp.toFixed(2)))
            setTokenInfo(tokenData)
        }) 
    }

    useEffect(()=> {
        initUniswap();
    },[])

    return (
        <React.Fragment>
            <BoxWrapper
                minHeight="100px"
                width={props.width}
                headerTitle={"Uniswap"}
                margin={'20px 0px 20px 0px'}
                headerLogo={UniswapLogo}
                link={"https://uniswap.exchange/swap"}
                

            >
                <TopRow>
                    <Label>
                        {"Overall Pool Value: "}
                    </Label>
                    <Value>
                        {totalValue ? '$' + totalValue : 'loading'}
                    </Value>

                </TopRow>
            {
                tokenInfo &&
                tokenInfo.map(item => {
                    return (
                        <UniswapRow
                            symbol={item.symbol}
                            value={item.value}
                            key={item.symbol}
                            liquidityTokens={item.liquidityTokens}
                            logo={item.logo}
                        />
                    )
                })
            }
            </BoxWrapper>
        </React.Fragment>
    )
}

const mapStateToProps = state => ({
    web3: state.web3,
    account:state.account,
    prices: state.prices
})

const mapDispatchToProps = dispatch => ({
    setUniswapBalanceNw: value => dispatch(setUniswapBalanceNw(value)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Uniswap)

const TopRow = styled.div`
    width:100%;
    height:40px;
    display:flex;
    align-items:center;
    justify-content:center;
`

const Label = styled.span`
 margin-right:10px;
 font-weight:bold;
`

const Value = styled.span`
    font-size:20px;
`

