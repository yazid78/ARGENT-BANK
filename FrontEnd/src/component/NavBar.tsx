
import '../css/main.css'
import argentBankLogo from '../assets/argentBankLogo.png';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

const NavBar: React.FC = () => {
    return (
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
                <Link to={"/sign-in"}>
                    <i className="fa fa-user-circle"></i>
                    Sign In
                </Link>
            </div>
        </nav>
    );
};
export default NavBar