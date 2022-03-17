import React from 'react'

import{FcDvdLogo} from 'react-icons/fc'
import{BsCart3, BsGraphUp} from 'react-icons/bs'
import{BiShoppingBag} from 'react-icons/bi'
import{IoSettingsOutline} from 'react-icons/io5'
import{MdOutlineLocalShipping, MdOutlinePrivacyTip, MdOutlineDashboard, MdOutlineMiscellaneousServices} from 'react-icons/md'
import{VscListSelection, VscListOrdered} from 'react-icons/vsc'
import{SiBigbluebutton} from 'react-icons/si'

import {AppBarStyles, AppBarItems, AppBarItem, AppBarItemGroup, MyLink, SignOutText} from './styles'
import {IconButton} from './../../ui/buttons'

import {Button} from './../../ui/buttons'

import {signOut, SignOut} from 'firebase/auth'
import {auth} from './../../libs/firebase'

function SideBar (props){
    function onLogoutRequest(e) {
        signOut(auth)
    }
    return(
        <AppBarStyles>
            <AppBarItems>
                <AppBarItemGroup>
                    <MyLink href="/">
                        <AppBarItem className='myAppBarItem'>
                            <IconButton>
                                <MdOutlineDashboard size="1.25rem" color="black"/>
                            </IconButton>
                            Dashboard
                        </AppBarItem>
                    </MyLink>
                </AppBarItemGroup>
            </AppBarItems>

            <AppBarItems>
                <AppBarItemGroup>
                    <MyLink href="/">
                        <AppBarItem className='myAppBarItem'>
                            <IconButton>
                                <BsCart3 size="1.25rem" color="black"/>
                            </IconButton>
                            Cart
                        </AppBarItem>
                    </MyLink>
                    <MyLink href="/">
                        <AppBarItem className='myAppBarItem'>
                            <IconButton>
                                <BiShoppingBag size="1.25rem" color="black"/>
                            </IconButton>
                            Orders
                        </AppBarItem>
                    </MyLink>
                    <MyLink href="/">
                        <AppBarItem className='myAppBarItem'>
                            <IconButton>
                                <IoSettingsOutline size="1.25rem" color="black"/>
                            </IconButton>
                            Settings
                        </AppBarItem>
                    </MyLink>
                </AppBarItemGroup>
            </AppBarItems>

            <AppBarItems>
                <AppBarItemGroup>
                    <MyLink href="/">
                        <AppBarItem className='myAppBarItem'>
                            <IconButton>
                                <MdOutlineMiscellaneousServices size="1.25rem" color="black"/>
                            </IconButton>
                            All products
                        </AppBarItem>
                    </MyLink>
                    <MyLink href="/">
                        <AppBarItem className='myAppBarItem'>
                            <IconButton>
                                <FcDvdLogo size="1.25rem"/>
                            </IconButton>
                            DVD
                        </AppBarItem>
                    </MyLink>
                    <MyLink href="/">
                        <AppBarItem className='myAppBarItem'>
                            <IconButton>
                                <SiBigbluebutton size="1.25rem" color="#076AE1"/>
                            </IconButton>
                            blu-ray
                        </AppBarItem>
                    </MyLink>
                    <MyLink href="/">
                        <AppBarItem className='myAppBarItem'>
                            <IconButton>
                                <VscListSelection size="1.25rem" color="black"/>
                            </IconButton>
                            Genres
                        </AppBarItem>
                    </MyLink>
                    <MyLink href="/">
                        <AppBarItem className='myAppBarItem'>
                            <IconButton>
                                <VscListOrdered size="1.25rem" color="black"/>
                            </IconButton>
                            Best selling
                        </AppBarItem>
                    </MyLink>
                    <MyLink href="/">
                        <AppBarItem className='myAppBarItem'>
                            <IconButton>
                                <BsGraphUp size="1.25rem" color="black"/>
                            </IconButton>
                            Highest rated
                        </AppBarItem>
                    </MyLink>
                </AppBarItemGroup>
            </AppBarItems>

            <AppBarItems>
                <AppBarItemGroup>
                    <MyLink href="/">
                        <AppBarItem className='myAppBarItem'>
                            <IconButton>
                                <MdOutlineLocalShipping size="1.25rem" color="black"/>
                            </IconButton>
                            Shipping info
                        </AppBarItem>
                    </MyLink>
                    <MyLink href="/">
                        <AppBarItem className='myAppBarItem'>
                            <IconButton>
                                <MdOutlinePrivacyTip size="1.25rem" color="black"/>
                            </IconButton>
                            Privacy policy
                        </AppBarItem>
                    </MyLink>
                </AppBarItemGroup>
            </AppBarItems>
            {/* <SignOutText href="/">Sign out</SignOutText> */}
            <Button onClick={onLogoutRequest}>sign out</Button>
        </AppBarStyles>
    )
}

export default SideBar