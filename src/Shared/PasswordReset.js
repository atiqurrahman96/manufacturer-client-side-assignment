import React from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../firebase.init';

const PasswordReset = () => {
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
        auth
    );
    const resetPassword = async (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        await sendPasswordResetEmail(email)
        toast('sent email')
        event.target.reset();
    }
    return (
        <form className='text-center py-5' onSubmit={resetPassword}>
            <input className="input input-bordered" type="email" name="email" placeholder='enter your email' id="" />
            <br />
            <input className='btn m-2' type="submit" value="submit" />

        </form>
    );
};

export default PasswordReset;