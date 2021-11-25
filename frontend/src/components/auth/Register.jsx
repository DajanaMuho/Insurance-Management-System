import '../../index.css';
import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
const API = require("../../api/index").default;

function Register(props) {
    const [insuranceCompany, setInsuranceCompany] = useState({
      name: '',
      addressEmail: '',
      location: '',
      licenseNumber: '',
      password: ''
    })
    const history = useHistory();

    const handleOnChange = event => {
      const { name, value } = event.currentTarget || event.target;
      const data = {...insuranceCompany};
      data[name] = value;
      setInsuranceCompany(data);
    };

    const handleRegister = async (evt) => {
      try {
        evt.preventDefault();
        const result = await API.register(insuranceCompany);
        if (result) return history.push('/auth/login')
        alert ("We couldn't register to the system!");
      } catch(err) {
        alert (err.message)
        throw err;
      }
    }; 

    return (
        <MDBContainer className="containerClass">
        <MDBRow  className="rowClass">
          <MDBCol md="6">
            <MDBCard>
              <MDBCardBody>
                <form onSubmit={handleRegister}>
                  <p className="h5 text-center py-4">SIGN UP</p>
                  <div className="grey-text">
                    <MDBInput
                      label="Name"
                      name="name"
                      icon="user"
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                      value={insuranceCompany.name}
                      onChange={handleOnChange}
                    />
                    <MDBInput
                      label="Location"
                      name="location"
                      icon="map-marker-alt"
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                      value={insuranceCompany.location}
                      onChange={handleOnChange}
                    />
                    <MDBInput
                      label="Business License Number"
                      name="licenseNumber"
                      icon="id-card"
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                      value={insuranceCompany.licenseNumber}
                      onChange={handleOnChange}
                    />
                    <MDBInput
                      label="Address Email"
                      name="addressEmail"
                      icon="envelope"
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                      value={insuranceCompany.addressEmail}
                      onChange={handleOnChange}
                    />
                    <MDBInput
                      label="Password"
                      name="password"
                      icon="lock"
                      type="password"
                      validate
                      value={insuranceCompany.password}
                      onChange={handleOnChange}
                    />
                  </div>
                  <div className="text-center">
                    <MDBBtn className="btn submit" type="submit"> REGISTER </MDBBtn>
                    <div className="p-2">
                      <p> Already have an account? <a href="/auth/login">Login</a> </p>
                    </div>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
}

export default Register;