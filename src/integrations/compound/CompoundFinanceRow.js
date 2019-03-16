import React, {  } from 'react';

import styled from 'styled-components'

const CompoundFinanceRow = (props) => {
    const { supply, borrow, logo, ticker, name } = props;
    return (
        <Row>
            
            <LeftColumns>
                <img src={logo} alt={ticker} height={20} width={20} />
                <LeftColumnTwo>
                    <Name>{name}</Name>
                    <Ticker>{ticker}</Ticker>
                </LeftColumnTwo>

            </LeftColumns>
            <RightColumns>
                <SupplySpan>
                    {supply}
                </SupplySpan>
                <DividerSpan>
                    /
                </DividerSpan>
                <BorrowSpan>
                    {borrow}
                </BorrowSpan>
            </RightColumns>
        </Row>
    )
}

const Row = styled.div`
    height:50px;
    width:calc(100% - 20px);
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:10px;
`

const LeftColumns = styled.div`
    display:flex;
    justify-content:center;
    align-items:flex-start;
`

const LeftColumnTwo = styled.div`
display:flex;
    flex-direction:column;
`

const RightColumns = styled.div`

`

const Ticker = styled.span`
    margin-left:10px;
    color:lightgray;
`

const Name = styled.span`
    margin-left:10px;
`

const BorrowSpan = styled.span`
    color:#f96464;
    margin-left:5px;
`

const SupplySpan = styled.span`
    color:#5cd05c;
    margin-right:5px;
`

const DividerSpan = styled.span`
    color:lightgray;
`
export default CompoundFinanceRow;