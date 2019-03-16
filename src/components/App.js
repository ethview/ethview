import React, { useState } from 'react';
import styled from 'styled-components'
import Button from '@material-ui/core/Button';

import MakerCDP from '../integrations/maker/MakerCDP'
import CompoundFinance from '../integrations/compound/CompoundFinance'
import AccountBox from '../containers/AccountBox'
import BalanceWidget from '../containers/BalanceWidget';
import ERC20 from '../integrations/erc20/ERC20'
import TopRowMetric from '../components/TopRowMetric'
import WidgetModal from '../containers/WidgetModal'
import NetWorth from '../containers/NetWorth'
import Grid from '@material-ui/core/Grid';
import Uniswap from '../integrations/uniswap/Uniswap'
import Erc20Balance from '../containers/Erc20Balance'
import EthPrice from '../containers/EthPrice'


const App = (props) => { 
  
  const [widgetModal,setWidgetModal] = useState(false)

  const handleWidgetClose = () => {
    setWidgetModal(false)
  }

  const handleWidgetOpen = () => {
    setWidgetModal(true)
  }


  return (
    <React.Fragment>
      <TopNav handleWidget={handleWidgetOpen}/>
          <WidgetModal 
            visible={widgetModal}
            onClose={handleWidgetClose}
          />
            
          <ContentWrapper>
            <TopRowWrapper>
              <TopRowMetric title={'Ether Balance (ETH)'}>
                <BalanceWidget/>
              </TopRowMetric>
              <TopRowMetric title={'Calculated Net Worth (USD)'}>
                <NetWorth />
              </TopRowMetric>
              <TopRowMetric title={'ERC20 Token Balance (USD)'}>
                <Erc20Balance/>
              </TopRowMetric>
            </TopRowWrapper>
            <WidgetWrapper>
              <Grid container spacing={16}>
                <Grid item xs={12} lg={12} >
              <ERC20 width={"100%"} />
                  <MakerCDP width={"100%"} />
                  <Uniswap />
                  <CompoundFinance width={"100%"} />
                </Grid>
                
              </Grid>
            </WidgetWrapper>
          </ContentWrapper>
    </React.Fragment>
  );
  
}

export default App;

const TopRowWrapper = styled.div`
  display:flex;
  flex-wrap:wrap;
  width:100%;
  align-items:center;
  justify-content:center;
`

const WidgetWrapper = styled.div`
  width:100%;
  display:flex;
  flex-wrap:wrap;
  align-items:flex-start;
  justify-content:flex-start;
  margin-top:25px;
  
`

const ContentWrapper = styled.div`
  flex-grow:1;
  display:flex;
  flex-direction:column;
  position:relative;
  align-items:flex-end;
  justify-content:flex-start;
  padding-left:20px;
  padding-right:20px;
`

const TopNav = (props) => {
  return (
    <TopNavWrapper>
      <AccountWrapper>
        <AccountBox />
      </AccountWrapper>
      <ButtonWrapper>
        <EthPrice/>
      </ButtonWrapper>
    </TopNavWrapper>
  )
}

const TopNavWrapper = styled.div`
    width:100%;
    background-color:#27699F;
    height:50px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin-bottom:25px;
`

const ButtonWrapper = styled.div`
  margin-right:8px;
  width:150px;
  height:40px;
  display:flex;
  align-items:center;
  justify-content:center;
`

const AccountWrapper = styled.div`
`








