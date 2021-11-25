import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBInput, MDBIcon } from 'mdbreact';
const API = require("../../api/main").default;

function CustomerModal(props) {
    const [customer, setCustomer] = useState(props.customer);
    const history = useHistory();

    const toggle = () => {
      return props.setShowModal(!props.showModal);
    }

    const handleChange = (evt) => {
      const { name, value } = evt.currentTarget || evt.target;
      const data = {...customer};
      data[name] = value;
      setCustomer(data);
    }

    const editCustomer = async (evt) => {
        try {
            evt.preventDefault();
            const result = await API.editCustomer(customer, localStorage.getItem('token'));
            if (result) {
              toggle();
              return history.push('/main/customers')
            }
            return console.log("opps try again")
          } catch(err) {
            throw err;
          }
    }

    return (
      <MDBContainer>
        <MDBModal isOpen={props.showModal} centered>
          <MDBModalHeader>Add Customers</MDBModalHeader>
          <MDBModalBody>
            <form>
                <div className="grey-text">
                    <div>
                    <MDBInput label="First Name" icon="user" name="firstName" value={customer.firstName} type="text" onChange={handleChange} validate error="wrong" success="right" />
                    <MDBInput label="Last Name" icon="user" name="lastName" value={customer.lastName} type="email" onChange={handleChange} validate error="wrong"  success="right" />
                    </div>
                    <MDBInput label="Email Address" icon="envelope" name="addressEmail" value={customer.addressEmail} onChange={handleChange} type="email" validate  error="wrong" success="right" />
                    <MDBInput label="Phone Number" icon="phone-alt" name="phoneNumber" value={customer.phoneNumber} onChange={handleChange} type="number" validate  error="wrong" success="right" />
                    <MDBInput label="Age" icon="sort-numeric-up" name="age" value={customer.age}  type="number" onChange={handleChange} validate  error="wrong" success="right" />
                    <div className="md-form">
                      <MDBIcon icon="venus-mars" size="2x"/>
                      <select onChange={handleChange} name="gender" className="browser-default custom-select">
                          <option disabled selected hidden> Gender</option>
                          <option value="female" selected={customer.gender === 'female'}>Female</option>
                          <option value="male" selected={customer.gender === 'male'}>Male</option>
                      </select>
                    </div>
                    <div>
                      <MDBIcon icon="ring" size="2x"/>
                      <select onChange={handleChange} name="martialStatus" className="browser-default custom-select">
                          <option disabled selected hidden>Martial Status</option>
                          <option value="single" selected={customer.martialStatus === 'single'}>Single</option>
                          <option value="married" selected={customer.martialStatus === 'married'}>Married</option>
                          <option value="widowed" selected={customer.martialStatus === 'widowed'}>Widowed</option>
                          <option value="divorced" selected={customer.martialStatus === 'divorced'}>Divorced</option>
                      </select>
                    </div>
                </div>
            </form>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn onClick={() => toggle()}>Close</MDBBtn>
            <MDBBtn onClick={(evt) => editCustomer(evt)}>Save changes</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
}

export default CustomerModal;