import { NoteProps } from "../../interface/props/note-props";
import '../style/note/note.css';
import '../style/note/note-laptop.css';
import '../style/note/note-mobile.css';
import Text from "./text";

/**
 * @brief Composant permettant d'afficher une note.
 * @param props NoteProps : Prise en compte du texte de la note et l'ajout potentiel d'une classe.
 * @returns Composant permettant d'afficher une note.
 */
const Note: React.FC<NoteProps> = (props: NoteProps): JSX.Element => {
    const className: string = "note-container " + props.className;

    return (
        <div className={ className }>
            <Text
                className="text-bold text-italic note-title"
                text="Note :"
            />
            <Text
                className="text-italic note-content"
                text={ props.text }
            />
        </div>
    );
}

export default Note;