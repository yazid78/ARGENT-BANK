import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { RootState, AppDispatch } from '../store';
import { logOut, updateUserProfile, getUserProfile } from '../authActions';
import argentBankLogo from '../assets/argentBankLogo.png';
import 'font-awesome/css/font-awesome.min.css';

const User: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const token = useSelector((state: RootState) => state.auth.token);
    const firstName = useSelector((state: RootState) => state.auth.firstName);
    const lastName = useSelector((state: RootState) => state.auth.lastName);
    const [editFirstName, setEditFirstName] = useState<string>('');
    const [editLastName, setEditLastName] = useState<string>('');

    useEffect(() => {
        if (token) {
            dispatch(getUserProfile());
        }
    }, [token, dispatch]);

    if (!token) {
        return <Navigate to="/sign-in" />;
    }

    const handleSignOut = () => {
        dispatch(logOut());
    };

    const handleUpdateName = () => {
        dispatch(updateUserProfile(editFirstName, editLastName));
        setEditFirstName('');
        setEditLastName('');
    };

    return (
        <div>
            <nav className="main-nav">
                <Link className="main-nav-logo" to="/">
                    <img
                        className="main-nav-logo-image"
                        src={argentBankLogo}
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>
                <div>
                    <Link className="main-nav-item" to="/user">
                        <i className="fa fa-user-circle"></i>
                        {firstName || 'User'}
                    </Link>
                    <Link onClick={handleSignOut} className="main-nav-item" to="/">
                        <i className="fa fa-sign-out"></i>
                        Sign Out
                    </Link>
                </div>
            </nav>
            <main className="main bg-dark">
                <div className="header">
                    <h1>
                        Welcome back
                        <br />
                        {firstName ? `${firstName} ${lastName}!` : 'User!'}
                    </h1>
                    <input
                        type="text"
                        value={editFirstName}
                        onChange={(e) => setEditFirstName(e.target.value)}
                        placeholder="Edit First Name"
                    />
                    <input
                        type="text"
                        value={editLastName}
                        onChange={(e) => setEditLastName(e.target.value)}
                        placeholder="Edit Last Name"
                    /> <br /><br />
                    <button className="edit-button" onClick={handleUpdateName}>Update Name</button>
                </div>
                <h2 className="sr-only">Accounts</h2>
                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                        <p className="account-amount">$2,082.79</p>
                        <p className="account-amount-description">Available Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">View transactions</button>
                    </div>
                </section>
                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                        <p className="account-amount">$10,928.42</p>
                        <p className="account-amount-description">Available Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">View transactions</button>
                    </div>
                </section>
                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                        <p className="account-amount">$184.30</p>
                        <p className="account-amount-description">Current Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">View transactions</button>
                    </div>
                </section>
                <br />
            </main>
            <footer className="footer">
                <p className="footer-text">Copyright 2020 Argent Bank</p>
            </footer>
        </div>
    );
};

export default User;
