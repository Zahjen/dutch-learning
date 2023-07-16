import { CardProps } from '../../interface/props/card-props';
import '../style/card/card.css';
import '../style/card/card-laptop.css';
import '../style/card/card-mobile.css';
import Text from './text';

/**
 * @brief Composant de carte permettant l'affichage d'une icone, d'un titre et d'un texte.
 * @param props CardProps : Prise en compte d'un chemin menant vers l'icon, le texte associé à la carte, le titre de la carte et l'ajout potentiel d'une classe.
 * @returns Composant de carte permettant la mise en évidence de certaines données.
 */
const Card: React.FC<CardProps> = (props: CardProps): JSX.Element => {
    const className: string = "card-container " + props.className;

    return (
        <div className={className}>
            <Text
                text={props.text}
                className="text-bold text-secondary card-title"
            />
            <span className="border"></span>            
        </div>
    );
}

export default Card;