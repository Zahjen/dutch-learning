/**
 * Interface permettant de caractériser un bouton de naviguation et composée de :
 * * `text` *(string)* : Le texte associé au bouton de naviguation.
 * * `to` *(string)* : L'URL associée au bouton de naviguation permettant une navigation vers cette URL.
 * * `child` *(JSX.Element)* : Le contenu du bouton de naviguation.
 * * `className` *(string)* : Le nom de la classe associée au bouton de naviguation.
 */
export interface NavButtonProps {
    /** Le nom de la classe associée au bouton. */
    className?: string,
    
    /** Le texte associé au bouton. */
    text?: string;

    /** L'URL associée au bouton permettant une navigation vers cette URL. */
    to: string;
    
    /** Le contenu du bouton. */
    child?: JSX.Element;
}