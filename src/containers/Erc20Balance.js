import React from 'react';
import { connect } from 'react-redux'

const Erc20Balance = (props) => {

    const { erc20Value } = props;
    
    return (
        <div>$ {erc20Value ? erc20Value : '0'}</div>
    );
}

const mapStateToProps = state => ({
    erc20Value: state.erc20
})

export default connect(
    mapStateToProps 
)(Erc20Balance)













