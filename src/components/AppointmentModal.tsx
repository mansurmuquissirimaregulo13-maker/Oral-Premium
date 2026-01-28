import { useState, type FormEvent } from 'react';
import { X, Send } from 'lucide-react';
import { useModal } from '../context/ModalContext';
import './AppointmentModal.css';

const AppointmentModal = () => {
    const { isModalOpen, closeModal } = useModal();
    const [formData, setFormData] = useState({
        name: '',
        feeling: ''
    });

    if (!isModalOpen) return null;

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const message = `Olá, me chamo *${formData.name}*.\n\n*O que estou sentindo:* ${formData.feeling}`;

        const phoneNumber = "258842199338";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        window.open(whatsappUrl, '_blank');
        closeModal();

        // Reset form
        setFormData({ name: '', feeling: '' });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Close on click outside
    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };

    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal-content">
                <button className="modal-close" onClick={closeModal}>
                    <X size={24} />
                </button>

                <h2 className="modal-title">Fale Comigo</h2>
                <p className="modal-subtitle">Diga-nos o que está a sentir e entraremos em contacto consigo via WhatsApp.</p>

                <form className="appointment-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Nome Completo</label>
                        <div className="input-wrapper" style={{ position: 'relative' }}>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="form-input"
                                placeholder="Seu nome"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                style={{ width: '100%' }}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="feeling">O que está sentindo?</label>
                        <textarea
                            id="feeling"
                            name="feeling"
                            className="form-input"
                            placeholder="Descreva o que sente (dor, desconforto, dúvida...)"
                            value={formData.feeling}
                            onChange={handleChange}
                            required
                            rows={4}
                            style={{ width: '100%', resize: 'none' }}
                        />
                    </div>

                    <button type="submit" className="form-submit">
                        <Send size={18} />
                        Enviar via WhatsApp
                    </button>
                </form>

                <div className="modal-footer">
                    Garantimos a privacidade dos seus dados.
                </div>
            </div>
        </div>
    );
};

export default AppointmentModal;
