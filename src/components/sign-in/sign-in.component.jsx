import { useState } from "react";
import { useDispatch } from "react-redux";

import FormInput from "../form-input/form-input.component";
import './sign-in.style.scss';
import Button  from '../button/button.component';

import { emailSignInStart, googleSignInStart } from "../../store/user/user.action";

const defaultFormField = {
    email: '',
    password: '',
}

const SignInForm = () => {
    const dispatch = useDispatch();
    const [formFields, setFormFields] = useState(defaultFormField);
    const { email, password} = formFields;

    const resetFormField =() => {
        setFormFields(defaultFormField)
    }

    const signInWithGoogle = async () => {
        dispatch(googleSignInStart())
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try{
            dispatch(emailSignInStart(email, password))
            resetFormField();
        }catch(error){
            switch(error.code){
                case 'auth/user-not-found':
                    alert('emal is not correct');
                    break;
                case 'auth/wrong-password':
                    alert('Incorrect Password');
                    break;
                case 'auth/network-request-failed':
                    alert('No internet Connection')
                    break;
                default:
                    console.log(error);
            }
        }
    }

const handleChange = (event) =>{
    const {name, value} = event.target;

    setFormFields({...formFields, [name]: value})
};
    return(
        <div className='col-md-6 col-12 mt-5'>
            <h2>Already have an acount?</h2>
            <span>Sign in with your email</span>
            <form onSubmit={handleSubmit}>
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
                <div className="sign-in-button-container">
                    <Button type="submit">Sign In</Button>
                    <Button type='button' buttonType='google' onClick={signInWithGoogle}>Google Sign In</Button>
                </div>
            </form>
        </div>
    )
}
export default SignInForm;