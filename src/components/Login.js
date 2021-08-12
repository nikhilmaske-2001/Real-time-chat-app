import React from 'react';
import {FacebookOutlined, GoogleOutlined} from "@ant-design/icons";

const Login = () => {
    return (
        <div id = "login-page">
            <div id="login-card">
                <h2>Welcome to UniChat</h2>
                <div className="login-button google">
                    <GoogleOutlined /> Sign In with Google
                </div>
                <br/> <br/>
                <div className="login-button facebook">
                    <FacebookOutlined/> Sign In with facebook
                </div>
            </div>
        </div>
    )
}

export default Login;
