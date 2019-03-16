import React from 'react';
import styled from 'styled-components';
import { FaExternalLinkAlt } from 'react-icons/fa'

const BoxWrapper = (props) => {

    const { height, minHeight, width, minWidth, maxWidth, margin, flexGrow, padding, children, headerTitle, headerLogo, link } = props;

    return (
        <TableCenter
            height={height}
            width={width}
            minWidth={minWidth}
            maxWidth={maxWidth}
            margin={margin}
            flexGrow={flexGrow}
            padding={padding}
            minHeight={minHeight}
        >
        <React.Fragment>
            {headerTitle &&
                <Header>
                    <React.Fragment>
                    <HeaderContent>
                    {
                        headerLogo &&
                        <img 
                            src={headerLogo} 
                            alt={headerTitle}
                            height={30} 
                            width={30} 
                            style={{
                                marginRight:'12px',
                                marginLeft:'12px'
                            }}
                        />
                    }   
                    {headerTitle}
                    </HeaderContent>
                    {link && 
                        <ExternalLink 
                            href={link ? link : "#"}
                            target="_blank"
                        >
                       
                            <FaExternalLinkAlt />
                        
                        </ExternalLink>
                    }
                    </React.Fragment>
                    
                </Header>
            }
            <Content>
                {children}
            </Content>
            
        </React.Fragment>
            
        </TableCenter>

    );
}


export default BoxWrapper;

const TableCenter = styled.div`
    box-shadow: 0px 2px 4px rgba(0,0,0,0.18);
    border-radius:10px;
    height:${props => props.height && props.height};
    min-height:${props => props.minHeight && props.minHeight};
    width: ${props => props.width && props.width};
    min-width:${props => props.minWidth && props.minWidth};
    max-width:${props => props.maxWidth && props.maxWidth};
    margin: ${props => props.margin ? props.margin : 'auto'} ;
    flex-grow:${props => props.flexGrow && props.flexGrow};
    padding:${props => props.padding && props.padding};
    background-color:white;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-start;
    
`

const Header = styled.div`
    width:100%;
    height:40px;
    color:#4f6d8d;
    font-size:16px;
    display:flex;
    align-items:center;
    justify-content:flex-start;
    position:relative;
    height:60px;
    margin-bottom:10px;
`

const HeaderContent = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    font-weight:bold;
    color:black;
    font-size:24px;
`


const Content = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    flex-grow:1;
    width:100%;
    color:gray;
`

const ExternalLink = styled.a`
    position:absolute;
    right:5px;
    cursor:pointer;
    color:lightgray;
`
