import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-page">
            <div className="page-header">
                <div className="container">
                    <h1>Fale Connosco</h1>
                    <p>Estamos prontos para atender você e sua família.</p>
                </div>
            </div>

            <div className="container section">
                <div className="contact-grid">
                    <div className="contact-info">
                        <h2>Informações de Contacto</h2>
                        <p className="contact-subtitle">
                            Agende sua consulta ou visite nossa clínica.
                        </p>

                        <div className="info-item">
                            <Phone className="info-icon" />
                            <div>
                                <h3>Telefone / WhatsApp</h3>
                                <p>+258 84 219 9338</p>
                                <p>+258 86 657 9000</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <Mail className="info-icon" />
                            <div>
                                <h3>E-mail</h3>
                                <p>oraipremiu.dentalclinic@gmail.com</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <MapPin className="info-icon" />
                            <div>
                                <h3>Localização</h3>
                                <p>Rua de Mukumbura 427, Polana Cimento</p>
                                <p>Cidade de Maputo</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <Clock className="info-icon" />
                            <div>
                                <h3>Horário de Funcionamento</h3>
                                <p>Segunda a Sexta: 08:00 - 18:00</p>
                                <p>Sábado: 08:00 - 13:00</p>
                            </div>
                        </div>

                        <a
                            href="https://wa.me/258842199338"
                            className="btn btn-primary mt-4"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Falar no WhatsApp
                        </a>
                    </div>

                    <div className="map-container">
                        {/* Google Maps Embed */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1558.156828108426!2d32.5898!3d-25.9686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDU4JzA3LjAiUyAzMsKwMzUnMjMuMyJF!5e0!3m2!1sen!2smz!4v1600000000000!5m2!1sen!2smz"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Localização Oral Premium"
                        ></iframe>
                        {/* Note: Coordinates are approximate based on address 'Polana Cimento, Rua de Mukumbura' */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
