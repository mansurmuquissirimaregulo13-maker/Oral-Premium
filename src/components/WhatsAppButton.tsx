import { MessageCircle } from 'lucide-react';
import { useModal } from '../context/ModalContext';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
    const { openModal } = useModal();

    return (
        <button
            onClick={openModal}
            className="whatsapp-float"
            aria-label="Contactar por WhatsApp"
            style={{ border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: '1rem' }}
        >
            <MessageCircle size={32} />
            <span className="whatsapp-text">Agende sua Consulta</span>
        </button>
    );
};

export default WhatsAppButton;


