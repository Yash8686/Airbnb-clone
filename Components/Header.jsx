import React from 'react'
import Image from 'next/Image'
import logo from '../images/airbnblogo.png'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function Header() {
    return (
        <header className = 'z-[100] sticky top-0 px-5 grid grid-cols-3 py-4 shadow-md items-center mobilex:grid-cols-2 bg-white'>
            {/*Left Section*/}
            <div  className = ' relative h-8 flex items-center cursor-pointer justify-center'>
                <Image  src = {logo} objectFit = 'contain' layout = 'fill'  objectPosition = 'left' />
            </div>
            {/*Middle Section*/}
            <div className = 'flex items-center shadow-md border py-2 px-3 rounded-full cursor-pointer justify-self-center flex-shrink mobilex:hidden'>
                <input  className = ' mx-2 rounded-sm flex-grow outline-none' type = 'text' placeholder = 'Start Your Search'></input>
                <SearchIcon style = {{background:'#FF385C'}} className = 'hidden md:inline  text-white rounded-full p-2 text-4xl  '/>
            </div>
            {/*Right Section*/}
            <div className = 'flex space-x-4 items-center justify-end lg:mx-12 sm:mx-0 md:space-x-2 '>
                <h3 className = 'hidden md:inline cursor-pointer' style = {{'color':'rgb(122 113 113)','fontWeight':'500'}}>Become a host</h3>
                <LanguageIcon className = 'cursor-pointer'/>
                <div style = {{'border':'1px solid #DDDDDD'}} className =  'flex items-center rounded-3xl p-2 cursor-pointer'>
                    <MenuIcon className = 'mx-1'/>
                    <AccountCircleIcon style = {{'color':'rgb(122 113 113)'}} className = 'text-3xl'/>
                </div>
            </div>
        </header>
    )
}

export default Header
