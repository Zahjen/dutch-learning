import { NavLink } from "react-router-dom";
import { vocabularSectionProps, vocabularSections } from "../../../text/vocabular";
import Card from "../../component/card";
import '../../style/card-container/card-container.css';

const CardContainer = () => {
    return <div className="vocabular-card-container">
        {
            vocabularSections.map((section: vocabularSectionProps) => {
                return (
                    <NavLink key = { section.id } className="nav-bar-link" to={"/vocabular/" + section.id}>
                        <Card text = { section.title }/>
                    </NavLink>
                );
            })
        }
    </div>
}

export default CardContainer;