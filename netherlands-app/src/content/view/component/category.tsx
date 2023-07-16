import { CategoryProps } from "../../interface/props/category-props";
import { TranslationProps } from "../../text/vocabular";
import Title from "./title";
import Text from "./text";
import TwoCellsGrid from "./two-cells-grid";
import "../style/category/category.css"

/**
 * @brief Composant permettant d'afficher une grille à deux cellules.
 * @param props CategoryProps : Prise en compte du contenu de chacune des deux cellules, ainsi que l'ajout potentiel de classe pour chacune des cellules et pour la grille.
 * @returns Composant permettant d'afficher une grille à deux cellules.
 */
const Category: React.FC<CategoryProps> = (props: CategoryProps): JSX.Element => {
    return (
        <div className="category-container" id = {props.section.id.trim()}>
            <Title title = {props.section.title.trim()} className="category-title" />
            {
                props.section.data.map((d: TranslationProps) => {
                    return (
                        <TwoCellsGrid
                            key = {d.fr + "-" + d.nl}
                            parentClassName = "category-section-container"
                            leftCellContent = { <Text text = {d.fr.trim()}/> }
                            rightCellContent = { <Text text = {d.nl.trim()}/> }
                        />
                    );
                })
            }
        </div>
    );
}

export default Category;