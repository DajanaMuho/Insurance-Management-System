import Navigatior from "./Navigatior"
import React, { useEffect, useState } from 'react';
import { MDBDataTable, MDBBtn, MDBIcon } from 'mdbreact';
import '../../index.css';
import DeviceModal from "./DeviceModal";
import { useHistory } from 'react-router-dom';
const API = require("../../api/main").default;

function Devices(props) {
    const history = useHistory();
    const [data, setData] = useState({
        columns: [
            {
                label: 'Car Age',
                field: 'carAge',
                sort: 'asc',
                width: 150
            },
            {
                label: 'License Plate',
                field: 'licensePlate',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Customer',
                field: 'customerName',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Action',
                field: 'device',
                sort: 'asc',
                width: 150
            },
        ],
        rows: []
    });
    const [showModal, setShowModal] = useState(false);
    const [customers, setCustomers] = useState([]);
    const [selectedDevice, setSelectedDevice] = useState({
        carAge: '',
        licensePlate: '',
        customerId: '',
        customerName: ''
    });
    const token = localStorage.getItem('token');

    const addDevices = () => {
        setSelectedDevice({
            carAge: '',
            licensePlate: '',
            customerId: '',
        }); //Set a new one for every insert
        return setShowModal(!showModal);
    }

    const fetchCustomers = async () => {
        //TODO: ADd fail catch
        const customers = await API.getCustomers(token);
        setCustomers(customers)
    }

    const fetchCustomersById = (id) => {
        return API.getCustomerById(token, id);
    }

    const handleEdit = (evt) => {
        const target = evt.currentTarget || evt.target;
        const device = data.rows.find(row => row._id === target.id);
        setSelectedDevice(device);
      return setShowModal(true);
    }

    const handleDelete = async (evt) => {
        //TODO: Add popup component
        const target = evt.currentTarget || evt.target;
        const response = await API.deleteDeviceById(token, target.id);
        if (response) return history.push('/main/devices');
        alert(response); 
    }

    
    const fetchDevices = async () => {
        //TODO: ADd fail catch
        let devices = await API.getDevices(token);
        devices = devices.map(async (device) => {
            if (device.customerId) {
                const customer = await fetchCustomersById(device.customerId);
                device.customerName = customer.firstName + ' ' + customer.lastName;
            }
            return device;
        })
        const devicesData = {...data};
        devices = await Promise.all(devices);
        devices.forEach(devices => {
            devices['device'] = <>
                <MDBBtn size="sm" id={devices._id} onClick={(evt) => handleEdit(evt)}>  <MDBIcon icon="pencil-alt"/>  </MDBBtn>  
                <MDBBtn size="sm" id={devices._id} onClick={(evt) => {handleDelete(evt)}}>  <MDBIcon icon="trash-alt"/>  </MDBBtn>
            </>
        })
        devicesData.rows = devices
        setData(devicesData);
    }

    useEffect(() => {
        if (showModal === true) fetchCustomers();
        fetchDevices();
    }, [showModal, data, selectedDevice]);

    return(
        <div>
            <Navigatior devicesActive="active" />
            <div className='tableStyle'>
                <MDBBtn onClick={() => { addDevices() }}> <MDBIcon icon="plus"/> </MDBBtn>
                <MDBDataTable 
                    striped 
                    bordered
                    hover
                    data={data}
                />
            </div>
            {showModal && <DeviceModal setShowModal={setShowModal} selectedDevice={selectedDevice} customers={customers} showModal={showModal}></DeviceModal>}
        </div>
    )
}
export default Devices