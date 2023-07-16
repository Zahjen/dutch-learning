/**
 * Interface permettant de caractériser une note et composée de :
 * * `text` *(string)* : Le texte composant la note.
 * * `className` *(string)* : Le nom de la classe permettant une personnalisation de la note.
 */
export interface NoteProps {
    /** Le texte composant la note. */
    text: string;

    /** Le nom de la classe permettant une personnalisation de la note. */
    className?: string;
}