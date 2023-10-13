import React from 'react';
// Style de la page
import "./about.scss";

function About() {
    const skills = [
        { icon: "fa-html5", label: "HTML" },
        { icon: "fa-html5", label: "CSS" },
        { icon: "fa-html5", label: "JAVASCRIPT" },
        { icon: "fa-html5", label: "REACT" },
        { icon: "fa-html5", label: "NODE" },
        { icon: "fa-html5", label: "EXPRESS" },
        { icon: "fa-html5", label: "MONGODB" },
        { icon: "fa-html5", label: "MYSQL" },
        { icon: "fa-html5", label: "SEO" },
        { icon: "fa-html5", label: "NOTION" },
    ];

    return (
        <section id="about">
            <ul className="about__list">
                {skills.map(skill => (
                    <li key={skill.label} className="about__list__skill" style={{ "--color": "#F9E4B7" }}>
                        <span>
                            <i className={`fa-brands ${skill.icon}`} style={{ color: "#F9E4B7" }}></i>
                            {skill.label}
                        </span>
                        <i></i>
                    </li>
                ))}
            </ul>
            <div className="about__me">
                <h3>À propos :</h3>
                <p>
                    J'ai commencé mes études universitaires en Sociologie Quantitative, et c'est dans ce cursus que j'ai découvert le monde du code. 
                    Un cours sur les bases de données m'a initié à MySQL et j'ai été complètement fasciné.
                    <br /><br />
                    J'ai décidé de suivre cette nouvelle passion et je me suis lancé dans le développement web. Grâce à des cours sur Open Classrooms, 
                    j'ai beaucoup appris sur le Front End. Ces formations m'ont permis de travailler sur des projets concrets, d'affiner ma maîtrise de différents langages et d'explorer plusieurs frameworks.
                    <br /><br />
                    Aujourd'hui, en tant que candidat pour un poste de Développeur Web Frontend Junior, 
                    je suis poussé par le désir d'apprendre et l’envie de relever de nouveaux défis. 
                    Si vous cherchez quelqu'un avec passion, curiosité et dévouement, 
                    je serais ravi de discuter des opportunités avec vous.
                </p>
                <div className="about__me__button">
                    <a className="github__link" href="https://github.com/leogamelin" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-github" style={{ color: '#f9e4b7' }}></i>GitHub
                    </a>
                    <a className="cv__link" href="assets/CV_Léo_Gamelin.pdf" download>
                        Télécharger mon CV
                    </a>  
                </div>                
            </div>
        </section>
    );
}

export default About;


