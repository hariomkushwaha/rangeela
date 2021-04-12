import React from 'react';
import './signuu.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custombutton/custombutton.component';

class SignUp extends React.Component{
    constructor(props){
        super(props);
        

        this.state ={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }

    handleSubmit = event =>{
        event.preventDefault();
        const {password,confirmPassword}=this.state;
        if(password !== confirmPassword){
            alert("Password don't match");
            return;
        }

        this.setState({email:'',password:'',displayName:'',confirmPassword:''})
    }

    handleChange = event =>{
        const {value,name} =event.target;

        this.setState({[name]:value})
    }

    render(){
        return(
            <div className='sign-up'>
                <h2 className='title'>I do not have account</h2>
                <span>Sign up with email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                <FormInput
                type='text'
                name='displayName'
                value={this.state.displayName}
                onChange={this.handleChange}
                label='Display Name'
                required
            />
            <FormInput
            type='email'
            name='email'
            value={this.state.email}
            onChange={this.handleChange}
            label='Email'
            required
            />

                <FormInput
                type='password'
                name='password'
                value={this.state.password}
                onChange={this.handleChange}
                label='Password'
                required
            />
    
            <FormInput
            type='password'
            name='confirmPassword'
            value={this.state.confirmPassword}
            onChange={this.handleChange}
            label='Confirm Password'
            required
            />
                
                <CustomButton type='submit'>Sign up</CustomButton>
            </form>
            </div>
        )
    }
}


export default SignUp;