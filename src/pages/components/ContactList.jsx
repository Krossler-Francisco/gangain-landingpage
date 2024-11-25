import { useState, useEffect } from "react";
import "./apisearch.css"

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openMessageId, setOpenMessageId] = useState(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch("https://gangain.vercel.app/api/contact");
        if (!response.ok) {
          throw new Error("Erro ao buscar os dados");
        }
        const data = await response.json();
        setContacts(data); // Atualiza os contatos
        setLoading(false); // Finaliza carregamento
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  if (loading) return <p>Carregando...</p>; // Exibe enquanto carrega
  if (error) return <p>Erro: {error}</p>; // Exibe erros

  const toggleMessage = (id) => {
    setOpenMessageId((prevId) => (prevId === id ? null : id)); // Alterna entre abrir e fechar
  };

  return (
    <div className="api_container">
      <h1>Lista de Contatos</h1>
      {contacts.length > 0 ? (
        <ul>
          {contacts.map((contact) => (
            <li key={contact._id} style={{ marginBottom: "15px", cursor: "pointer" }}>
              <div onClick={() => toggleMessage(contact._id)}>
                <p><strong>Nome:</strong> {contact.name}</p>
                <p><strong>Email:</strong> {contact.email}</p>
              </div>
              {openMessageId === contact._id && (
                <div>
                  <p><strong>Mensagem:</strong> {contact.message}</p>
                  <p>
                    <strong>Criado em:</strong>{" "}
                    {new Date(contact.createdAt).toLocaleString()}
                  </p>
                </div>
              )}
              <hr />
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhum contato encontrado.</p>
      )}
    </div>
  );
};

export default ContactList;
