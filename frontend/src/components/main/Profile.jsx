import { useState, useEffect } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn } from 'mdbreact';
import Navigatior from "./Navigatior";
import '../../index.css';
import { useHistory } from 'react-router-dom';
const API = require("../../api/index").default;

function Profile(props) {
    const [insuranceCompany, setInsuranceCompany] = useState({});
    const history = useHistory();

    const getLoggedUser = async () => {
        const result = await API.getLoggedUser(localStorage.getItem('token'));
        setInsuranceCompany(result);
    }

    const handleEdit = async(evt) => {
      try {
        evt.preventDefault();
        const result = await API.updateProfile(localStorage.getItem('token'), insuranceCompany);
        if (result) return history.push('/main/profile');
        alert ("We couldn't edit your profile!");
      } catch(err) {
        alert (err.message)
        throw err;
      }
    }

    const handleOnChange = event => {
        const { name, value } = event.currentTarget || event.target;
        const data = {...insuranceCompany};
        data[name] = value;
        setInsuranceCompany(data);
    };
    useEffect (() => {
        getLoggedUser();
    }, []);

    return(
        <MDBContainer className="containerClass">
            <Navigatior profileActive="active" />
        <MDBRow className="rowClass">
          <MDBCol md="6">
            <MDBCard>
              <MDBCardBody>
                <form>
                  <p className="h5 text-center py-4"> Update Your Profile </p>
                  <div className="grey-text">
                    <MDBInput  label="Name" name="name" icon="user" type="text" validate error="wrong" success="right" value={insuranceCompany.name} onChange={handleOnChange} />
                    <MDBInput label="Location" name="location" icon="map-marker-alt" type="text" validate error="wrong" success="right" value={insuranceCompany.location} onChange={handleOnChange}/>
                    <MDBInput label="Business License Number" name="licenseNumber" icon="id-card"  type="text" validate error="wrong" success="right" value={insuranceCompany.licenseNumber} onChange={handleOnChange}/>
                    <MDBInput label="Address Email" name="addressEmail" icon="envelope" type="email"validate error="wrong" success="right" value={insuranceCompany.addressEmail} onChange={handleOnChange} />
                    <MDBInput disabled label="Password" name="password" icon="lock"  type="password" validate value={insuranceCompany.password}  onChange={handleOnChange}/>
                  </div>
                  <div className="text-center py-4 mt-3">
                    <MDBBtn className="btn submit" type="submit" onClick={(evt) => handleEdit(evt)}>Update</MDBBtn>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        </MDBContainer>
    )
}
export default Profile;