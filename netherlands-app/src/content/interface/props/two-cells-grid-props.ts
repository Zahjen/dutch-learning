/**
 * Interface permettant de caractériser une grille composé d'uniquement deux cellules et composée de :
 * * `parentClassName` *(string)* : Le nom de la classe parent englobant les cellules.
 * * `leftCellClassName` *(string)* : Le nom de la classe permettant une personnalisation de la cellule gauche.
 * * `rightCellClassName` *(string)* : Le nom de la classe permettant une personnalisation de la cellule droite.
 * * `leftCellContent` *(JSX.Element)* : Le contenu de la cellule gauche.
 * * `rightCellContent` *(JSX.Element)* : Le contenu de la cellule droite.
 */
export interface TwoCellsGridProps {
    /** Le nom de la classe parent englobant les cellules. */
    parentClassName?: string;

    /** Le nom de la classe permettant une personnalisation de la cellule gauche. */
    leftCellClassName?: string;

    /** Le nom de la classe permettant une personnalisation de la cellule droite. */
    rightCellClassName?: string;

    /** Le contenu de la cellule gauche. */
    leftCellContent?: JSX.Element;

    /** Le contenu de la cellule droite. */
    rightCellContent?: JSX.Element;
}