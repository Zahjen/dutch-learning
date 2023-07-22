import logo from '../../../assets/image/logo.svg';
import '../style/nav-bar/nav-bar.css';
import '../style/nav-bar/nav-bar-laptop.css';
import '../style/nav-bar/nav-bar-mobile.css';
import { NavLink } from 'react-router-dom';
import NavButton from './nav-button';

/**
 * @brief Composant de barre de navigation permettant la navigation entre les différentes pages du site.
 * @returns Composant de barre de navigation permettant la navigation entre les différentes pages du site.
 */
const NavBar = () => {
    return (
        <nav className="nav">
            <input type="checkbox" id="nav-bar-checkbox"/>
            <label htmlFor="nav-bar-checkbox" className="nav-bar-btn">
                <span className="nav-bar-line line-1"></span>
                <span className="nav-bar-line line-2"></span>
                <span className="nav-bar-line line-3"></span>
            </label>

            <div className="nav-bar-container">
                <div className="nav-bar-logo-container">
                    <img 
                        src={logo}
                        className="nav-bar-logo" 
                        alt="logo" 
                    />
                    <p className="nav-bar-logo-text">
                        Learn <br/> Dutch!
                    </p>
                </div>

                <div className="nav-bar-link-container">
                    <NavLink className="nav-bar-link" to="/dutch-learning">Accueil</NavLink>
                    <NavLink className="nav-bar-link" to="/dutch-learning/conjugaison">Conjugaison</NavLink>
                    <NavLink className="nav-bar-link" to="/dutch-learning/vocabulaire">Vocabulaire</NavLink>
                    <NavLink className="nav-bar-link" to="/dutch-learning/grammaire">Grammaire</NavLink>
                </div>

                <div className="nav-bar-contact-container">
                    <NavButton
                        className="nav-bar-contact button button-fill-secondary"
                        text="Contact"
                        to="/dutch-learning/contact"
                    />
                </div>

                <div className="ghost"></div>
            </div>
        </nav>
    );
}

export default NavBar;