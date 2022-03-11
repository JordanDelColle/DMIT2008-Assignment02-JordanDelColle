import React from 'react'

import{IoSettingsOutline} from 'react-icons/io5'
import {AiOutlineNotification, AiOutlineMail} from 'react-icons/ai'
import {FiUser} from 'react-icons/fi'

import {AppBarStyles, AppBarItems, AppBarItem} from './styles'
import {IconButton} from './../../ui/buttons'
function AppBar (props){
    return(
        <AppBarStyles>
            <AppBarItems>
            
                <AppBarItem><img src="https://i.imgur.com/ly9uonB.png" width="50rem" height="50rem"/></AppBarItem>
                <AppBarItem>
                    <IconButton>
                        <AiOutlineMail size="1.25rem" color="white"/>
                    </IconButton>

                    <IconButton>
                        <AiOutlineNotification size="1.25rem" color="white"/>
                    </IconButton>

                    <IconButton>
                        <FiUser size="1.5rem" color="white"/>
                    </IconButton>

                    <IconButton>
                        <IoSettingsOutline size="1.25rem" color="white"/>
                    </IconButton>
                </AppBarItem>
            </AppBarItems>
        </AppBarStyles>
    )
}

export default AppBar