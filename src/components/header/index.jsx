import React from 'react'
import Logo from '../../assets/Logo.png'

const Header = () => {
    return (
        <div className='px-2 xl:px-10'>
            <div className='my-3'>
                <img src={Logo} alt="Logo" className='' />
            </div>
        </div>
    )
}

export default Header
