import axios from 'axios';

const BASE_URL =  'http://localhost:5001';
//TODO: ADD LOGSSS

// CUSTOMER API
const editCustomer = async(customer, token) => {
    const { data: result} = await axios({
        method: 'POST', 
        url: BASE_URL + '/main/editCustomer', 
        data: customer,
        headers: {
            "auth-token": token
        }
    });
    if (result.statusCode === 403) return false;
    return true;
}

const getCustomers = async(token) => {
    const { data: result} = await axios({
        method: 'GET', 
        url: BASE_URL + `/main/getCustomers`, 
        headers: {
            "auth-token": token
        }
    });
    if (result.statusCode === 403) return false;
    return result;
}

const getCustomerById = async(token, id) => {
    const { data: result} = await axios({
        method: 'GET', 
        url: BASE_URL + `/main/getCustomerById?customerId=${id}`, 
        headers: {
            "auth-token": token
        }
    });
    if (result.statusCode === 403) return false;
    return result;
}

const deleteCustomerById = async(token, id) => {
    const { data: result} = await axios({
        method: 'GET', 
        url: BASE_URL + `/main/deleteCustomer?customerId=${id}`, 
        headers: {
            "auth-token": token
        }
    });
    if (result.statusCode === 403) return false;
    return true;
}





//DEVICE API
const editDevice = async(device, token) => {
    const { data: result} = await axios({
        method: 'POST', 
        url: BASE_URL + '/main/editDevice', 
        data: device,
        headers: {
            "auth-token": token
        }
    });
    if (result.statusCode === 403) return false;
    return true;
}

const getDevices = async(token) => {
    const { data: result} = await axios({
        method: 'GET', 
        url: BASE_URL + `/main/getDevices`, 
        headers: {
            "auth-token": token
        }
    });
    if (result.statusCode === 403) return false;
    return result;
}

const deleteDeviceById = async(token, id) => {
    const { data: result} = await axios({
        method: 'GET', 
        url: BASE_URL + `/main/deleteDevice?deviceId=${id}`, 
        headers: {
            "auth-token": token
        }
    });
    if (result.statusCode === 403) return false;
    return true;
}

const getMachineGeneratedData = async(token, customerId) => {
    const { data: result} = await axios({
        method: 'GET', 
        url: BASE_URL + `/main/getMachineGeneratedData?customerId=${customerId}`, 
        headers: {
            "auth-token": token
        }
    });
    if (result.statusCode === 403 || result.statusCode === 103) return [];
    return result;
}

const addMachineGenerateData = async(token) => {
    const { data: result} = await axios({
        method: 'POST', 
        url: BASE_URL + `/main/addMachineGeneratedData`, 
        headers: {
            "auth-token": token
        }
    });
    if (result.statusCode === 403) return false;
    return true;
}

const apis = {
    editCustomer,
    getCustomers,
    editDevice,
    getDevices,
    getCustomerById,
    deleteCustomerById,
    deleteDeviceById,
    getMachineGeneratedData,
    addMachineGenerateData
}
export default apis;