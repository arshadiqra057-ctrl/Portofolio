import React from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';
import { motion } from 'framer-motion';

const Login = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="auth-page"
        >
            <div className="auth-container">
                <div className="auth-card">
                    <div className="auth-image-side">
                        <div className="auth-overlay">
                            <h2>Welcome Back!</h2>
                            <p>Continue your trading journey with the world's most trusted investment platform.</p>
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
                            <h1>Sign In</h1>
                            <p>Enter your details to access your account</p>
                        </div>

                        <form className="auth-form">
                            <div className="form-group">
                                <label>Email Address</label>
                                <input type="email" placeholder="name@company.com" required />
                            </div>
                            <div className="form-group">
                                <div className="label-row">
                                    <label>Password</label>
                                    <a href="#!" className="forgot-link">Forgot password?</a>
                                </div>
                                <input type="password" placeholder="••••••••" required />
                            </div>

                            <div className="form-options">
                                <label className="checkbox-container">
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                    Remember me
                                </label>
                            </div>

                            <button type="submit" className="auth-submit-btn">Sign In</button>
                        </form>

                        <div className="auth-footer">
                            <p>Don't have an account? <Link to="/signup">Create account</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Login;
