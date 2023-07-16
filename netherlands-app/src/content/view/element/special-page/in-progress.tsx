import inprogress from '../../../../assets/image/in-progress.png';
import Title from '../../component/title';
import '../../style/in-progress/in-progress.css';

const InProgress = () => {
    return (
        <div className="in-progress-container">
            <Title title="Cette page est en cours de construction..." />
            <img 
                src={inprogress}
                className="in-progress-img"
                alt="in-progress" 
            />
        </div>
    );
}

export default InProgress;