import React from 'react';
// import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
// import * as IoIcons from 'react-icons/io'
import regulatory from '../../images/regulatory.svg';
import categories from '../../images/categories.svg';
import help from '../../images/help.svg';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icons: <AiIcons.AiOutlineHome />,
    cName: 'nav-text',
  },
  {
    title: 'Categories',
    path: '/categories',
    icons: <img src={categories} style={{ width: '16px', height: '16px' }} />,
    cName: 'nav-text',
  },
  {
    title: 'Regulatory',
    path: '/regulatory',
    icons: <img src={regulatory} style={{ width: '15px', height: '23px' }} />,
    cName: 'nav-text',
  },
  {
    title: 'Non-Regulatory',
    path: '/non_regulatory',
    icons: <img src={regulatory} style={{ width: '15px', height: '23px' }} />,
    cName: 'nav-text',
  },
  {
    title: 'Miscellaneous',
    path: '/miscellaneous',
    icons: <img src={regulatory} style={{ width: '15px', height: '23px' }} />,
    cName: 'nav-text',
  },
  {
    title: 'Users',
    path: '/users',
    icons: <img src={regulatory} style={{ width: '15px', height: '23px' }} />,
    cName: 'nav-text',
  },
  {
    title: 'History',
    path: '/history',
    icons: <img src={regulatory} style={{ width: '15px', height: '23px' }} />,
    cName: 'nav-text',
  },
  {
    title: 'My Profile',
    path: '/myprofile',
    icons: <img src={regulatory} style={{ width: '15px', height: '23px' }} />,
    cName: 'nav-text',
  },
  {
    title: 'Help',
    path: '/help',
    icons: <img src={help} style={{ width: '15px', height: '23px' }} />,
    cName: 'nav-text',
  },
];
