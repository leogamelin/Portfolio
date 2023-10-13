import React, { useState } from 'react';
import projets from '../../projets.json';

import Booki from '../../assets/Booki.png';
import SophieBluel from '../../assets/SophieBluel.png';
import MenuMaker from '../../assets/MenuMaker.png';
import NinaCarducci from '../../assets/NinaCarducci.png';
import Kaza from '../../assets/Kaza.png';
import Modal from '../../components/Modal'

import "./portfolio.scss";

function Portfolio() {
    // État pour gérer l'ouverture/fermeture de la modale
    const [isModalOpen, setModalOpen] = useState(false);
    // État pour stocker le projet actuellement sélectionné
    const [selectedProjet, setSelectedProjet] = useState(null);

    return (
        <section id="portfolio">
            <div className="portfolio__list">
                <h3>Mes projets :</h3>
                {projets.map((projet, index) => {
                    let image;
                    switch (projet.title) {
                        case 'Booki':
                            image = Booki;
                            break;
                        case 'Sophie Bluel':
                            image = SophieBluel;
                            break;
                        case 'MenuMaker':
                            image = MenuMaker;
                            break;
                        case 'NinaCarducci':
                            image = NinaCarducci;
                            break;
                        case 'Kaza':
                            image = Kaza;
                            break;
                        default:
                            image = null;
                    }

                    const isReversed = index % 2 !== 0;
                    const projectClass = isReversed ? "projet__reverse" : "projet";

                    return (
                        <div key={projet.id} className="portfolio__list__projet">
                            <div className={projectClass}>
                                <img className="projet__img" src={image} alt={projet.title} />
                                <div className="projet__description">
                                    <h4>{projet.title}</h4>
                                    <ul>
                                        {projet.skills.map(skill => (
                                            <li key={skill}>{skill}</li>
                                        ))}
                                    </ul>
                                    <h5>{projet.highlight}</h5>
                                    <p>{projet.description}</p>
                                    <button onClick={() => {
                                        setSelectedProjet(projet);
                                        setModalOpen(true);
                                    }}>Voir le projet</button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            {/* Rendu du composant Modal */}
            <Modal 
            isOpen={isModalOpen && selectedProjet !== null} 
            projet={selectedProjet} 
            onClose={() => setModalOpen(false)}
            />

        </section>
    );
}

export default Portfolio;
//  JJJJJ

[
    {
        "id": 1,
        "title": "Booki",
        "skills": ["HTML", "CSS", "SASS"],
        "highlight": "Trouvez votre hébergement pour des vacances de rêve",
        "description": "Outil de planification de vacances, Booki permet aux utilisateurs de trouver des hébergements et activités dans la ville souhaitée, en l’occurrence Marseille comme on peut le voir sur le projet.",
        "link": "#",
        "imagePath": "assets/projets/Booki.png"
    },
    {
        "id": 2,
        "title": "Sophie Bluel",
        "skills": ["HTML", "CSS", "JAVASCRIPT"],
        "highlight": "Portfolio de Sophie Bluel, Designer d'espace",
        "description": "Création d'une galerie dynamique via une API et intégration des formulaires pour l'inscription, la connexion et l'ajout de projets. Les utilisateurs peuvent également modifier la gallerie avec des options d'édition et de suppression.",
        "link": "#"
    }

]

//  JJJJ

import "./modal.scss";

function Modal({ isOpen, onClose, projet }) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>{projet.title}</h2>
                <p>{projet.description}</p>
                <button onClick={onClose}>Fermer</button>
            </div>
        </div>
    );
}

export default Modal;



import "./modal.scss";

function Modal({ isOpen, onClose, projet }) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>{projet.title}</h2>
                <p>{projet.description}</p>
                <button onClick={onClose}>Fermer</button>
            </div>
        </div>
    );
}

export default Modal;

{
    "id": 2,
    "title": "Sophie Bluel",
    "skills": ["HTML", "CSS", "JAVASCRIPT"],
    "highlight": "Portfolio de Sophie Bluel, Designer d'espace",
    "description": "Création d'une galerie dynamique via une API et intégration des formulaires pour l'inscription, la connexion et l'ajout de projets. Les utilisateurs peuvent également modifier la gallerie avec des options d'édition et de suppression."
}