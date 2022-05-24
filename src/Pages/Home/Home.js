import React from 'react';
import Footer from '../../Shared/Footer/Footer';

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

            <Footer></Footer>
        </div>
    );
};

export default Home;