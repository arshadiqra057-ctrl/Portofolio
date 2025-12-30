import React from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';
import { motion } from 'framer-motion';

const Signup = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="auth-page"
        >
            <div className="auth-container">
                <div className="auth-card">
                    <div className="auth-image-side signup-image">
                        <div className="auth-overlay">
                            <h2>Join Us Today!</h2>
                            <p>Start your journey towards financial freedom with our advanced trading tools.</p>
                        </div>
                    </div>
                    <div className="auth-form-side">
                        <div className="auth-header">
                            <Link to="/" className="auth-logo">
                                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 5L35 15V25L20 35L5 25V15L20 5Z" fill="#4A9FD4" stroke="#4A9FD4" strokeWidth="2" />
                                    <path d="M12 18L20 12L28 18V26L20 32L12 26V18Z" fill="#1a3a5c" stroke="#4A9FD4" strokeWidth="1" />
                                </svg>
                            </Link>
                            <h1>Create Account</h1>
                            <p>Sign up to start your trading experience</p>
                        </div>

                        <form className="auth-form">
                            <div className="form-group">
                                <label>Full Name</label>
                                <input type="text" placeholder="John Doe" required />
                            </div>
                            <div className="form-group">
                                <label>Email Address</label>
                                <input type="email" placeholder="name@company.com" required />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" placeholder="Min. 8 characters" required />
                            </div>
                            <div className="form-group">
                                <label>Confirm Password</label>
                                <input type="password" placeholder="••••••••" required />
                            </div>

                            <div className="form-options">
                                <label className="checkbox-container">
                                    <input type="checkbox" required />
                                    <span className="checkmark"></span>
                                    I agree to the <Link to="/compliance">Terms & Privacy Policy</Link>
                                </label>
                            </div>

                            <button type="submit" className="auth-submit-btn">Create Account</button>
                        </form>

                        <div className="auth-footer">
                            <p>Already have an account? <Link to="/login">Sign In</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Signup;
