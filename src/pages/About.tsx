import { Shield, Users, Clock, Award } from 'lucide-react';
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            <div className="page-header">
                <div className="container">
                    <h1>Sobre a Oral Premium</h1>
                    <p>Conheça nossa história e compromisso com o seu sorriso.</p>
                </div>
            </div>

            <div className="container section">
                <div className="about-main">
                    <div className="about-content-text">
                        <h2>Excelência em Medicina Dentária</h2>
                        <p>
                            A <strong>Oral Premium</strong> nasceu com o propósito de transformar a experiência de ir ao dentista.
                            Localizada no coração de Maputo, nossa clínica combina tecnologia de ponta com um atendimento humanizado e acolhedor.
                        </p>
                        <p>
                            Entendemos que cada paciente é único. Por isso, oferecemos tratamentos personalizados que vão desde a prevenção
                            até reabilitações orais complexas, sempre priorizando o conforto e a segurança de quem confia em nosso trabalho.
                        </p>
                    </div>
                    <div className="about-stats">
                        <div className="stat-card">
                            <span className="stat-number">+10</span>
                            <span className="stat-label">Anos de Experiência</span>
                        </div>
                        <div className="stat-card">
                            <span className="stat-number">+5k</span>
                            <span className="stat-label">Sorrisos Transformados</span>
                        </div>
                    </div>
                </div>

                <div className="values-section">
                    <div className="value-item">
                        <Shield size={32} className="value-icon" />
                        <h3>Confiança</h3>
                        <p>Construímos relações duradouras baseadas em transparência e ética.</p>
                    </div>
                    <div className="value-item">
                        <Users size={32} className="value-icon" />
                        <h3>Cuidado</h3>
                        <p>Atendimento humanizado para adultos e crianças, respeitando cada necessidade.</p>
                    </div>
                    <div className="value-item">
                        <Award size={32} className="value-icon" />
                        <h3>Qualidade</h3>
                        <p>Comprometidos com a excelência técnica e os melhores materiais.</p>
                    </div>
                    <div className="value-item">
                        <Clock size={32} className="value-icon" />
                        <h3>Agilidade</h3>
                        <p>Respeitamos o seu tempo com pontualidade e eficiência nos tratamentos.</p>
                    </div>
                </div>

                <div className="mission-vision">
                    <div className="mv-card mission">
                        <h3>Missão</h3>
                        <p>Proporcionar saúde e bem-estar através de tratamentos odontológicos de excelência, devolvendo a autoestima e a qualidade de vida aos nossos pacientes.</p>
                    </div>
                    <div className="mv-card vision">
                        <h3>Visão</h3>
                        <p>Ser a clínica de referência em medicina dentária em Moçambique, reconhecida pela inovação, qualidade técnica e humanização no atendimento.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
