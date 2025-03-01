import React, { useEffect, useState } from 'react';
import './ContactMessages.css';

const ContactMessages = () => {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://gangain.vercel.app/api/contact.js')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al obtener los mensajes');
                }
                return response.json();
            })
            .then(data => {
                setMessages(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <p className="loading">Cargando mensajes...</p>;
    if (error) return <p className="error">Error: {error}</p>;

    return (
        <div className="contact-container">
            <h2>Mensajes de Contacto</h2>
            <ul className="message-list">
                {messages.map(msg => (
                    <li key={msg._id} className="message-item">
                        <h3>{msg.name}</h3>
                        <p><strong>Email:</strong> {msg.email}</p>
                        <p><strong>Mensaje:</strong> {msg.message}</p>
                        <p className="date">{new Date(msg.createdAt).toLocaleString()}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ContactMessages;
