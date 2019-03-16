import React from 'react';
import styled from 'styled-components'

const TopRowMetric = (props) => {
    const { children,title } = props;

    return (
        <Wrapper>
            <Header>{title}</Header>
            <InnerWrapper>
            {children}
            </InnerWrapper>
        </Wrapper>
    );
}

export default TopRowMetric

const Wrapper = styled.div`
    width:25%;
    min-width:235px;
    height:75px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    margin:15px;
    background-color:white;
    box-shadow: 0px 2px 4px rgba(0,0,0,0.18);
    border-radius:10px;
    padding:12px;
`
const Header = styled.div`
    color:rgb(108, 107, 128);
    font-size:16px;
    font-weight:400;
    margin-bottom:10px;
`

const InnerWrapper = styled.div`
    height:100px;
    display:flex;
    font-size:26px;
    line-height:27px;
    font-weight:700;
    color:black;
`








