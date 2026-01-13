import {
    CheckCircle,
    Smartphone,
    Sparkles,
    Settings,
    PenTool,
    Sun,
    Baby,
    Zap,
    Clock,
    Phone,
    Mail,
    MapPin
} from 'lucide-react';
import './Home.css';
import './About.css';
import './Services.css';
import './Gallery.css';
import './Contact.css';
import { useModal } from '../context/ModalContext';



// Importando imagens reais geradas
import laserImg from '../assets/services/laser.png';
import implantesImg from '../assets/services/implantes.png';
import pediatriaImg from '../assets/services/pediatria.png';
import clareamentoImg from '../assets/services/clareamento.png';
import aparelhoImg from '../assets/services/aparelho.png';

// Importar imagens da galeria
import facetaResinaImg from '../assets/gallery/faceta-resina.jpg';
import clareamentoAntesDepoisImg from '../assets/gallery/clareamento-antes-depois.jpg';
import restauracaoDenteImg from '../assets/gallery/restauracao-dente.jpg';
import implantesAntesDepoisImg from '../assets/gallery/implantes-antes-depois.jpg';

// Importar imagens dos doutores
import draWinnieWilsonImg from '../assets/doctors/dra-winnie-wilson.jpg';
import draCarmeliaLoboImg from '../assets/doctors/dra-carmelia-lobo.jpg';
import drWagnerGimoImg from '../assets/doctors/dr-wagner-gimo.jpg';
import draEdnaFumoImg from '../assets/doctors/dra-edna-fumo.jpg';
import draMarciaCardosoImg from '../assets/doctors/dra-marcia-cardoso.jpg';

