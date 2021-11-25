import React, { useState }  from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon } from 'mdbreact';
import '../../index.css';
import { useHistory } from 'react-router-dom';

function Navigator(props) {
  const history = useHistory();
  const [classNames, setClassNames] = useState({
      dashboard: props.dashboardActive || false,
      customers: props.customersActive || false,
      devices: props.devicesActive || false,
      profile: props.profileActive || false
  })

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('selectedCustomer');
  }

  return (
      <div>
          <MDBNavbar className='navbarBackground' dark expand="md" scrolling fixed="top">
            <MDBNavbarBrand href="/">
              <MDBNavLink to="/main/profile" className={classNames.profile} ><MDBIcon className="icon" icon="user" /></MDBNavLink>
            </MDBNavbarBrand>
            <MDBCollapse navbar>
              <MDBNavbarNav left>
                <MDBNavItem className={classNames.dashboard}>
                    <MDBNavLink to="/main/dashboard">Dashboard</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem className={classNames.customers}>
                    <MDBNavLink to="/main/customers">Customers</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem className={classNames.devices}>
                    <MDBNavLink to="/main/devices">Devices</MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
              <MDBNavbarNav right>
                <MDBNavItem>
                  <MDBNavLink to="/auth/login" onClick={() => logout()}><MDBIcon icon="sign-out-alt" /></MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
      </div>
    );
}

export default Navigator