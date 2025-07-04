import React from 'react'
import Logo from '../../assets/logo.svg'

const Header = () => {
    return (
        <div className='px-2'>
            <div className='my-3'>
                <img src={Logo} alt="Logo" className='' />
            </div>
        </div>
    )
}

export default Header
