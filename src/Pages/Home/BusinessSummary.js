import React from 'react';
import { FaAdversal } from "react-icons/fa";
const BusinessSummary = () => {
    return (
        <div>
            <div className="divider p-5"></div>
            <h1 className='text-4xl font-bold text-accent text-center'> Business Summary</h1>
            <p className='uppercase text-xl font-bold text-center'>why will you trust us!!</p>
            <div className="divider p-5"></div>
            {/* sat using from daisu ui */}
            <div className="stats stats-vertical lg:stats-horizontal shadow w-full ">

                <div className="stat">
                    <div className="stat-title font-bold text-secondary">Served Customers</div>
                    <div className="stat-value text-primary">31K+</div>
                    <div className="stat-desc font-bold text-orange-500">Jan 1st - May-26</div>
                </div>
                <div className="stat">
                    <div className="stat-title font-bold text-secondary">Annual Revenue</div>
                    <div className="stat-value text-success">2M</div>
                    <div className="stat-desc font-bold text-orange-500">Jan 1st - May 1st</div>
                </div>

                <div className="stat">
                    <div className="stat-title font-bold text-secondary">New Customers</div>
                    <div className="stat-value text-info">4,200</div>

                </div>

                <div className="stat">
                    <div className="stat-title font-bold text-secondary ">supply completed</div>
                    <div className="stat-value text-success">1,200+</div>
                    <div className="stat-desc font-bold text-orange-500">↘︎ 90 (14%)</div>
                </div>

            </div>

        </div>
    );
};

export default BusinessSummary;