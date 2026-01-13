import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-section">
                    <h3 className="footer-title">Oral Premium</h3>
                    <p className="footer-text">
                        Comprometidos com a excelência na medicina dentária. Cuide do seu sorriso com quem entende.
                    </p>
                    <div className="social-links">
                        <a href="https://facebook.com/oral_premium_clinicadentaria" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <Facebook size={24} />
                        </a>
                        <a href="#" aria-label="Instagram">
                            <Instagram size={24} />
                        </a>
                    </div>
                </div>

                <div className="footer-section">
                    <h3 className="footer-title">Contactos</h3>
                    <ul className="contact-list">
                        <li>
                            <Phone size={18} className="contact-icon" />
                            <div>
                                <a href="tel:+258842199338">+258 84 219 9338</a>
                                <br />
                                <a href="tel:+258866579000">+258 86 657 9000</a>
                            </div>
                        </li>
                        <li>
                            <Mail size={18} className="contact-icon" />
                            <a href="mailto:oraipremiu.dentalclinic@gmail.com">oraipremiu.dentalclinic@gmail.com</a>
                        </li>
                        <li>
                            <MapPin size={18} className="contact-icon" />
                            <span>Rua de Mukumbura 427, Polana Cimento, Cidade de Maputo</span>
                        </li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3 className="footer-title">Horário</h3>
                    <p className="footer-text">Segunda - Sexta: 08:00 - 18:00</p>
                    <p className="footer-text">Sábado: 08:00 - 13:00</p>
                    <p className="footer-text">Domingo: Fechado</p>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} Oral Premium. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
