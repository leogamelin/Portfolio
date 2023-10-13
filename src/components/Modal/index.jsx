import React, { useState, useRef } from 'react';
import "./modal.scss";

// 1. Importation des images
import BookiImage1 from '../../assets/projets/Booki__PC.png';
import BookiImage2 from '../../assets/projets/Booki__MO.png';

import SophieBluelImage1 from '../../assets/projets/SophieBluel__PC.png';
import SophieBluelImage2 from '../../assets/projets/SophieBluel__PC2.png';
import SophieBluelImage3 from '../../assets/projets/SophieBluel__PC3.png';
import SophieBluelImage4 from '../../assets/projets/SophieBluel__PC4.png';
import SophieBluelImage5 from '../../assets/projets/SophieBluel__PC5.png';

import MenuMakerImage1 from '../../assets/projets/MenuMaker__PC.png';
import MenuMakerImage2 from '../../assets/projets/MenuMaker__PC2.png';
import MenuMakerImage3 from '../../assets/projets/MenuMaker__PC3.png';

import NinaCarducciImage1 from '../../assets/projets/NinaCarducci__PC.png';
import NinaCarducciImage2 from '../../assets/projets/NinaCarducci__PC2.png';
import NinaCarducciImage3 from '../../assets/projets/NinaCarducci__PC3.png';

import Kaza1 from '../../assets/projets/Kaza__PC.png';
import Kaza2 from '../../assets/projets/Kaza__PC2.png';
import Kaza3 from '../../assets/projets/Kaza__PC3.png';

import VieuxGrimoire1 from '../../assets/projets/VieuxGrimoire__PC.png';
import VieuxGrimoire2 from '../../assets/projets/VieuxGrimoire__PC2.png';
import VieuxGrimoire3 from '../../assets/projets/VieuxGrimoire__PC3.png';



function Modal({ isOpen, onClose, projet }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const overlayRef = useRef(null);

    const handleOutsideClick = (event) => {
        if (event.target === overlayRef.current) {
            onClose();
        }
    };

    const nextImage = () => {
        const newIndex = currentImageIndex + 1;
        setCurrentImageIndex(newIndex >= images.length ? 0 : newIndex);
    };

    const prevImage = () => {
        const newIndex = currentImageIndex - 1;
        setCurrentImageIndex(newIndex < 0 ? images.length - 1 : newIndex);
    };

    if (!isOpen || !projet) return null;

    // 2. Sélection des images en fonction du projet
    let images;
    switch (projet.imageKey) {
        case 'Booki':
            images = [BookiImage1, BookiImage2];
            break;
        case 'SophieBluel':
            images = [SophieBluelImage1, SophieBluelImage2, SophieBluelImage3, SophieBluelImage4, SophieBluelImage5];
            break;
        case 'MenuMaker':
            images = [MenuMakerImage1, MenuMakerImage2, MenuMakerImage3,];
            break;
        case 'NinaCarducci':
            images = [NinaCarducciImage1, NinaCarducciImage2, NinaCarducciImage3,];
            break;
            case 'Kaza':
            images = [Kaza1, Kaza2, Kaza3,];
            break;
            case 'VieuxGrimoire':
            images = [VieuxGrimoire1, VieuxGrimoire2, VieuxGrimoire3,];
            break;
        default:
            images = [];
    }

    return (
        <div className="modal__overlay" ref={overlayRef} onClick={handleOutsideClick}>
            <div className="modal__content">
                <h2>{projet.title}</h2>
                <div className="modal__carousel">
                    <button onClick={prevImage}>&lt;</button>
                    {/* 3. Utilisation de l'image actuelle du tableau d'images */}
                    <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1} for ${projet.title}`} />
                    <button onClick={nextImage}>&gt;</button>
                </div>
                <div className="modal__skills__and__links">
                    <ul>
                        {projet.skills.map(skill => (
                            <li key={skill}>{skill}</li>
                        ))}
                    </ul>
                    <a href={projet.githubLink} target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github" style={{ color: '#f9e4b7' }}></i> - sur GitHub
                    </a>
                </div>
                <p className='detailedDescription'>{projet.detailedDescription}</p>
                <div className="problems">
                    <h3>Les problématiques que j'ai rencontré :</h3>
                    <p className='problem'>{projet.problem}</p>
                    <p className='soluce'>{projet.soluce}</p>
                </div>
            </div>
        </div>
    );
}

export default Modal;
