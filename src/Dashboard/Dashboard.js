import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../firebase.init';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    // const [admin] = useAdmin(user);
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content ">
                <h1 className='text-green-600 font-bold text-4xl'>Welcome to your Dashboard</h1>
                <Outlet></Outlet>
                {/* <!-- Page content here --> */}


            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>My Orders</Link></li>
                    <li><Link to='/dashboard/reviews'>Add a review</Link></li>
                    <li><Link to='/dashboard/profile'>My Profile</Link></li>
                    <li>  <Link to='/dashboard/users'>All user</Link></li>
                    <li>  <Link to='/dashboard/addproduct'>Add a product</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;