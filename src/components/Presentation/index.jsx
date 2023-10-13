import canva__item from '../../assets/canva__item.svg';
// Style de la page
import "./presentation.scss";

function Presentation() {
    return (
        <section id="presentation">
            <div className="presentation__texte">
                <h2><span className="focus">Développeur</span> web <span className="focus__italic">junior</span>.</h2>
                <p className="presentation__texte__hook">Partageons notre passion pour créer des sites web remarquables.</p>
                <p>Passionné par le développement web, je me spécialise dans le front-end tout en ayant des compétences en back-end. Je suis actuellement à la recherche d'une opportunité en tant que développeur front-end junior. N'hésitez pas à explorer mon portfolio pour découvrir mes projets !</p>                
                <div className="button">
                    <a href="#contact" className="button__first">Contactez-moi !</a>
                    <a href="#portfolio" className="button__second">Découvrir mes projets</a>
                </div>
            </div>
            <div className="presentation__image">
                <img src={canva__item} alt="Item canva" />
            </div>
        </section>
    );
}

export default Presentation;
