import Title from "../../component/title";
import learning from '../../../../assets/image/home-learning-language.png';
import TwoCellsGrid from "../../component/two-cells-grid";
import Text from "../../component/text";
import '../../style/element/home/home-header/home-header.css';
import '../../style/element/home/home-header/home-header-laptop.css';
import '../../style/element/home/home-header/home-header-tablet.css';
import '../../style/element/home/home-header/home-header-mobile.css';

const LeftCellContent = () => {
    return (
        <div className="home-header-text-content">
            <Title
                className="home-header-title"
                title={"Apprendre le néerlandais."}
            />
            <hr className="home-header-rule"/>
            <Text 
                className="home-header-text"
                text="Ce site a été créé dans un but éducatif, spécifiquement pour faciliter l'apprentissage du néerlandais. Il nous offre un environnement permettant d'améliorer nos compétences linguistiques, et d'enregistrer notre progression au fil du temps, ce qui nous permet de suivre nos progrès et de visualiser notre développement linguistique. Grâce à une variété de leçons et de ressources disponibles, il nous est 
                possible de pratiquer et renforcer nos connaissances de la langue néerlandaise. Notre objectif est d'offrir une plateforme d'apprentissage simple et de nous accompagner dans notre voyage d'apprentissage du néerlandais."
            />
        </div>
    );
}

const RightCellContent = () => {
    return (
        <img 
            src={ learning }
            className="home-header-learning-image" 
            alt="home-header-learning" 
        />
    );
}

const HomeHeader = () => {
    return (
        <TwoCellsGrid
            parentClassName="home-header-container"
            rightCellClassName='home-header-right-container'
            leftCellContent = { <LeftCellContent/> }
            rightCellContent = { <RightCellContent/> }
        />
    );
}

export default HomeHeader;