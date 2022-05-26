import React from 'react';

const Blogs = () => {
    return (
        <div className='p-5'>
            <div>
                <h1 className='text-2xl font-bold'>1 . How will you improve the performance of a React Application?</h1>
                <p>we can improve our react performance by following some steps.they are given below:</p>
                <li>Keeping component state local where necessary.</li>
                <li>Memoizing React components to prevent unnecessary re-render</li>
                <li>Windowing or list virtualization in React.</li>
                <li>Lazy loading images in React.</li>

            </div>
            <div>
                <h1 className='text-2xl font-bold'>2 . What are the different ways to manage a state in a React application ?</h1>
                <p>Some ways we have by which we can a state in a react application. some of major types are given below</p>
                <li>Local state.</li>
                <li>Global state.</li>
                <li>Server state.</li>
                <li>URL state.</li>
            </div>
            <div>
                <h1 className='text-2xl font-bold'>3 . How does prototypical inheritance work?</h1>
                <p>Very simply, we can see that prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype </p>
            </div>
            <div>
                <h1 className='text-2xl font-bold'>4 . Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts?</h1>
                <p>I think here product as a variable here on the other hand 'setProduct' works as a function . when we call this function and put information or parameter and this information set in variable. whereas , we can not call variable like function that is why , we use setProducts instead of products. </p>
            </div>
            <div>
                <h1 className='text-2xl font-bold'>5. What is a unit test? Why should write unit tests?</h1>
                <p>Unit test: This is a type of testing which is done by software developers in which the smallest testable module of an application - like functions, procedures or interfaces - are tested to ascertain if they are fit to use.</p>
                <p>Developers write unit tests for their code to make sure that the code works correctly. This helps to detect and protect against bugs in the future. Sometimes developers write unit tests first, then write the code. This approach is also known as test-driven development (TDD).For this reason, we should write unit test</p>
            </div>
        </div>
    );
};

export default Blogs;