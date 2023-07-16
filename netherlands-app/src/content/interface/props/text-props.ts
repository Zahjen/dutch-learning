/**
 * Interface permettant de caractériser un texte et composée de :
 * * `text` *(string)* : Le texte.
 * * `className` *(string)* : Le nom de la classe permettant une personnalisation du texte.
 */
export interface TextProps {
    /** Le texte. */
    text: string;

    /** Le nom de la classe permettant une personnalisation du texte. */
    className?: string;
}