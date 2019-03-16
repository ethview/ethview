import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { ethers, utils } from 'ethers';
import styled from 'styled-components'
import CircularProgress from '@material-ui/core/CircularProgress';

import Welcome from './Welcome'
import App from '../components/App'
import { setWeb3, setAccount, setEns } from '../actions'
import { FaTwitter } from 'react-icons/fa'
import  EthViewLogo  from '../images/ethview_logo.png'


const WelcomeOrDashboard = (props) => {

    const [web3Success, setWeb3Success] = useState(false)
    const [addressSuccess, setAddressSuccess] = useState(false)

    const setupWeb3 = async () => {
        //Infura web3
        try {
            let web3 = new ethers.providers.InfuraProvider('mainnet');
            
            props.setWeb3(web3)
            setWeb3Success(true)
        } catch (error) {
            //Show error component / set state here
            
        }
    }

    const processRequest = async () => {
        setupWeb3();
        //query string check for address
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.has('address')) {
            const queryAddress = urlParams.get('address')
            try {
                utils.getAddress(queryAddress);
                props.setAccount(queryAddress);
                setAddressSuccess(true)
                localStorage.setItem('mintoAddress', queryAddress)

                //return without going through localStorage check
                return
            } catch (err) {

            }
        }

            //check if there is a mintoAddress in localstorage and if it is valid.
            let localAddress = localStorage.getItem('mintoAddress');
            let localEns = localStorage.getItem('ensAddress')

            try {
                utils.getAddress(localAddress)
                props.setAccount(localAddress)
                if (localEns !== 'null'){
                    props.setEns(localEns)
                }
                
                setAddressSuccess(true)
            } catch (err) {

            }
        }
    


    useEffect(() => {
        processRequest();
    }, [])

    const onGo = (address,ensAddress) => {
        
        props.setAccount(address)
        setAddressSuccess(true)
        //TBD: if they want the option to save to localStorage, do that here
        localStorage.setItem('mintoAddress',address)   
        if (ensAddress){
            localStorage.setItem('ensAddress',ensAddress)
        }
    }

    return (
        <Wrapper>  
            <AppWrapper>
                {
                    (addressSuccess && web3Success && props.prices.ETH) ?
                    <React.Fragment>
                        <App/>
                        <Footer>
                            <StyledLink href="https://twitter.com/ethview" target="_blank"><Twitter /></StyledLink>Reach out on Twitter!
                        </Footer>
                    </React.Fragment>
                    :
                    (
                        (addressSuccess ?
                        <Loading>
                            <CircularProgress color="primary" />
                        </Loading>
                        :
                        <React.Fragment>
                            <TopColor>
                                <Logo>
                                    <img src={EthViewLogo} height={32} width={32} alt="logo" />
                                </Logo>
                            </TopColor>
                            <WelcomeWrapper>
                                <Welcome onGo={onGo} />
                            </WelcomeWrapper>
                        </React.Fragment>
                        )
                    )  
                }
            </AppWrapper>
            {
                (!addressSuccess && web3Success && props.prices.ETH) && 
                <FixedFooter>
                    <StyledLink href="https://twitter.com/ethview" target="_blank"><Twitter /></StyledLink>Reach out on Twitter!
                </FixedFooter>
            }
        </Wrapper>
    );
}

const mapStateToProps = state => ({
    layout: state.layout,
    erc20Value: state.erc20,
    prices:state.prices
})

const mapDispatchToProps = dispatch => ({
    setWeb3: web3 => dispatch(setWeb3(web3)),
    setAccount: account => dispatch(setAccount(account)),
    setEns: ens => dispatch(setEns(ens))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WelcomeOrDashboard)

const Wrapper = styled.div`
    position:relative;
    height:100vh;
`

const Loading = styled.div`
    width:100%;
    height:calc(100vh - 55px);
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:#F1F2F7;
`

const TopColor = styled.div`
    background-color:#27699F;
    height:300px;
    width:100%;
`

const Logo = styled.div`
    margin: 10px 0px 0px 10px;
`

const WelcomeWrapper = styled.div`
    margin:auto;
    margin-top:-350px;
    max-width:1500px;
    
`

const AppWrapper = styled.div`
  width:100%;
  min-height:calc(100vh - 55px);
  display:flex;
  flex-direction:column;
  position:relative;
`

const Twitter  = styled(FaTwitter)`
    color: #1CA1F2;
    margin-right:12px;
    margin-left:20px;
    font-size:20px;
`

const Footer = styled.div`
    height:30px;
    font-size:14px;
    display:flex;
    align-items:center;
    margin-bottom:5px;
`

const FixedFooter = styled.div`
    position:absolute;
    bottom:0px;
    height:30px;
    font-size:14px;
    display:flex;
    align-items:center;
    margin-bottom:5px;
`

const StyledLink = styled.a`
    text-decoration: none;
    cursor:pointer;
`








