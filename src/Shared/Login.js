import React from 'react';
import { FaGoogle } from "react-icons/fa";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import Loading from './Loading';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
const Login = () => {
    // step sign in with google 
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    let signInError;
    if (loading || googleLoading) {
        return <Loading></Loading>
    }
    if (user || googleUser) {
        console.log('user got', user);
    }
    if (error || googleError) {
        signInError = <p>{error?.message || googleError?.message}</p>
    }
    const onSubmit = data => {
        console.log(data)
        signInWithEmailAndPassword(data.email, data.password)

    };
    return (
        <div className='flex h-screen justify-center items-center'>
            <div class="card w-96 bg-base-300  shadow-xl">
                <div class="card-body">
                    <h2 class="text-4xl font-bold text-center text-accent">Log In</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>

                            </label>
                            <input
                                type="email" placeholder="Enter Your Email" class="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Please provide a valid email address'
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.email?.type === 'required' && <span class="label-text-alt text-red-600">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-600">{errors.email.message}</span>}


                            </label>
                            <label class="label">
                                <span class="label-text">password</span>

                            </label>
                            <input
                                type="password" placeholder="Enter Your password" class="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'password is required'
                                    },
                                    minLength: {
                                        value: 8,
                                        message: 'your password must be 8 characters or longer'
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.password?.type === 'required' && <span class="label-text-alt text-red-600">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-600">{errors.password.message}</span>}

                                <p className='text-red-600'>{signInError}</p>
                            </label>

                        </div>

                        <input className='w-full mx-auto btn btn-sm text-white' type="submit" value='log in' />
                        <p className='text-secondary '>New to here?<Link className='m-2' to='/signup'>Create an account</Link></p>
                        <p className='text-red-600'>Forget password?<Link to='/resetpassword'>Reset Password</Link></p>
                    </form>




                    <div class="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} class="btn text-white"><FaGoogle size="2rem" style={{ margin: '5px' }} />Continue with Google</button>

                </div>
            </div>
        </div>
    );
};

export default Login;