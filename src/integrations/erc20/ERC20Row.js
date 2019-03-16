import React from 'react';
import styled from 'styled-components'

const ERC20Row = (props) => {
    const { name, symbol, image, price, balance, value } = props;
    return (
        <Row>
            <LeftColumns>
                <img src={image} height={20} width={20} />
                <LeftRows>
                    <Name>{symbol}</Name>
                    <Amount>{balance}</Amount>
                </LeftRows>

            </LeftColumns>

            <RightColumns>
                <RightRows>
                    <Name>{'$' + value}</Name>
                    <Amount>{'@' + price}</Amount>
                </RightRows>
            </RightColumns>
        </Row>
    )
}

export default ERC20Row;


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
