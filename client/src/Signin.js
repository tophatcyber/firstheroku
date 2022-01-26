import React from 'react';
import {Link} from "react-router-dom";
import './auth.css'

import axios from 'axios'

import Home from './Home';


class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        name: '',
      email: '',
      password: '',
      loggedin: false,
     
      
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.usernameChange = this.usernameChange.bind(this);
    this.emailChange = this.emailChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.changeLoggedIn = this.changeLoggedIn.bind(this);
}   
   changeLoggedIn(){
         this.setState({
              loggedin: !this.state.loggedin
         })

         console.log(this.state.loggedin)

   }

 
    handleSubmit(event) {
        event.preventDefault();
        const _this = this
        
        
        const data ={
            name: this.state.name,
            email: this.state.email,
            password: this.state.password

        }
        
        axios.post('/api/login', data)
        .then((res, error)=>{
            if (res.data.message === "Login successfull") {
                _this.changeLoggedIn()
                alert("Signin successfully")
                
                
            } else {
                alert("Signin failed")
                

            }}).catch((err)=>{
            console.log(err)
        }).catch(function (error){
            console.log(error)
        })
        this.resetForm()

        
    }

    usernameChange(event){
        this.setState({
            name: event.target.value
        })
    }

    emailChange(event){
        this.setState({
            email: event.target.value
        })
    }

    passwordChange(event){
        this.setState({
            password: event.target.value
        })
    }

    resetForm(){
        return this.setState({
            name: '',
            email: '',
            password: ''
        })
    }


render(){
  
  
    return(
     <>
     {this.state.loggedin ? <Home /> :    
                <form id="login-form" className='card' onSubmit={this.handleSubmit} method='POST'>
        <h3>Sign In</h3>

        <div className="form-group">
            <label>user name</label>
            <input type="text" name="name" className="form-control" placeholder="Enter username" onChange={this.usernameChange} value={this.state.name} />
        </div>

        <div className="form-group">
            <label>Email address</label>
            <input type="email" name="email" className="form-control" placeholder="Enter email" onChange={this.emailChange} value={this.state.email} />
        </div>

        <div className="form-group">
            <label>Password</label>
            <input type="password" name="password" className="form-control" placeholder="Enter password" onChange={this.passwordChange} value={this.state.password} />
        </div>

        <div className="form-group">
            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
            </div>
        </div>

        <button type="submit" className="btn btn-primary btn-block">Submit</button>
        <p className="forgot-password text-right">
            Forgot <Link to="/">password?</Link>
        </p>
    </form>}
     
     </>
               
           

       
    )
}

}

export default Signin