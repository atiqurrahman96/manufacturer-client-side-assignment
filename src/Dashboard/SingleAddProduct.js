import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';


const SingleAddProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const imageStorageKey = '45e1e20e99a29a7258ed5285e2902db0';

    const onSubmit = async (data, event) => {
        console.log(data, 'data')
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = (`https://api.imgbb.com/1/upload?key=${imageStorageKey}`)
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const singleProduct = {
                        name: data.name,
                        img: img

                    }
                    // send data to database
                    fetch('http://localhost:5000/singleProduct', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(singleProduct)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('product added successFully')
                                reset();
                            }
                            else {
                                toast.error('Failed add to product')
                            }
                        })

                }

            })
    };


    return (
        <div>
            <h2 className="text-2xl">add a Product</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Your Name</span>

                    </label>
                    <input type="text"
                        placeholder="Enter product name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is required'
                            },

                        })} />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}

                    </label>
                    <label className="label">
                        <span className="label-text">product price</span>

                    </label>


                    <label className="label">
                        <span className="label-text">Photo</span>

                    </label>
                    <input type="file"

                        className="input input-bordered w-full max-w-xs"
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'Image is required'
                            },

                        })} />
                    <label className="label">
                        {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}

                    </label>



                </div>

                <input className='btn w-50' type="submit" value="Add Doctor" />
            </form>
        </div>
    );
};

export default SingleAddProduct;