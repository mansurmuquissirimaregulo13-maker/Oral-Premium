import { useState, type FormEvent } from 'react';
import { X, Send } from 'lucide-react';
import { useModal } from '../context/ModalContext';
import './AppointmentModal.css';

const AppointmentModal = () => {
    const { isModalOpen, closeModal } = useModal();
    const [formData, setFormData] = useState({
        name: '',
        treatment: '',
        date: '',
        time: ''
    });

    if (!isModalOpen) return null;

    const treatments = [
        "Dor de dente",
        "Limpeza / Check-up",
        "Aparelho Dentário",
        "Implante Dentário",
        "Clareamento",
        "Prótese",
        "Odontopediatria (Crianças)",
        "Outro"
    ];

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const message = `Olá, me chamo *${formData.name}*.\n\nGostaria de agendar uma consulta.\n\n*Motivo:* ${formData.treatment}\n*Preferência de Dia:* ${formData.date}\n*Preferência de Horário:* ${formData.time}`;

        const phoneNumber = "258842199338";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        window.open(whatsappUrl, '_blank');
        closeModal();

        // Reset form (optional)
        setFormData({ name: '', treatment: '', date: '', time: '' });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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

                <h2 className="modal-title">Agendar Consulta</h2>
                <p className="modal-subtitle">Preencha os dados abaixo para agilizar seu atendimento no WhatsApp.</p>

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
                        <label htmlFor="treatment">Qual é o motivo/dor?</label>
                        <select
                            id="treatment"
                            name="treatment"
                            className="form-select"
                            required
                            value={formData.treatment}
                            onChange={handleChange}
                            style={{ width: '100%' }}
                        >
                            <option value="">Selecione uma opção</option>
                            {treatments.map(t => (
                                <option key={t} value={t}>{t}</option>
                            ))}
                        </select>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div className="form-group">
                            <label htmlFor="date">Data Preferida</label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                className="form-input"
                                required
                                value={formData.date}
                                onChange={handleChange}
                                style={{ width: '100%' }}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="time">Horário Preferido</label>
                            <input
                                type="time"
                                id="time"
                                name="time"
                                className="form-input"
                                required
                                value={formData.time}
                                onChange={handleChange}
                                style={{ width: '100%' }}
                            />
                        </div>
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
