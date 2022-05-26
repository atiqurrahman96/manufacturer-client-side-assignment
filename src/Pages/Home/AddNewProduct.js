import React, { useEffect, useState } from 'react';
import SingleAddNewProduct from './SingleAddNewProduct';

const AddNewProduct = () => {
    const [AddNewProduct, setAddNewProduct] = useState([]);
    console.log('this is ', AddNewProduct);
    useEffect(() => {
        fetch('http://localhost:5000/single')
            .then(res => res.json())
            .then(data => setAddNewProduct(data))
    }, [])
    return (
        <div>
            <h1 className='text-4xl font-bold text-accent text-center'>Client Reviews : {AddNewProduct.length}</h1>
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5'>
                {
                    AddNewProduct.map(newProduct => <SingleAddNewProduct
                        newProduct={newProduct}
                        kew={newProduct._id}


                    ></SingleAddNewProduct>)
                }
            </div>
        </div>
    );
};

export default AddNewProduct;