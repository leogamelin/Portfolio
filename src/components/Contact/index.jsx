// Style de la page
import "./contact.scss";

import React from 'react';

function Contact() {
    return (
        <section id="contact">
            <h3>Contact :</h3>
            <div className="contact__content">
                <div className="contact__info">
                    <h4>Envoyez moi un message :</h4>
                    <div className="contact__info__list">
                        <div className="contact__info__list__bullet">
                            <i className="fa-brands fa-linkedin"></i>     
                            <a href="https://www.linkedin.com/in/l%C3%A9ogamelin/">LinkedIn</a>
                        </div>
                        <div className="contact__info__list__bullet">
                            <i className="fa-solid fa-phone"></i>
                            <p>07 71 94 38 60</p>
                        </div>
                        <div className="contact__info__list__bullet">
                            <i className="fa-solid fa-envelope"></i>
                            <p>leogamelin59850@gmail.com</p>
                        </div>
                        <div className="contact__info__list__bullet">
                            <i className="fa-solid fa-location-dot"></i>
                            <p id="ppp">Lille et alentours</p>
                        </div>
                        <div className="contact__info__list__bullet">
                            <i className="fa-solid fa-desktop"></i>                            
                            <p id="ppp">Télétravail</p>
                        </div>
                    </div>
                </div>
                <div className="contact__message">
                <form>
                    <input type="text" id="name" name="name" placeholder="Nom :" required />
                    <input type="email" id="email" name="email" placeholder="Email :" required />
                    <textarea id="message" name="message" placeholder="Message :" required></textarea>
                    <button type="submit">Envoyer</button>
                </form>

                </div>
            </div>
            <div className="copyright">
                {/* Contenu pour les droits d'auteur si nécessaire */}
            </div>
        </section>
    );
}

export default Contact;
