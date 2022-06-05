import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './NavBar.css';
import { IconContext } from 'react-icons';
import logo from '../../images/logo.svg';

export const NavBar = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    return (
        <>
            <IconContext.Provider value={{ color: '#F66B6B' }}>

                <div className='navbar w-full'>
                    {/* <Link to="#" className='menu-bars'> */}
                    {/* <p onClick={showSidebar} >

                    </p> */}
                    {/* <img src={logo} style={{ width: '180px', height: '60px' }} />
                    </Link> */}
                    <p style={{float:'right'}}>Notification icon at corner</p>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    {/* <div className='nav-menu-items '>
                        <Link to="#" >
                            <img src={logo} style={{ width: '180px', height: '60px' }} />
                        </Link>
                    </div> */}
                    <ul className="nav-menu-items ">
                        <li className='navbar-toggle'>
                            <Link to="#" className='menu-bars'>
                                <img src={logo} style={{ width: '180px', height: '60px' }} />
                            </Link>
                        </li>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icons}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>

                </nav>
            </IconContext.Provider>
        </>
    )
}
