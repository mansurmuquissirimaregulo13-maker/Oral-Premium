import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import logo from '../assets/logo.png';
import './Header.css';
import { useModal } from '../context/ModalContext';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { openModal } = useModal();

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'Início', href: '#inicio' },
        { name: 'Sobre', href: '#sobre' },
        { name: 'Serviços', href: '#servicos' },
        { name: 'Galeria', href: '#galeria' },
        { name: 'Contactos', href: '#contactos' },
    ];

    return (
        <header className="header">
            <div className="container header-container">
                <a href="#inicio" className="logo-container">
                    <img src={logo} alt="Oral Premium Logo" className="logo-img" />
                    <span className="logo-text notranslate">Oral Premium</span>
                </a>

                {/* Navegação Desktop */}
                <nav className="desktop-nav">
                    <ul className="nav-list">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a href={link.href} className="nav-link">
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="header-actions">
                    <button
                        onClick={openModal}
                        className="btn btn-primary btn-sm hidden-mobile"
                    >
                        <Phone size={18} />
                        Marcar Consulta
                    </button>

                    <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Navegação Mobile */}
            <div className={`mobile-nav ${isOpen ? 'open' : ''}`}>
                <ul className="mobile-nav-list">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                className="mobile-nav-link"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                    <li>
                        <button
                            onClick={() => {
                                setIsOpen(false);
                                openModal();
                            }}
                            className="btn btn-primary full-width"
                        >
                            <Phone size={18} />
                            Marcar Consulta
                        </button>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
