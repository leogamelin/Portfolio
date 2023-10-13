// Style de la page
import "./header.scss";

function Header() {
    
    return (
        <header>
            <h1 className="header__name" >Léo <span className="focus">Gamelin</span></h1>
            <div className="header__list">
                <a href="#presentation">Accueil</a>
                <a href="#about">A propos</a>
                <a href="#portfolio">Mes projets</a>
                <a href="#contact">Me contacter</a>
            </div>
        </header>
    )
}

export default Header;