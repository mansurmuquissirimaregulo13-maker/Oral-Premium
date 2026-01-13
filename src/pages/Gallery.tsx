import './Gallery.css';

const images = [
    {
        src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80',
        caption: 'Consultório Moderno'
    },
    {
        src: 'https://images.unsplash.com/photo-1596766782333-33e970a0122e?w=800&q=80',
        caption: 'Equipe Especializada'
    },
    {
        src: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80',
        caption: 'Tecnologia de Ponta'
    },
    {
        src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80',
        caption: 'Atendimento Infantil'
    },
    {
        src: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f72?w=800&q=80',
        caption: 'Procedimentos Seguros'
    },
    {
        src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
        caption: 'Sala de Esterilização'
    },
    {
        src: 'https://images.unsplash.com/photo-1445527697940-6170001e29a9?w=800&q=80',
        caption: 'Sorrisos Radiantes'
    },
    {
        src: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&q=80',
        caption: 'Recepção Confortável'
    }
];

const Gallery = () => {
    return (
        <div className="gallery-page">
            <div className="page-header">
                <div className="container">
                    <h1>Galeria</h1>
                    <p>Conheça nossas instalações e equipamentos modernos.</p>
                </div>
            </div>

            <div className="container section">
                <div className="gallery-grid">
                    {images.map((img, index) => (
                        <div key={index} className="gallery-item">
                            <img src={img.src} alt={img.caption} loading="lazy" />
                            <div className="gallery-overlay">
                                <span>{img.caption}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gallery;