const Home = () => {
    const { openModal } = useModal();

    const services = [
        {
            icon: <Sparkles size={40} />,
            title: 'Limpeza Dentária',
            desc: 'Remoção eficaz de tártaro e placa bacteriana para um sorriso mais saudável.',
            image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80'
        },
        {
            icon: <Zap size={40} />,
            title: 'Tratamento com Laser',
            desc: 'Tecnologia avançada para tratamentos mais rápidos e com menos dor.',
            image: laserImg
        },
        {
            icon: <PenTool size={40} />,
            title: 'Implantes Dentários',
            desc: 'A solução mais moderna para substituir dentes perdidos desde a raiz.',
            image: implantesImg
        },
        {
            icon: <Baby size={40} />,
            title: 'Odontopediatria',
            desc: 'Atendimento especializado e carinhoso para cuidar do sorriso das crianças.',
            image: pediatriaImg
        },
        {
            icon: <Sun size={40} />,
            title: 'Clareamento Dentário',
            desc: 'Técnicas seguras para deixar seus dentes mais brancos e radiantes.',
            image: clareamentoImg
        },
        {
            icon: <Settings size={40} />,
            title: 'Aparelho Dentário',
            desc: 'Correção do alinhamento dos dentes para funcionalidade e estética.',
            image: aparelhoImg
        }
    ];

    const galleryImages = [
        { src: facetaResinaImg, caption: 'Faceta em Resina Composta - Antes e Depois' },
        { src: clareamentoAntesDepoisImg, caption: 'Clareamento Dental - Resultado' },
        { src: restauracaoDenteImg, caption: 'Restauração Dental - Antes e Depois' },
        { src: implantesAntesDepoisImg, caption: 'Implantes Dentários - Transformação Completa' }
    ];

    const doctors = [
        {
            name: 'Dra. Winnie Wilson',
            designation: 'Especialista em Endodontia',
            quote: 'Dedicada a proporcionar tratamentos de canal com excelência e conforto. Com anos de experiência, utilizo as técnicas mais modernas para garantir o melhor resultado aos meus pacientes.',
            src: draWinnieWilsonImg
        },
        {
            name: 'Dra. Carmélia Lobo',
            designation: 'Especialista em Prótese e Reabilitação Oral',
            quote: 'Especializada em devolver sorrisos através de próteses dentárias de alta qualidade. Meu foco é restaurar a função e estética dental com soluções personalizadas para cada paciente.',
            src: draCarmeliaLoboImg
        },
        {
            name: 'Dr. Wagner Gimo',
            designation: 'Especialista em Implantes, Perodontia e Cirurgia Geral',
            quote: 'Comprometido com a excelência em implantodontia e cirurgia oral. Utilizo tecnologia de ponta para proporcionar resultados seguros e duradouros na reabilitação oral completa.',
            src: drWagnerGimoImg
        },
        {
            name: 'Dra. Edna Fumo',
            designation: 'Especialista em Ortodontia (Aparelho Dentário)',
            quote: 'Apaixonada por criar sorrisos harmoniosos através da ortodontia. Trabalho com aparelhos modernos e técnicas avançadas para corrigir o alinhamento dental de forma eficaz e confortável.',
            src: draEdnaFumoImg
        },
        {
            name: 'Dra. Márcia Cardoso',
            designation: 'Especialista em Dentística',
            quote: 'Focada em procedimentos estéticos e restauradores que transformam sorrisos. Utilizo materiais de última geração para criar resultados naturais e duradouros.',
            src: draMarciaCardosoImg
        }
    ];

    return (
        <div className="landing-page">
            {/* Seção Início */}
            <section id="inicio" className="hero">
                <div className="hero-overlay"></div>
                <div className="container hero-content">
                    <span className="hero-subtitle">Clínica Oral Premium</span>
                    <h1 className="hero-title">
                        Cuidamos do Seu Sorriso com Excelência
                    </h1>
                    <p className="hero-text">
                        Tratamentos dentários modernos em Maputo. Equipe experiente, tecnologia de ponta e atendimento personalizado.
                    </p>
                    <div className="hero-buttons">
                        <button
                            onClick={openModal}
                            className="btn btn-primary btn-lg"
                        >
                            <Smartphone size={20} />
                            Marcar Consulta via WhatsApp
                        </button>
                        <a href="#servicos" className="btn btn-outline btn-lg text-white border-white">
                            Nossos Serviços
                        </a>
                    </div>
                </div>
            </section>

            {/* Seção Sobre */}
            <section id="sobre" className="section bg-surface">
                <div className="container">
                    <div className="about-main">
                        <div className="about-content-text">
                            <h2 className="section-title text-left">Sobre Nós</h2>
                            <p>
                                A <strong>Oral Premium</strong> oferece tratamentos dentários completos em Maputo.
                                Nossa equipe qualificada está pronta para cuidar da saúde bucal de toda a sua família.
                            </p>
                            <ul className="features-list">
                                <li><CheckCircle className="text-secondary" size={20} /> <span>Profissionais altamente qualificados</span></li>
                                <li><CheckCircle className="text-secondary" size={20} /> <span>Tecnologia de ponta (Laser e Implantes)</span></li>
                                <li><CheckCircle className="text-secondary" size={20} /> <span>Ambiente seguro e acolhedor</span></li>
                            </ul>
                        </div>
                        <div className="about-stats">
                            <div className="stat-card">
                                <span className="stat-number">+10</span>
                                <span className="stat-label">Anos de Experiência</span>
                            </div>
                            <div className="stat-card">
                                <span className="stat-number">+5k</span>
                                <span className="stat-label">Pacientes Felizes</span>
                            </div>
                        </div>
                    </div>

                    <div className="mission-vision mt-4">
                        <div className="mv-card mission">
                            <h3>Missão</h3>
                            <p>Proporcionar saúde e bem-estar através de tratamentos de excelência, devolvendo a autoestima aos pacientes.</p>
                        </div>
                        <div className="mv-card vision">
                            <h3>Visão</h3>
                            <p>Ser a clínica de referência em Maputo, reconhecida pela inovação e humanização no atendimento.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Seção Serviços - REVERTIDO PARA GRID COM CARTÕES */}
            <section id="servicos" className="section">
                <div className="container">
                    <div className="section-title">
                        <h2>Nossos Serviços</h2>
                        <p>Oferecemos tratamentos dentários completos com equipamentos modernos.</p>
                    </div>
                    <div className="services-grid">
                        {services.map((service, index) => (
                            <div key={index} className="service-card extra-clean">
                                <div className="service-img-wrapper">
                                    <img src={service.image} alt={service.title} className="service-img-real" />
                                </div>
                                <div className="service-content">
                                    <div className="service-icon-small">{service.icon}</div>
                                    <h3 className="service-title">{service.title}</h3>
                                    <p className="service-desc">{service.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Seção Galeria - REVERTIDO PARA GRID ESTÁTICO */}
            <section id="galeria" className="section bg-surface">
                <div className="container">
                    <div className="section-title">
                        <h2>Galeria</h2>
                        <p>Conheça nossas instalações modernas e confortáveis.</p>
                    </div>
                    <div className="gallery-grid">
                        {galleryImages.map((img, index) => (
                            <div key={index} className="gallery-item">
                                <img src={img.src} alt={img.caption} loading="lazy" />
                                <div className="gallery-overlay">
                                    <span>{img.caption}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Seção Nossos Doutores */}
            <section id="doutores" className="section bg-surface">
                <div className="container">
                    <div className="section-title">
                        <h2>Nossos Especialistas</h2>
                        <p>Conheça nossa equipe de profissionais altamente qualificados.</p>
                    </div>

                    <div className="doctors-grid">
                        {doctors.map((doctor, index) => (
                            <div key={index} className="doctor-card">
                                <div className="doctor-img-wrapper">
                                    <img src={doctor.src} alt={doctor.name} className="doctor-img" loading="lazy" />
                                </div>
                                <div className="doctor-info">
                                    <h3 className="doctor-name">{doctor.name}</h3>
                                    <p className="doctor-role">{doctor.designation}</p>
                                    <p className="doctor-quote">"{doctor.quote}"</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Seção Contactos */}
            <section id="contactos" className="section">
                <div className="container">
                    <div className="section-title">
                        <h2>Contactos</h2>
                        <p>Visite-nos na Polana Cimento ou entre em contacto para marcar sua consulta.</p>
                    </div>
                    <div className="contact-grid">
                        <div className="contact-info">
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
                                    <p>Rua de Mukumbura 427, Polana Cimento, Maputo</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <Clock className="info-icon" />
                                <div>
                                    <h3>Horário</h3>
                                    <p>Seg - Sex: 08:00 - 18:00 | Sábado: 08h - 13h</p>
                                </div>
                            </div>
                        </div>
                        <div className="map-container">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1558.156828108426!2d32.5898!3d-25.9686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e83177656644265%3A0xe7261b0a8553229b!2sR.%20de%20Mukumbura%20427%2C%20Maputo%2C%20Mozambique!5e0!3m2!1sen!2smz!4v1705080000000!5m2!1sen!2smz"
                                width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy" title="Localização"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="cta-section">
                <div className="container cta-content">
                    <h2>Marque Sua Consulta</h2>
                    <p>Entre em contacto e agende seu atendimento.</p>
                    <button
                        onClick={openModal}
                        className="btn btn-white btn-lg"
                    >
                        Agendar Agora via WhatsApp
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Home;
