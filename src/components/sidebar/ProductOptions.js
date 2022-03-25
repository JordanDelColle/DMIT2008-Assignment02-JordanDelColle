import React from 'react';
import { Link } from 'react-router-dom';
import {signOut} from 'firebase/auth'

import {auth} from './../../libs/firebase'

import {ProductOptionsStyles, AppBarItems, AppBarItem, AppBarItemGroup} from './styles'
import {IconButton} from './../../ui/buttons'
import {Button} from './../../ui/buttons'

import{FcDvdLogo} from 'react-icons/fc'
import{BsCart3} from 'react-icons/bs'
import{BiShoppingBag} from 'react-icons/bi'
import{IoSettingsOutline} from 'react-icons/io5'
import{MdOutlineLocalShipping, MdOutlinePrivacyTip, MdOutlineDashboard, MdOutlineMiscellaneousServices} from 'react-icons/md'
import{VscListOrdered} from 'react-icons/vsc'
import{SiBigbluebutton} from 'react-icons/si'
import {IoMdAddCircleOutline} from 'react-icons/io'
import {AiFillEdit} from 'react-icons/ai'

function ProductOptions (props){
    function onLogoutRequest(e) {
        signOut(auth)
    }
    return (
        <>
        <ProductOptionsStyles>
        <AppBarItems>
                <AppBarItemGroup>
                    <Link to="/dashboard" className='proLink'>
                        <AppBarItem className='myAppBarItem'>
                            <IconButton>
                                <MdOutlineDashboard size="1.25rem" color="black"/>
                            </IconButton>
                            Dashboard
                        </AppBarItem>
                    </Link>
                </AppBarItemGroup>
            </AppBarItems>
            <AppBarItems>
                <AppBarItemGroup>
                    <Link to="/dashboard" className='proLink'>
                        <AppBarItem className='myAppBarItem'>
                            <IconButton>
                                <BsCart3 size="1.25rem" color="black"/>
                            </IconButton>
                            Cart
                        </AppBarItem>
                    </Link>
                    <Link to="/dashboard" className='proLink'>
                        <AppBarItem className='myAppBarItem'>
                            <IconButton>
                                <BiShoppingBag size="1.25rem" color="black"/>
                            </IconButton>
                            Orders
                        </AppBarItem>
                    </Link>
                    <Link to="/dashboard" className='proLink'>
                        <AppBarItem className='myAppBarItem'>
                            <IconButton>
                                <IoSettingsOutline size="1.25rem" color="black"/>
                            </IconButton>
                            Settings
                        </AppBarItem>
                    </Link>
                </AppBarItemGroup>
            </AppBarItems>
            <AppBarItems>
                <AppBarItemGroup>
                    <Link to="/dashboard" className='proLink'>
                        <AppBarItem className='myAppBarItem'>
                            <IconButton>
                                <MdOutlineMiscellaneousServices size="1.25rem" color="black"/>
                            </IconButton>
                            All products
                        </AppBarItem>
                    </Link>
                    <Link to="add" className='proLink'>
                        <AppBarItem className='myAppBarItem'>
                            <IconButton>
                                <IoMdAddCircleOutline size="1.25rem" color="black"/>
                            </IconButton>
                            Add product
                        </AppBarItem>
                    </Link>
                    <Link to="edit" className='proLink'>
                        <AppBarItem className='myAppBarItem'>
                            <IconButton>
                                <AiFillEdit size="1.25rem" color="black"/>
                            </IconButton>
                            Edit product
                        </AppBarItem>
                    </Link>
                    <Link to="/dashboard" className='proLink'>
                        <AppBarItem className='myAppBarItem'>
                            <IconButton>
                                <FcDvdLogo size="1.25rem"/>
                            </IconButton>
                            DVD
                        </AppBarItem>
                    </Link>
                    <Link to="/dashboard" className='proLink'>
                        <AppBarItem className='myAppBarItem'>
                            <IconButton>
                                <SiBigbluebutton size="1.25rem" color="#076AE1"/>
                            </IconButton>
                            blu-ray
                        </AppBarItem>
                    </Link>
                    <Link to="/dashboard" className='proLink'>
                        <AppBarItem className='myAppBarItem'>
                            <IconButton>
                                <VscListOrdered size="1.25rem" color="black"/>
                            </IconButton>
                            Best selling
                        </AppBarItem>
                    </Link>
                </AppBarItemGroup>
            </AppBarItems>
            <AppBarItems>
                <AppBarItemGroup>
                    <Link to="/dashboard" className='proLink'>
                        <AppBarItem className='myAppBarItem'>
                            <IconButton>
                                <MdOutlineLocalShipping size="1.25rem" color="black"/>
                            </IconButton>
                            Shipping info
                        </AppBarItem>
                    </Link>
                    <Link to="/dashboard" className='proLink'>
                        <AppBarItem className='myAppBarItem'>
                            <IconButton>
                                <MdOutlinePrivacyTip size="1.25rem" color="black"/>
                            </IconButton>
                            Privacy policy
                        </AppBarItem>
                    </Link>
                </AppBarItemGroup>
            </AppBarItems>
            <Button onClick={onLogoutRequest} className="signOutButton">sign out</Button>
        </ProductOptionsStyles>
        </>
    )
}

export default ProductOptions