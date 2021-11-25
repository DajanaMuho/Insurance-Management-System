import axios from 'axios';

const BASE_URL =  'http://localhost:5001';
//TODO: ADD LOGSSS

const register = async (insuranceCompany) => {
    try {
        const { data: result}  = await axios({
            method: 'POST', 
            url: BASE_URL + '/register', 
            data: insuranceCompany
        });
        if (result.statusCode === 200) return true;
        return false; 
    } catch (err) {
        throw err;
    }
}

const login = async(authCredentials) => {
    const { data: result} = await axios({
        method: 'POST', 
        url: BASE_URL + '/login', 
        data: authCredentials
    });
    if (result.statusCode === 403 || result.statusCode === 400) return false;
    return result;
}

const getLoggedUser = async(token) => {
    const { data: result} = await axios({
        method: 'GET', 
        url: BASE_URL + '/getLoggedUser',
        headers: {
            "auth-token": token
        }
    });
    if (result.statusCode === 403 || result.statusCode === 400) return false;
    return result;
}

const updateProfile = async(token, insuranceCompany) => {
    const { data: result} = await axios({
        method: 'POST', 
        url: BASE_URL + '/editInsuranceCompany',
        headers: {
            "auth-token": token
        },
        data: insuranceCompany
    });
    if (result.statusCode === 403 || result.statusCode === 400) return false;
    return true;
}

const apis = {
    register,
    login,
    getLoggedUser,
    updateProfile
}
export default apis;