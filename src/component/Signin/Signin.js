import React from 'react';
import './Signin.css'
import img from '../../media/undraw_enter_uhqk.svg'
import { useForm } from 'react-hook-form';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import googleLogo from '../../media/google-logo-png-29546.png'
import githubLogo from '../../media/github-logo.png'
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import { useHistory, useLocation } from 'react-router';

const Signin = () => {
    const {signinWithGoogle, errormsging,signinWithEmail,signinWithGithub}=useAuth()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const location=useLocation()
    const history=useHistory()
    const redirect_uri=location.state?.from.pathname || '/home'
    console.log(redirect_uri)

    const onSubmit = data => {
        signinWithEmail(data.email,data.password,redirect_uri)
    };

    const handleGoogleSignin=()=>{
        signinWithGoogle(redirect_uri,history)
    }

    const handleGithubSignin=()=>{
      signinWithGithub(redirect_uri,history)
    }
    return (
        <div className="form-container  container" >
            <div className="form-img">
                <img src={img} alt="" />
            </div>
            <div className="signin-form ">
                <h6 className="mb-5">Welcome  back  to <strong>Healtho</strong></h6>
                <form onSubmit={handleSubmit(onSubmit)}>
                
                    <input className="input " placeholder='email' {...register("email")} />
                     <br />
                  
                    <input className="input" placeholder='password' type='password' {...register("password", { required: true })} />
                     <br />
                    {errors.exampleRequired && <span>This field is required</span>}
<div className='text-center'>
                           <h5>{errormsging}</h5>
                        <input className="signin-button"  type="submit" value='Sign in'  />
</div>
                </form>
                <p className="my-4">-------------------------or---------------------</p>
                <button onClick={handleGoogleSignin} className='google-sign'>
                     <img  src={googleLogo} alt="" /> sign in with Google</button>
                     <br />

                     <button onClick={handleGithubSignin} className='google-sign'>
                     <img  src={githubLogo} alt="" /> sign in with Github</button>

                     <p>new user? <Link to='/register'>Create Account</Link></p>
            </div>
        </div>
    );
};

export default Signin;