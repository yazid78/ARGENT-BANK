import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import 'font-awesome/css/font-awesome.min.css';
import argentBankLogo from '../assets/argentBankLogo.png';
import chatIcon from '../assets/icon-chat.png';
import moneyIcon from '../assets/icon-money.png';
import securityIcon from '../assets/icon-security.png';
import '../css/main.css';

const Home: React.FC = () => {
    const firstName = useSelector((state: RootState) => state.auth.firstName);

    return (
        <div>
            {/* NavBar */}
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
                        {firstName || 'Sign In'}
                    </Link>
                </div>
            </nav>

            {/* Features */}
            <main>
                <div className="hero">
                    <section className="hero-content">
                        <h2 className="sr-only">Promoted Content</h2>
                        <p className="subtitle">No fees.</p>
                        <p className="subtitle">No minimum deposit.</p>
                        <p className="subtitle">High interest rates.</p>
                        <p className="text">Open a savings account with Argent Bank today!</p>
                    </section>
                </div>

                <section className="features flex flex-col md:flex-row">
                    <div className="feature-item flex-1 p-10">
                        <img
                            src={chatIcon}
                            alt="Chat Icon"
                            className="feature-icon"
                        />
                        <h3 className="feature-item-title">You are our #1 priority</h3>
                        <p>
                            Need to talk to a representative? You can get in touch through our
                            24/7 chat or through a phone call in less than 5 minutes.
                        </p>
                    </div>
                    <div className="feature-item flex-1 p-10">
                        <img
                            src={moneyIcon}
                            alt="Money Icon"
                            className="feature-icon"
                        />
                        <h3 className="feature-item-title">More savings means higher rates</h3>
                        <p>The more you save with us, the higher your interest rate will be!</p>
                    </div>
                    <div className="feature-item flex-1 p-10">
                        <img
                            src={securityIcon}
                            alt="Security Icon"
                            className="feature-icon"
                        />
                        <h3 className="feature-item-title">Security you can trust</h3>
                        <p>
                            We use top of the line encryption to make sure your data and money is
                            always safe.
                        </p>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="footer">
                <p className="footer-text">Copyright 2020 Argent Bank</p>
            </footer>
        </div>
    );
};

export default Home;
