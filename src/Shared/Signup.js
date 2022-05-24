import React from 'react';
import { FaGoogle } from "react-icons/fa";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';
import Loading from './Loading';

const Signup = () => {
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    let signUpError;
    if (loading || googleLoading) {
        return <Loading></Loading>
    }
    if (user || googleUser) {
        console.log('user got', user);
    }

    if (error || googleError) {
        signUpError = <p>{error?.message || googleError?.message}</p>
    }
    const onSubmit = async (data) => {
        console.log(data)

        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name });
        alert('Updated profile');

    };
    return (
        <div className='flex h-screen justify-center items-center'>
            <div class="card w-96 bg-base-300  shadow-xl">
                <div class="card-body">
                    <h2 class="text-4xl font-bold text-center text-accent">Sign Up</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Name</span>

                            </label>
                            <input
                                type="text" placeholder="Enter Your name" class="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'name is required'
                                    },

                                })}
                            />
                            <label class="label">
                                {errors.name?.type === 'required' && <span class="label-text-alt text-red-600">{errors.name.message}</span>}



                            </label>
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


                            </label>


                            <p className='text-red-600'>{signUpError}</p>
                        </div>

                        <input className='w-full mx-auto btn btn-sm text-white' type="submit" value='Sign Up' />
                        <p className='text-secondary '>Already have an account?<Link className='m-2' to='/login'>Log In</Link></p>
                        <p className='text-red-600'>Forget password?</p>
                    </form>

                    <div class="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} class="btn text-white"><FaGoogle size="2rem" style={{ margin: '5px' }} />Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Signup;