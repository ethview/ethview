import React from 'react';
import styled from 'styled-components'

const WidgetModalItems = (props) => {

    const { widgets } = props;

    return (
        <React.Fragment>
            {widgets.map(widget => (
                <ListItem key={widget.title}>
                    <ListItemImage 
                    src={widget.logo} 
                    height={30}
                    width={30}
                    />
                    <ListItemText>
                        {widget.title}
                    </ListItemText>
                </ListItem>
            ))
            }
        </React.Fragment>        
    );
}

export default WidgetModalItems;

const ListItem = styled.div`
    display:flex;
    align-items:center;
    justify-content:flex-start;
    width:100%;
    height:50px;
    border-radius:5px;
    cursor:pointer;
    padding:8px;

    &:hover {
        background-color:#efefef;
    }
`

const ListItemImage = styled.img`
    margin-left:8px;
`

const ListItemText = styled.div`
    margin-left:8px;
`





















