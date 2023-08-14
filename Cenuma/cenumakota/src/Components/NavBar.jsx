import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const handleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
    };
    
    return (
        <nav className='navi'>
            <Link className='logoname' to='/'>
                <img className='logo' src="https://www.logolynx.com/images/logolynx/f4/f40d4ad97b9cb450abc35af8e7359f40.png" alt='' />
                <h2 className='heading'>cenuma.</h2>
            </Link>
                <ul className={isMenuVisible ? 'showmenu' : 'hidemenu'}>
                    <li><Link to='/'>HOME</Link></li>
                </ul>
            <div className='ham' onClick={handleMenu}>
                <GiHamburgerMenu />
            </div>
        </nav>
    );
}

export default NavBar;
