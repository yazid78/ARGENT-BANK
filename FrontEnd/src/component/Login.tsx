import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../authActions';
import { AppDispatch } from '../store';
import { useNavigate } from 'react-router-dom';
import { RootState } from '@reduxjs/toolkit/query';

const Login: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const error = useSelector((state: RootState) => state.auth.error);

    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await dispatch(login(email, password));
            navigate('/user');
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    return (
        <div>
            <nav className="main-nav">
            </nav>
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    <form onSubmit={handleLogin}>
                        <div className="input-wrapper">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        {error && <div className="error-message">{error}</div>}

                        <button type="submit" className="sign-in-button">Sign In</button>
                    </form>
                </section>
            </main>
            <footer className="footer">
            </footer>
        </div>
    );
};

export default Login;
