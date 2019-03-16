import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import axios from 'axios'
import BigNumber from 'bignumber.js'
import styled from 'styled-components'
import { FaCaretDown } from 'react-icons/fa'
import { FaCaretUp } from 'react-icons/fa'

import  EthereumLogo  from '../../images/ethereum_logo.png'
import BoxWrapper from '../../components/BoxWrapper'
import ERC20Row from './ERC20Row'
import { setERC20BalanceNw,setERC20Value } from '../../actions/index'

const ERC20 = (props) => {

    const { account,setERC20BalanceNw,setERC20Value} = props;
    const [erc20List, setErc20List] = useState(null)
    const [totalValue, setTotalValue] = useState(0)
    const [noTokens,setNoTokens] = useState(false)
    const [loading, setLoading] = useState(false)
    const [expanded,setExpanded] = useState(true)

    const getERC20Balances = async () => {
        setLoading(true)
        const url = `https://api.ethplorer.io/getAddressInfo/${account}?apiKey=freekey`;
        const response = await axios.get(url);
        const tokens = response.data.tokens;
        
        let totalValueTemp = BigNumber(0);
        let erc20ListTemp = []
        
        if (tokens !== undefined){
            tokens.forEach((item) => {
                let info = item.tokenInfo;

                if (item.balance && info.price.rate) {
                    try {
                        let balanceBigNumWei = BigNumber(item.balance)
                        //Each token has units with different decimal count. Ether is 18 for wei -> Ether
                        let exponent = BigNumber(info.decimals)
                        let divisor = BigNumber(10).exponentiatedBy(exponent)
                        let balanceFromWei = balanceBigNumWei.dividedBy(divisor)
                    
                        let priceBigNum = BigNumber(info.price.rate)
                        let dollarValue = balanceFromWei.multipliedBy(priceBigNum)

                        let tokenData = {
                            name: info.name,
                            symbol: info.symbol,
                            image: info.image,
                            price: priceBigNum.toFixed(2),
                            balance: balanceFromWei.precision(10).toString(),
                            value: dollarValue.toFixed(2)
                        }

                        erc20ListTemp.push(tokenData)

                        totalValueTemp = totalValueTemp.plus(dollarValue)

                    } catch(error){
                        
                        
                    }
                } else {
                    
                    
                    
                }
            })
            
            //update state
            setTotalValue(totalValueTemp.toFixed(2))
            setErc20List(erc20ListTemp)

            //update redux with total ERC20 value and update net worth
            setERC20BalanceNw(parseFloat(totalValueTemp.toFixed(2)))
            setERC20Value(parseFloat(totalValueTemp.toFixed(2)))

        }
        setNoTokens(true)
        setLoading(false)
        
    }

    useEffect(()=>{
        getERC20Balances();
    },[])

    return (
        <BoxWrapper
            minHeight="100px"
            width={props.width}
            headerTitle={"ERC20"}
            headerLogo={EthereumLogo}
            margin={'20px 0px 20px 0px'}
            link={`https://etherscan.io/address/${account}`}
        >
            <TopRow>
                <LiquidityLabel>
                    {"Total Value: "}
                </LiquidityLabel>
                <LiquidityValue>
                    {totalValue ? '$' + totalValue : '0'}
                </LiquidityValue>
                <CaretWrapper>
                    {
                        expanded ? 
                        <CaretUp onClick={()=> setExpanded(false)}/> :
                        <CaretDown onClick={() => setExpanded(true)}/>
                    }
                    
                </CaretWrapper>

            </TopRow>
            {
                expanded ? 
                    <ContentWrapper>
                        {
                            loading ? 'loading' :
                                <React.Fragment>
                                    {(erc20List && noTokens) ? erc20List.map(item => {
                                        return (
                                            <ERC20Row
                                                name={item.name}
                                                symbol={item.symbol}
                                                key={item.symbol}
                                                image={item.image}
                                                price={item.price}
                                                balance={item.balance}
                                                value={item.value}
                                            />
                                        )
                                    }) : 'No tokens'}
                                </React.Fragment>
                        }

                    </ContentWrapper>
                    :
                    <Spacer/>

            }
            
        </BoxWrapper>
    )
}

const mapStateToProps = state => ({
    account: state.account,
})

const mapDispatchToProps = dispatch => ({
    setERC20BalanceNw: value => dispatch(setERC20BalanceNw(value)),
    setERC20Value: value => dispatch(setERC20Value(value)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ERC20)

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

const CaretWrapper = styled.div`
    margin-left:10px;
    font-size:20px;
    cursor:pointer;
`
const CaretDown = styled(FaCaretDown)`
    color:gray;
`

const CaretUp = styled(FaCaretUp)`
    color:gray;
`

const Spacer = styled.div`
    height:30px;
`


