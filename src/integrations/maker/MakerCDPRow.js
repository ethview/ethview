import React, {  useEffect} from 'react';

import styled from 'styled-components'
import { FaCircle } from 'react-icons/fa'


const MakerCDPRow = (props) => {
    const { id, lad, art, ink, ratio, liquidationPrice, safety, percentToFall } = props.cdp;
    //To do: Add liquidation price

    return (
        <Row>
            <LeftColumns>
                <Circle safety={safety}/>
                <LeftBlock>
                <Id>
                    <b>{id}</b>
                </Id><br/>
                <Art>
                    <b>{art + ' DAI'}</b>{" in debt"}
                </Art><br />
                <Ink>
                        <b>{ink.slice(0, 6) + " PETH"}</b>{" in collateral"}
                </Ink><br />
                <LiquidationPrice>
                        liquidated at <b>{liquidationPrice === "Infinity" ? '∞' : '$' + liquidationPrice}</b>
                </LiquidationPrice><br/>
                {/* <PercentToFall>
                        your safety net is <b>{percentToFall.toString() + '%'} </b>
                </PercentToFall> */}
                </LeftBlock>
            </LeftColumns>
            <Ratio ratio={ratio}>
                <b>{(ratio ? ratio.slice(0, 6) : 0) + "%"}</b>
            </Ratio>

        </Row>
    )
}

export default MakerCDPRow;

const Row = styled.div`
    height:50px;
    width:calc(100% - 20px);
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:10px;
    margin-bottom:30px;
`

const LeftColumns = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:flex-start;
    
`

const LeftBlock = styled.div`
line-height:1.25
`


const Circle = styled(FaCircle)`
    color: ${props => props.safety ? '#45B666' : '#DD9B4E'}
    margin-right:10px;
    font-size:12px;
`

const Id = styled.span`
    color:#bebebe;
    line-height:1.5;
`

const Art = styled.span`
line-height:1.25
`

const Ink = styled.span`
line-height:1.25
`

const Ratio = styled.span`
    color: ${props => (parseFloat(props.ratio) > 200 || props.ratio === null)? '#45B666' : '#DD9B4E' }
    line-height:1.25
`

const PercentToFall = styled.span`
line-height:1.25

`

const LiquidationPrice = styled.span`
line-height:1.25
`