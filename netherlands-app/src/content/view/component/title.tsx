import { TitleProps } from '../../interface/props/title-props';
import '../style/title/title.css';

/**
 * @brief Composant permettant d'afficher un titre.
 * @param props TitleProps : Prise en compte du titre à afficher et l'ajout potentiel d'une classe.
 * @returns Composant permettant d'afficher un titre.
 */
const Title: React.FC<TitleProps> = (props: TitleProps): JSX.Element => {
    const className: string = "title-container " + props.className;

    return (
        <h1 className={className}>
            {props.title}
        </h1>
    );
}

export default Title;