import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';


const Navbar = () => {
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken')
    };
    const myMenuVar = <>
        <li>
            <Link to='/home'>Home</Link>
            <Link to='/blogs'>Blogs</Link>
            <Link to='/portfolio'>My Portfolio</Link>

            {
                user && <Link to='/dashboard'>Dashboard</Link>
            }
            {user ?
                <button onClick={logout} class="btn btn-sm">{user.displayName}</button> :
                <Link to='/login'>Log In</Link>

            }
            <Link to='/signup'>Sign Up</Link>
        </li>

    </>
    return (
        <div>

            <div className="navbar bg-accent  text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabindex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>

                        <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 text-black rounded-box w-52">
                            {myMenuVar}

                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Electronic Tools Manufacturing</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 ">

                        {myMenuVar}


                    </ul>
                </div>
                <div className="navbar-end">
                    <label tabindex="1" for="my-drawer-2" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>

                </div>
            </div>
        </div>
    );
};

export default Navbar;