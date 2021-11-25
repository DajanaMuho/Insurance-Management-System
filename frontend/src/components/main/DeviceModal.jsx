import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBInput, MDBIcon } from 'mdbreact';
const API = require("../../api/main").default;

function DeviceModal(props) {
    const [selectedDevice, setSelectedDevice] = useState(props.selectedDevice);
    const history = useHistory();

    const toggle = () => {
      return props.setShowModal(!props.showModal);
    }

    const handleChange = (evt) => {
      const { name, value } = evt.currentTarget || evt.target;
      const data = {...selectedDevice};
      data[name] = value;
      setSelectedDevice(data);
    }

    const editDevice = async (evt) => {
        try {
            evt.preventDefault();
            const result = await API.editDevice(selectedDevice, localStorage.getItem('token'));
            if (result) {
              toggle();
              return history.push('/main/devices')
            }
            return console.log("opps try again")
          } catch(err) {
            throw err;
          }
    }

    return (
      <MDBContainer>
        <MDBModal isOpen={props.showModal} centered>
          <MDBModalHeader>Add Devices</MDBModalHeader>
          <MDBModalBody>
            <form>
                <div className="grey-text">
                    <MDBInput label="Car Age" icon="sort-numeric-up" name="carAge" value={selectedDevice.carAge} type="number" onChange={handleChange} validate error="wrong" success="right" />
                    <MDBInput label="License Plate" icon="car" name="licensePlate" value={selectedDevice.licensePlate} type="email" onChange={handleChange} validate error="wrong"  success="right" />
                    <div>
                      <MDBIcon icon="user" size="2x"/>
                      <select onChange={handleChange} name="customerId" className="browser-default custom-select">
                      <option disabled selected hidden>Customer</option>
                          {props.customers.map((customer)=> {
                            return (<option selected={customer._id === selectedDevice.customerId} value={customer._id}> {customer.firstName + "  " + customer.lastName} </option>)
                          })}
                      </select>
                      </div>
                </div>
            </form>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={() => toggle()}>Close</MDBBtn>
            <MDBBtn color="primary" onClick={(evt) => editDevice(evt)}>Save changes</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
}

export default DeviceModal;