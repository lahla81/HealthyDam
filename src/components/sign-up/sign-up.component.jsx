import { useState } from "react";
import { useDispatch } from "react-redux";
import { signUpStart } from "../../store/user/user.action";

import FormInput from "../form-input/form-input.component";
import './sign-up.style.scss';
import Button  from '../button/button.component';


const defaultFormField = {
    displayName : '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormField);
    const { displayName, email, password, confirmPassword} = formFields;
    const dispatch = useDispatch();

    const resetFormField =() => {
        setFormFields(defaultFormField)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(password !== confirmPassword){
            alert("Password does not match");
            return;
        }

    try{
        dispatch(signUpStart(email, password, displayName))
            resetFormField();
    }catch(error){
        if (error.code === 'auth/email-already-in-use'){
            alert('This Email is already In Use')
        }else{
            console.log('user creation encountered an error',error);
        }
    }
}

const handleChange = (event) =>{
    const {name, value} = event.target;

    setFormFields({...formFields, [name]: value})
};
    return(
        <div className='col-md-6 col-12 mt-5'>
            <h2>Don't have an acount?</h2>
            <span>Sign up with your email</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    label='Display Name'
                    type='text' 
                    onChange={handleChange} 
                    required 
                    name='displayName' 
                    value={displayName}
                />

                <FormInput 
                    label='Email'
                    onChange={handleChange} 
                    required 
                    name='email' 
                    value={email}
                />
                
                <FormInput 
                    label='Password' 
                    type='password' 
                    onChange={handleChange} 
                    required 
                    name='password' 
                    value={password}
                    />
                
                <FormInput 
                    label='Confirm Password' 
                    type='password' 
                    onChange={handleChange} 
                    required 
                    name='confirmPassword' 
                    value={confirmPassword}
                />

                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    )
}
export default SignUpForm;