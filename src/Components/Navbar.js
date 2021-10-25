import React, { useState, useEffect } from 'react';
import { MyButton } from './Button';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const[button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
          setButton(false);
        } else {
          setButton(true);
        }
      };
 
    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className = "navbar">
                <div className = "navbar-container">
                    <Link to="/" className="navbar-logo">
                        
                        Disconnect <img className = "logo" src= "./images/disconnect_logo.PNG" />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className = 'nav-links' onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contact-us' className = 'nav-links' onClick={closeMobileMenu}>
                                Contact us
                            </Link>
                        </li>
                    
                    </ul>
                    {button && <MyButton buttonStyle='btn--outline'>SIGN IN</MyButton>}
                    <Button as={Link} to='/register'>SIGN UP</Button>
                    <Button as={Link} to='/devices'>DEVICES</Button>
                </div>
            </nav>
        </>
    );
}

export default Navbar
