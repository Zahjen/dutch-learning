import { TextProps } from "../../interface/props/text-props";
import '../style/text/text.css';

/**
 * @brief Composant permettant d'afficher du texte.
 * @param props TextProps : Prise en compte du texte à afficher et l'ajout potentiel d'une classe.
 * @returns Composant permettant d'afficher du texte.
 */
const Text: React.FC<TextProps> = (props: TextProps): JSX.Element => {
    const className: string = "text-container " + props.className;

    return (
        <p className={className}>
            {props.text}
        </p>
    );
}

export default Text;