import React from 'react';
import { FaGoogle } from "react-icons/fa";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import Loading from './Loading';
const Login = () => {
    // step sign in with google 
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if (loading) {
        return <Loading></Loading>
    }
    if (user) {
        console.log('user got', user);
    }
    return (
        <div className='flex h-screen justify-center items-center'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-2xl font-bold text-center">Log In</h2>
                    <div class="divider">OR</div>
                    <button class="btn text-white"><FaGoogle size="2rem" style={{ margin: '5px' }} />Continue with Google</button>

                </div>
            </div>
        </div>
    );
};

export default Login;