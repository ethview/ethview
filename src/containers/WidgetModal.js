import React, { useState } from 'react';
import styled from 'styled-components'
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';

import WidgetModalItems from '../components/WidgetModalItems'
import MakerLogo from '../images/maker_logo.svg'
import CompoundLogo from '../images/compound_logo.jpg'


const WidgetModal = (props) => {

    const widgets = [
        {
            title:"MakerDAO CDPs",
            logo: MakerLogo
        },
        {
            title:"Compound Finance",
            logo: CompoundLogo
        }
    ]

    const { visible, onClose } = props;
    const [searchVal, setSearchVal] = useState(null)
    const [filteredWidgets, setFilteredWidgets] = useState(widgets)


    const handleSearchChange = (e) => {
        setSearchVal(e.target.value)
        setFilteredWidgets(widgets.filter(i => i.title.toLowerCase().includes(e.target.value.toLowerCase())))
    }
    
    return (
        <StyledDialog 
            open={visible} 
            onClose={onClose} 
            aria-labelledby="simple-dialog-title"
            maxWidth="md"
            
        >
            <DialogTitle id="simple-dialog-title">Add Widget</DialogTitle>
            <DialogContent>
            <List>
                <SearchInput 
                    onChange={handleSearchChange}

                />
                <WidgetModalItems
                    widgets={filteredWidgets}
                />
                    
            </List>
            </DialogContent>
        </StyledDialog>

    );

}


export default WidgetModal;

const StyledDialog = styled(({...other}) => (
    <Dialog classes={{ paper: 'paper' }} {...other} />
))`
  & .paper {
      width:50%;
  }
`;

const SearchInput = styled.input`
    width:100%;
    border-radius:5px;
    background-color:#efefef;
    border:none;
    height:30px;
    padding:8px;
    margin-bottom:8px;
    

    &:focus {
        outline:none;
    }
`

const List = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
`






















