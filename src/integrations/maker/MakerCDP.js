import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components'
import Maker from '@makerdao/dai';
import { GraphQLClient } from 'graphql-request'
import axios from 'axios'
import BigNumber from 'bignumber.js'
import async from 'async'

import MakerCDPRow from './MakerCDPRow'
import { setMakerBalanceNw } from '../../actions/index'
import BoxWrapper from '../../components/BoxWrapper'
import MakerLogo from '../../images/maker_logo.svg'

//https://developer.makerdao.com/dai/1/graphql/
//What are proxy addresses?
//https://makerdao.com/documentation/
const MakerCDP = (props) => {

    const { account, prices } = props;
    const [cdps,setCdps] = useState(null)
    const [loading,setLoading] = useState(false)

    const createMaker = async () => {
        
        setLoading(true)
        const maker = await Maker.create("http", {
            url: 'https://mainnet.infura.io/v3/16336a82e72c4f8eb86903e55ac6a8b2',
            web3: {
                statusTimerDelay: 15000,
            },
            log:false
        });
        await maker.authenticate();
        const proxy = await maker.service('proxy').getProxyAddress(account);


        const query = `
        {
            allCups(
                first: 10,
                condition: { lad: "${proxy}" },
                orderBy: RATIO_ASC
            ) {
                totalCount
                pageInfo {
                hasNextPage
                hasPreviousPage
                endCursor
                }
                nodes {
                id
                lad
                art
                ink
                ratio
                actions(first: 5) {
                    nodes {
                    act
                    time
                    }
                }
                }
            }
        }
        `
        const graphQLClient = new GraphQLClient('https://sai-mainnet.makerfoundation.com/v1', {
            mode: 'cors',
        })
        const response = await graphQLClient.request(query)
        
        let cdpsTemp = []
        if (response.allCups.totalCount > 0){
            let nwContributionTotal = BigNumber(0);
            let i = 0;
            async.each(response.allCups.nodes,async (item,callback) => {
                //get missing data from dai.js API
                let cdp = await maker.getCdp(item.id)
                let liquidationObject = await cdp.getLiquidationPrice();
                let liquidationPrice = liquidationObject._amount.toFixed(3)
                let safety;
                if (item.art !== '0'){
                    safety = await cdp.isSafe();
                } else {
                    safety = true;
                }
                
                //calculate things for nw
                let collateral = BigNumber(item.ink);
                let collateralUsd = collateral.multipliedBy(BigNumber(prices.ETH));
                let debt = BigNumber(item.art)
                let debtFloat = parseFloat(debt.toFixed(3))
                //for sorting
                let priceToFall = (parseFloat(liquidationPrice) - parseFloat(prices.ETH)) / parseFloat(prices.ETH)* -100
                priceToFall = priceToFall.toFixed(3)
                console.log("price to fall",priceToFall)
                
                
                
                let nwContribution = collateralUsd.minus(debt);
                nwContributionTotal = nwContributionTotal.plus(nwContribution);
                
                //To do: Add % swing to kill CDP
                let cdpInfo = {
                    id: item.id,
                    art: item.art,
                    ink: item.ink,
                    ratio:item.ratio,
                    lad: item.lad,
                    safety:safety.toString(),
                    liquidationPrice:liquidationPrice,
                    percentToFall:priceToFall
                }

                cdpsTemp.push(cdpInfo)
                i++ //for sorting
                callback()
            }, (err) => {
                //after async.each
                //How to sort cdps by item.art
                setCdps(cdpsTemp)
                setLoading(false)
                props.setMakerBalanceNw(parseFloat(nwContributionTotal.toFixed(2)))
            })
            
        } else {
            setLoading(false)
        }
    }

    useEffect(()=> {
        createMaker();
        
    },[])

    return (
        <BoxWrapper
            minHeight="100px"
            width={props.width}
            headerTitle={"Maker"}
            headerLogo={MakerLogo}
            margin={'20px 0px 20px 0px'}
            link={"https://cdp.makerdao.com/"}
           
        >
         
        {!loading ? 
        <React.Fragment>
            { cdps ?
                <ContentWrapper>
                    {cdps.map(cdp => <MakerCDPRow cdp={cdp} key={cdp.id} />)}
                </ContentWrapper>
                :
                <div>No CDPs</div>
            }
            
        </React.Fragment>
        :
        "loading"}
                    
        </BoxWrapper>
        
    );

}

const mapStateToProps = state => ({
    account:state.account,
    prices:state.prices
})

const mapDispatchToProps = dispatch => ({
    setMakerBalanceNw: value => dispatch(setMakerBalanceNw(value)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MakerCDP)

const ContentWrapper = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-self:flex-start;
`












