import React from 'react';
import Approach from './Approach';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Information from './Information';
import Parts from './Parts';
import Reviews from './Reviews';



const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
            <Information></Information>
            <Approach></Approach>
        </div>
    );
};

export default Home;