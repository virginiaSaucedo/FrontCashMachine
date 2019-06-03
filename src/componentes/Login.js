import React from 'react';
import logo from './img/logo.png';



class Login extends React.Component{
    render(){
        return (
        <div className="container">
            <div className="left">
                    <div className="login"><img src={logo} className="App-logo" alt="logo" /></div>
                    <div className="eula">Faça seu login<br/>ou<br/>
                    <button className="btn-default" id="createAccount">Crie uma conta</button>
                    </div>
                </div>
                
                <div className="right">
                {/* <img src={Line} className="Form-line" alt="line" /> */}
                    <div className="form input-field">
                        <label for="email">Email</label>
                        <input id="email" type="text"/>
                        <label for="password">Password</label>
                        <input type="password" id="password"/>
                        <button className="btn-default" type="submit" id="submit" value="Submit">Entrar</button>
                    </div>
                </div>
            </div>
            );
        }
    }

    export default Login;