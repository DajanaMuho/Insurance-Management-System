import '../../index.css';
import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
const API = require("../../api/index").default;

function Login (props) {
    const [ addressEmail, setAddressEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const history = useHistory();
    
    
    const handleChange = (evt) => {
        const {name, value } = evt.currentTarget || evt.target;
        if (name === 'email') {
            setAddressEmail(value);
        } else {
            setPassword(value);
        }
    }


    const handleLogin = async (evt) => {
        try {
            evt.preventDefault();
            const result = await API.login({ addressEmail, password});
            if (result) {
                localStorage.setItem('token', result);
                return history.push('/main/dashboard')
            }
            alert ("We couldn't login to the system!");
          } catch(err) {
            alert (err.message);
            throw err;
          }
    }

    return (
        <MDBContainer className="containerClass">
        <MDBRow className="rowClass">
            <MDBCol md="6">
                <MDBCard>
                    <MDBCardBody>
                        <form>
                            <p className="h5 text-center mb-4">SIGN IN</p>
                            <div className="grey-text">
                            <MDBInput 
                                label="Address Email" 
                                name="email"
                                icon="envelope"  
                                type="email" 
                                validate 
                                error="wrong"
                                success="right" 
                                value={addressEmail}
                                onChange={handleChange}
                            />
                            <MDBInput 
                                label="Password" 
                                name="password"
                                icon="lock"  
                                type="password" 
                                validate 
                                value={password}
                                onChange={handleChange}
                            />
                            </div>
                            <div className="text-center">
                                <MDBBtn className="btn submit" onClick={handleLogin}>Login</MDBBtn>
                                <div className="p-2">
                                    <a className="p-4" href="/auth/register">Create new account</a>
                                    {/* TODO: To be supported if there were other versions
                                    <a className="p-4" href="/auth/forgotPassword">Forgot Password?</a> */}
                                </div>
                            </div>
                        </form>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>
        </MDBContainer>
    )
}
export default Login;