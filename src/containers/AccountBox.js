import React from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components'
import Hidden from '@material-ui/core/Hidden';
import { FaExchangeAlt } from 'react-icons/fa'

import { setAccount } from '../actions/index'

const AccountBox = (props) => {
    const { account,ens } = props;

    const onSwitch = () => {
        localStorage.setItem('mintoAddress',null)
        localStorage.setItem('ensAddress',null)
        //reload without query string
        window.location = window.location.pathname;
    }

    return (
        <AccountWrapper>
            <Hidden smDown>
                <AccountText>
                    {account}
                </AccountText>
                
            </Hidden>
            <Hidden mdUp>
                
                <AccountText>
                    {
                        ens ? 
                        ens
                        :
                        account.slice(0,6) + '...' + account.slice(38,42)
                    }
                    
                </AccountText>
                
            </Hidden>
            <SwitchIcon onClick={onSwitch}>

            </SwitchIcon>
        <Hidden smDown>
            {ens &&
                <EnsText>
                    {'ENS: ' + ens}
                </EnsText>
            }
        </Hidden>
            
        </AccountWrapper>

    );

}

const mapStateToProps = state => ({
    account: state.account,
    ens:state.ens
})

const mapDispatchToProps = dispatch => ({
    setAccount: account => dispatch(setAccount(account))
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AccountBox)

const AccountText = styled.div`
    color: white;
`

const AccountWrapper = styled.div`
    height:30px;
    display:flex;
    align-items:center;
    justify-content:center;
    color:white;
    margin-left:20px;
`

const SwitchIcon = styled(FaExchangeAlt)`
    color:white;
    cursor:pointer;
    margin-left:10px;
`

const EnsText = styled.div`
    color:white;
    margin-left:10px;
`








