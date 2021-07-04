// Login Page code
import React from 'react';
import './login.css';
class Login extends React.Component{
    state={
        email:'',
        pwd:''
    }

    handleChange = (e) =>{
        const {name,value} = e.target
        this.setState({[name]:value})
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        this.props.isLogin(true)
    }
    render(){
        return(
            <div className='div-login'>
                <div>
                {/* code for the email and password that will be inputed into the textboxes */}
                    <form onSubmit = {this.handleSubmit}> 
                        <input type='email' name='email' placeholder='email...' required onChange={this.handleChange}/>
                        <input type='password' name='password' placeholder='password...' required onChange={this.handleChange}/>
                        {/* button used to submit the user information */}
                        <button onSubmit={this.handleSubmit}>Log In</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;