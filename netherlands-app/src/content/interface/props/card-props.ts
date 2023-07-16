/**
 * Interface permettant de caractériser une carte et composée de :
 * * `text` *(string)* : Le texte associé à la carte.
 * * `className` *(string)* : Le nom de la classe CSS à appliquer à la carte.
 */
export interface CardProps {    
    /** Le texte associé à la carte. */    
    text: string;

    /** Le nom de la classe CSS à appliquer à la carte. */
    className?: string;
}