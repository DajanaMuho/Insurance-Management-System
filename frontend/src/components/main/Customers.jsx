import Navigatior from "./Navigatior";
import CustomerModal from "./CustomerModal";
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { MDBDataTable, MDBBtn, MDBIcon } from 'mdbreact';
import '../../index.css';
const API = require("../../api/main").default;

function Customers(props) {
    const history = useHistory();
    const [data, setData] = useState({
        columns: [
            {
                label: 'First Name',
                field: 'firstName',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Last Name',
                field: 'lastName',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Email Address',
                field: 'addressEmail',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Phone Number',
                field: 'phoneNumber',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Gender',
                field: 'gender',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Age',
                field: 'age',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Martial Status',
                field: 'martialStatus',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Action',
                field: 'customer',
                sort: 'asc',
                width: 150
            },
        ],
        rows: [] //TODO: read from redis cache
    });
    const [showModal, setShowModal] = useState(false);
    const [selectedCustomer, setSelectedCustomer] = useState({
        firstName: '',
        lastName: '',
        addressEmail: '',
        phoneNumber: '',
        gender: '',
        age: '',
        martialStatus: '',
    });
    const token = localStorage.getItem('token');

    const addCustomers = () => {
        setSelectedCustomer({
            firstName: '',
            lastName: '',
            addressEmail: '',
            phoneNumber: '',
            gender: '',
            age: '',
            martialStatus: '',
        }); //Set a new one for every insert
        return setShowModal(!showModal);
    }
    
    const handleEdit = (evt) => {
        const target = evt.currentTarget || evt.target;
        const customer = data.rows.find(row => row._id === target.id);
        setSelectedCustomer(customer);
      return setShowModal(true);
    }

    const handleDelete = async (evt) => {
        //TODO: Add popup component
        const target = evt.currentTarget || evt.target;
        const response = await API.deleteCustomerById(token, target.id);
        if (response) return history.push('/main/customers');
        alert(response); 
    }

    const fetchCustomers = async () => {
        //TODO: ADd fail catch
        const consumers = await API.getCustomers(token);
        const customerData = {...data};
        consumers.forEach(consumer => {
            consumer['customer'] = <>
                <MDBBtn size="sm" id={consumer._id} onClick={(evt) => handleEdit(evt)}> <MDBIcon icon="pencil-alt"/>  </MDBBtn>  
                <MDBBtn size="sm" id={consumer._id} onClick={(evt) => {handleDelete(evt)}}>  <MDBIcon icon="trash-alt"/>  </MDBBtn>
            </>
        })
        customerData.rows = consumers;
        setData(customerData)
    }

    useEffect (() => {
        fetchCustomers();
    }, [showModal, data, selectedCustomer]);

    return(
        <div>
            <Navigatior customersActive="active" />
            <div className='tableStyle'>
                <MDBBtn onClick={() => { addCustomers() }}> <MDBIcon icon="plus"/> </MDBBtn>
                <MDBDataTable 
                    striped 
                    bordered
                    hover
                    data={data}
                />
            </div>
            {showModal && <CustomerModal customer={selectedCustomer} setShowModal={setShowModal} showModal={showModal}></CustomerModal>}
        </div>
    )
}
export default Customers