import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div>
            <Navbar />
            <div className="signup-page text-center">
                <h1 className='text-align-right pt-4 text-dark'><strong>Create New Account or Sign In</strong></h1>
                <hr/>
                <div className="d-flex justify-content-center">
                    <div className="add-event-form mx-4 my-4 bg-light">
                        <div className="mx-4 my-4 bg-light">
                            <form className="form-control p-4" method='POST' action="http://localhost:5000/api/auth/createuser" encType='multipart/form-data' >
                                <div className='form-control mr-2 mt-2 mb-4'>
                                    <label htmlFor="profilePhoto" className='text-muted'>Upload profile photo<br /> </label>
                                    <br />
                                    <br />
                                    <input type="file" name='profilePhoto' />
                                </div>
                                <input type="text" className="form-control mr-2 my-2" placeholder="Full Name" name='name' />
                                <input type="email" className="form-control mr-2 my-2" placeholder="Your Email" name='email' />
                                <input type="text" className="form-control mr-2 my-2" placeholder="Your age" name='age' />
                                <input type="password" className="form-control mr-2 my-2" placeholder="Set a strong password" name='password' />
                                <input type="password" className="form-control mr-2 my-2" placeholder="Confirm Password" name='confirm_password' />
                                <button type="submit" className="btn btn-secondary custom-btn btn-block mt-4">Sign Up</button>
                            </form>
                        </div>
                    </div>

                    <div className="add-event-form mx-4 my-4 bg-light">
                        <div className="mx-4 my-4 bg-light">
                            <form className="form-control p-4" target='' method='POST' action="http://localhost:5000/api/auth/login" encType='multipart/form-data' >
                                <input type="email" className="form-control mr-2 my-2" placeholder="Your Email" name='email' />
                                <input type="password" className="form-control mr-2 my-2" placeholder="Enter password" name='password' />
                                <button type="submit" className="btn btn-secondary custom-btn btn-block mt-4">Sign In</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Signup