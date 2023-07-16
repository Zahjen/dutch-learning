import { vocabularSectionProps } from "../../text/vocabular";

/**
 * Interface permettant de caractériser une section et composée de :
 * * `parentClassName` *(sectionProps)* : La section à afficher.
 */
export interface CategoryProps {
    /** La section à afficher. */
    section: vocabularSectionProps;
}