import React, { useState, memo } from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './NavBar.css';
import { IconContext } from 'react-icons';
import logo from '../../images/logo.svg';
import navImage from './Image/navImage.png';
import Button from '@material-ui/core/Button';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import { getUserLogout } from 'containers/LoginPage/actions';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import { Redirect, useHistory } from 'react-router-dom';
import reducer from './reducer';
import saga from './saga';
const key = 'navReducer';

export function NavBar({ getUserLogout }) {

  const history = useHistory();
  
  const routeChange = () =>{ 
    let path = `/myprofile`; 
    history.push(path);
  }

  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const userLogout = () => {

    console.log("Logging out", getUserLogout)
    getUserLogout();
  }
  return (
    <>
      <IconContext.Provider value={{ color: '#F66B6B' }}>
        <div className="navbar w-full font-sans">
       
          {/* <Link to="#" className='menu-bars'> */}
          {/* <p onClick={showSidebar} >
                    </p> */}
          {/* <img src={logo} style={{ width: '180px', height: '60px' }} />
                    </Link> */}
          <p style={{ float: 'right' }}>Notification icon at corner</p>
        </div>
        <nav style={{}} className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          {/* <div className='nav-menu-items '>
                        <Link to="#" >
                            <img src={logo} style={{ width: '180px', height: '60px' }} />
                        </Link>
                    </div> */}
                     
          <ul className="nav-menu-items font-sans ">
            <li className="navbar-toggle font-sans mb-6 mt-10">
              <Link to="#" className="menu-bars font-sans">
                <img src={logo} style={{ width: '180px', height: '60px' }} />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link className="font-sans" to={item.path}>
                    {item.icons}
                    <span className="font-sans">{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* <div className='mt-12  flex justify-end' style={{float: "right"}}>
        <div>
          <NotificationsNoneIcon />
          </div></div> */}

          <div
            className="fixed font-sans "
            style={{
              // top: '425px',
              height: '220px',
              width: '240px',
              // right: '13px',
              backgroundColor: '#EDEDF3',
              bottom: '0',
              left: '0'
            }}
          >
            <img src={navImage} />


            <div className=" absolute -mt-48 bg-white rounded-full w-36  h-12 font-sans " style={{ marginLeft: '10px', alignSelf: 'center', alignContent: 'center', justifyItems: 'center' }}>
              <div className='flex'>
                <div className=' mt-3 h-[30px] w-[30px] ml-3 bg-[#132B6B]' style={{ borderRadius: '40px' }}
                 onClick={routeChange}>
                  <p className='text-white ml-[6px] mt-[7px] font-sans'>
                    RK
                  </p>

                </div>
                <Button className=' font-sans ' style={{ color: '#132B6B', alignContent: 'center', justifyItems: 'center' }}  
                onClick={routeChange}>
                  <p className='font-sans font-normal text-sm -ml-4 ' style={{ marginTop: '5px', }}>My Profile</p>
                </Button>
              </div>
              <div className='-mt-10 rounded-full h-[45px] w-[49px] ml-44 bg-[#fff]'>
                <PowerSettingsNewIcon className='mt-2 ml-3' onClick={() => userLogout()} />
              </div>
              <div className=' font-sans '>

                <p className='font-sans font-semibold text-sm ml-2  mt-1' style={{ color: '#fff' }}>© minemagma 2020.
                  <br />
                  <span className='font-sans font-normal ' style={{ color: '#fff' }}> All Rights Reserved</span>
                </p>

              </div>
            </div>
          </div>

        </nav>
      </IconContext.Provider>
    </>
  );
};

NavBar.propTypes = {
  // otp: PropTypes.string,
  getUserLogout: PropTypes.func,
};

const mapStateToProps = state => ({
  // otp: state.loginReducer.otp
});

export function mapDispatchToProps(dispatch) {
  return {
    getUserLogout: () => dispatch(getUserLogout())
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(NavBar);
