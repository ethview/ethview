import React, { useState } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { utils } from 'ethers'

import { setAccount, setEns } from '../actions/index'

const Welcome = (props) => {
    const { onGo,web3,setEns } = props;

    const [address,setAddress] = useState('')
    const [addressForGo,setAddressForGo] = useState(null)
    const [ensAddress,setEnsAddress] = useState(null)
    const [textError, setTextError] = useState(false)
    const [validAddress,setValidAddress] = useState(false)

    const handleInput = (e) => {
        let val = e.target.value.replace(/\s/g, '');
        setAddress(val)
        setAddressForGo(val)
        
        try { 
            utils.getAddress(val)
            setTextError(false)
            setValidAddress(true)
        } catch (err){
            setValidAddress(false)
        } 
    }

    const onBlur = async () => {

        //check ens resolution
        let ensAddress = await web3.resolveName(address);
        console.log("ens resolution",ensAddress);
        
        if(ensAddress !== null && address.includes('.eth')){
            setAddressForGo(ensAddress)
            setEns(address)
            setEnsAddress(address)
            setTextError(false)
            setValidAddress(true)
            return
        }
        try {
            utils.getAddress(address)
            setTextError(false)
            setValidAddress(true)
        } catch (err) {
            setTextError(true)
            setValidAddress(false)
        } 
    }

    const handleGo = () => {
        onGo(addressForGo,ensAddress)
    }

    return (
        <Wrapper>
            <WelcomeHeader>
                EthView
            </WelcomeHeader>
            <WelcomeText>
                Enter your Ethereum Address or ENS domain below to access the dashboard. <br /> <br />
                <WelcomeTextSub>
                    You can also go directly to the dashboard by adding an address parameter to the query string, like "https://ethview.app?address=YOUR_ADDRESS_HERE"
                </WelcomeTextSub>
                <br/><br/>
            </WelcomeText>
            <TextField 
                label="Enter Address or ENS Domain" 
                value={address} 
                onChange={handleInput}
                name="Address"
                autoFocus={true}
                variant="outlined"
                onBlur={onBlur}
                fullWidth
                
            />
            <FieldText>
            {
                textError ?
                <ErrorText>Invalid Address</ErrorText>
                :
                ((validAddress) ? <SuccessText>Valid Address</SuccessText> : null)
            }
            </FieldText>
            <ButtonWrapper>
            <Button 
                variant="contained" 
                color="primary"
                size={"large"} 
                onClick={handleGo}
                disabled={!validAddress}
            >
                Go to Dashboard
            </Button>
            </ButtonWrapper>
            
        </Wrapper>
    )
}
const mapStateToProps = state => ({
    web3: state.web3
})

const mapDispatchToProps = dispatch => ({
    setAccount: account => dispatch(setAccount(account)),
    setEns: ens => dispatch(setEns(ens))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Welcome)



const Wrapper = styled.div`
    width:80%;
    background-color:white;
    border-radius:5px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.15), 0 3px 6px rgba(0,0,0,0.10);
    margin:auto;
    height:75vh;
    max-height:600px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-start;
    padding:10px 20px 10px 20px;
    margin-top:15vh
`

const WelcomeHeader = styled.div`
    font-size:36px;
    margin-bottom:10px; 
    color:#313131;
    font-weight:bold; 
`

const WelcomeText = styled.div`
    font-size:18px;
    margin-bottom:15px;
    text-align:center;
`

const WelcomeTextSub = styled.span`
    font-size:16px;
    margin-bottom:15px;
    text-align:center;
    color:#ababab
`

const FieldText = styled.div`
    height:30px;
    margin-top:10px;
`

const ErrorText = styled.span`
    color:#DA3337;
    
`

const SuccessText = styled.span`
    color:green;
    
`

const ButtonWrapper = styled.div`
    margin: 25px 0px 0px 0px;
`