/**
 * Interface permettant de caractériser un titre et composée de :
 * * `title` *(string)* : Le texte du titre.
 * * `className` *(string)* : Le nom de la classe permettant une personnalisationdu titre.
 */
export interface TitleProps {
    /** Le texte du titre. */
    title: string;

    /** Le nom de la classe permettant une personnalisationdu titre. */
    className?: string;
}