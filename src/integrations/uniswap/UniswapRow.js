import React from 'react';
import styled from 'styled-components'

const UniswapRow = (props) => {
    const { symbol, value,liquidityTokens,logo } = props;
    return (
        <Row>
            <LeftColumns>
                <img src={logo} height={20} width={20} />
                <LeftRows>
                    <Name>{symbol}</Name>
                    
                </LeftRows>

            </LeftColumns>

            <RightColumns>
                <RightRows>
                    <Name>{'$' + value}</Name>
                    <Amount>{liquidityTokens}</Amount>
                </RightRows>
            </RightColumns>
        </Row>
    )
}

export default UniswapRow;


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
    justify-content:flex-start;
    align-items:center;
`

const LeftRows = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
`

const RightColumns = styled.div`

`

const RightRows = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:flex-end;
`

const Amount = styled.span`
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
