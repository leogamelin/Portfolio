import React, { useState } from 'react';
import projets from '../../projets.json';

import Booki from '../../assets/projets/Booki__PC.png';
import SophieBluel from '../../assets/projets/SophieBluel__PC.png';
import MenuMaker from '../../assets/projets/MenuMaker__PC.png';
import NinaCarducci from '../../assets//projets/NinaCarducci__PC.png';
import Kaza from '../../assets/projets/Kaza__PC.png';
import VieuxGrimoire from '../../assets/projets/VieuxGrimoire__PC.png';

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
                        case 'Menu Maker':
                            image = MenuMaker;
                            break;
                        case 'Nina Carducci':
                            image = NinaCarducci;
                            break;
                        case 'Kaza':
                            image = Kaza;
                            break;
                            case 'VieuxGrimoire':
                            image = VieuxGrimoire;
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
                                    <h5 className="projet__description--title">{projet.highlight}</h5>
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