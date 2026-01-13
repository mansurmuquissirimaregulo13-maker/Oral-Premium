
import {
    Sparkles,
    Smile,
    Activity,
    Settings,
    Maximize2,
    PenTool,
    Sun,
    XCircle,
    Baby,
    Heart,
    Zap
} from 'lucide-react';
import './Services.css';

const services = [
    {
        icon: <Sparkles size={40} />,
        title: 'Limpeza Dentária',
        desc: 'Remoção eficaz de tártaro e placa bacteriana para um sorriso mais saudável e hálito fresco.'
    },
    {
        icon: <Settings size={40} />,
        title: 'Aparelho Dentário',
        desc: 'Correção do alinhamento dos dentes para melhorar a estética e a função mastigatória.'
    },
    {
        icon: <Activity size={40} />,
        title: 'Tratamento de Canal',
        desc: 'Procedimento para salvar dentes danificados, removendo a infecção e aliviando a dor.'
    },
    {
        icon: <Maximize2 size={40} />,
        title: 'Cirurgia Oral',
        desc: 'Extrações complexas e procedimentos cirúrgicos realizados com segurança e conforto.'
    },
    {
        icon: <Smile size={40} />,
        title: 'Prótese Dentária',
        desc: 'Reposição de dentes perdidos, devolvendo o sorriso e a confiança de forma natural.'
    },
    {
        icon: <PenTool size={40} />,
        title: 'Implantes Dentários',
        desc: 'A solução mais moderna e duradoura para substituir dentes perdidos desde a raiz.'
    },
    {
        icon: <Sun size={40} />,
        title: 'Clareamento Dentário',
        desc: 'Técnicas seguras para deixar seus dentes mais brancos e radiantes.'
    },
    {
        icon: <XCircle size={40} />,
        title: 'Extrações Dentárias',
        desc: 'Remoção de dentes comprometidos com técnicas minimamente invasivas.'
    },
    {
        icon: <Baby size={40} />,
        title: 'Odontopediatria',
        desc: 'Atendimento especializado, lúdico e carinhoso para cuidar do sorriso das crianças.'
    },
    {
        icon: <Heart size={40} />,
        title: 'Estética Dental',
        desc: 'Procedimentos como facetas e piercings dentais para embelezar seu sorriso.'
    },
    {
        icon: <Zap size={40} />,
        title: 'Laserterapia',
        desc: 'Tecnologia avançada para tratamentos mais rápidos, com menos dor e melhor cicatrização.'
    }
];

const Services = () => {
    return (
        <div className="services-page">
            <div className="container section">
                <div className="section-title text-center">
                    <h1>Nossos Tratamentos</h1>
                    <p>Oferecemos uma gama completa de serviços odontológicos com tecnologia de ponta.</p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="service-icon">
                                {service.icon}
                            </div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-desc">{service.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="services-cta">
                    <h2>Não encontrou o que procura?</h2>
                    <p>Entre em contacto connosco para tirar suas dúvidas.</p>
                    <a
                        href="https://wa.me/258842199338"
                        className="btn btn-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Falar com Especialista
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Services;
