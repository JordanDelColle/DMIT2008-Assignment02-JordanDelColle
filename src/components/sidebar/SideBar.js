import React from 'react'

import{FcDvdLogo} from 'react-icons/fc'
import{BsCart3, BsGraphUp} from 'react-icons/bs'
import{BiShoppingBag} from 'react-icons/bi'
import{IoSettingsOutline} from 'react-icons/io5'
import{MdOutlineLocalShipping, MdOutlinePrivacyTip, MdOutlineDashboard, MdOutlineMiscellaneousServices} from 'react-icons/md'
import{VscListSelection, VscListOrdered} from 'react-icons/vsc'
import{SiBigbluebutton} from 'react-icons/si'

import {SideBarStyles, AppBarItems, AppBarItem, AppBarItemGroup, MyLink, SignOutText} from './styles'
import {IconButton} from './../../ui/buttons'

import {Button} from './../../ui/buttons'

import {signOut, SignOut} from 'firebase/auth'
import {auth} from './../../libs/firebase'
import ProductOptions from './ProductOptions'

function SideBar (props){
    function onLogoutRequest(e) {
        signOut(auth)
    }
    return(
        <SideBarStyles>

            <ProductOptions/>
            
        </SideBarStyles>
    )
}

export default SideBar