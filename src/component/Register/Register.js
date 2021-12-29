import React from 'react';
import './Register.css'
import img from '../../media/undraw_enter_uhqk.svg'
import { useForm } from 'react-hook-form';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import googleLogo from '../../media/google-logo-png-29546.png'
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import { useNavigate } from 'react-router';

const Register= () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const {createUserWithEmail,signinWithGoogle}=useAuth();

   const  navigate=useNavigate()
    const onSubmit = data => {
        createUserWithEmail(data.name,data.email,data.password,navigate)
        console.log(data)}
    ;
    return (
        <div className="form-container container">
            <div className="form-img">
                <img src={img} alt="" />
            </div>
            <div className="signin-form ">
                <h6 className="mb-5">Welcome to <strong>Healtho</strong></h6>
                <form onSubmit={handleSubmit(onSubmit)}>

                <input className="input " placeholder='name' {...register("name")} />
                     <br />

                    <input className="input " placeholder='email' {...register("email")} />
                     <br />
                  
                    <input className="input" placeholder='password' type='password' {...register("password", { required: true })} />
                     <br />
                    {errors.exampleRequired && <span>This field is required</span>}
<div className='text-center'>
    
                        <input className="signin-button"  type="submit" value='Sign up'  />
</div>
                </form>
                <p className="my-4">-------------------------or---------------------</p>
                <button onClick={signinWithGoogle} className='google-sign'>
                     <img  src={googleLogo} alt="" /> sign in with Google</button>
                     <p>Already have an account? <Link to='/signin'>Sign in</Link></p>
            </div>
        </div>
    );
};

export default Register;