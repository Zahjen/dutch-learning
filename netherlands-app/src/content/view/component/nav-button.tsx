import { NavLink } from 'react-router-dom';
import '../style/button/button.css';
import '../style/button/button-mobile.css';
import { NavButtonProps } from '../../interface/props/nav-button-props';

/**
 * @brief Composant de bouton permettant la navigation entre les différentes pages du site.
 * @param props NavButtonProps : Prise en compte du texte associé au bouton, du chemin menant vers la page et l'ajout potentiel d'une classe.
 * @returns Composant de bouton permettant la navigation entre les différentes pages du site.
 * @default className : "button-fill-primary"
 */
const NavButton: React.FC<NavButtonProps> = (props: NavButtonProps): JSX.Element => {
    const className: string = "button " + props.className;

    return (
        <NavLink className={className} to={props.to}>
            {props.text}
        </NavLink>
    );
}

NavButton.defaultProps = {
    className: "button-fill-primary"
}

export default NavButton;