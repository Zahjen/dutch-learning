import '../style/two-cells-grid/two-cells.css';
import '../style/title/title.css';
import { TwoCellsGridProps } from '../../interface/props/two-cells-grid-props';

/**
 * @brief Composant permettant d'afficher une grille à deux cellules.
 * @param props TwoCellsGridProps : Prise en compte du contenu de chacune des deux cellules, ainsi que l'ajout potentiel de classe pour chacune des cellules et pour la grille.
 * @returns Composant permettant d'afficher une grille à deux cellules.
 */
const TwoCellsGrid: React.FC<TwoCellsGridProps> = (props: TwoCellsGridProps): JSX.Element => {
    const parentClassName: string = "two-cells-grid-container " + props.parentClassName;
    const leftCellClassName: string = "left-cell-container " + props.leftCellClassName;
    const rightCellClassName: string = "right-cell-container " + props.rightCellClassName;

    return (
        <div className={parentClassName}>
            <div className={leftCellClassName}>
                {props.leftCellContent}
            </div>
            <div className={rightCellClassName}>
                {props.rightCellContent}
            </div>      
        </div>
    );
}

export default TwoCellsGrid;