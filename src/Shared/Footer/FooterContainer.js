import React from 'react';

const FooterContainer = () => {
    return (
        <div>
            <div className="flex justify-between px-10">
                <div className="row">



                    <a className="text-decoration-none" href="">My company</a>
                    <br />
                    <a className="text-decoration-none" href="">About</a>
                    <br />
                    <a className="text-decoration-none" href="">Legal</a>
                    <br />
                    <a className="text-decoration-none" href="">Products</a>



                </div>
                <div className="row ">

                    <a className="text-decoration-none" href="">Resources</a>
                    <br />
                    <a className="text-decoration-none" href="">Conditions</a>
                    <br />
                    <a className="text-decoration-none" href="">Products Type</a>
                    <br />
                    <a className="text-decoration-none" href="">Contact us</a>

                </div>
            </div>
        </div>
    );
};

export default FooterContainer;