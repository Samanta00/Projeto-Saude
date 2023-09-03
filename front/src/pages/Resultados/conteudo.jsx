import React, { useState } from 'react';
import './styles/styles.css';


const ConteudoResultados = () => {
    const [contacts, setContacts] = useState([
        { id: 1, name: 'Usuário 1' },
        { id: 2, name: 'Usuário 2' },
        { id: 3, name: 'Usuário 3' },
        // Adicione mais contatos conforme necessário
    ]);

    const [selectedContact, setSelectedContact] = useState(null);
    const [messageInput, setMessageInput] = useState('');
    const [fileToUpload, setFileToUpload] = useState(null); // Adicione o estado para o arquivo
    const [messages, setMessages] = useState([]);
    const [isImageModalOpen, setImageModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);


    const handleContactClick = (contact) => {
        setSelectedContact(contact);
        // Carregar mensagens deste contato (você pode fazer uma chamada de API aqui)
    };

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFileToUpload(file);
        }
    };
    const openImageModal = (imageSrc) => {
        setSelectedImage(imageSrc);
        setImageModalOpen(true);
    };



    const handleSendMessage = () => {
        if (messageInput.trim() === '' && !fileToUpload) return;

        if (fileToUpload) {
            // Enviar arquivo
            const newFileMessage = {
                file: fileToUpload,
                sender: 'Você',
            };
            setMessages([...messages, newFileMessage]);
            setFileToUpload(null); // Limpar o arquivo após o envio
        } else {
            // Enviar mensagem de texto
            const newMessage = {
                text: messageInput,
                sender: 'Você',
            };
            setMessages([...messages, newMessage]);
        }

        setMessageInput('');
    };



    return (
        <div>
            <div className="resultados-medicos">
                <h1>Resultados Médicos</h1>
            </div>

            <div className="chat-app">
                <div className="contact-list">
                    <h2>Contatos</h2>
                    <ul>
                        {contacts.map((contact) => (
                            <li
                                key={contact.id}
                                onClick={() => handleContactClick(contact)}
                                className={selectedContact === contact ? 'active' : ''}
                            >
                                {contact.name}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="chat-container">
                    {selectedContact ? (
                        <div className="chat">
                            <h2>Conversa com {selectedContact.name}</h2>
                            <div className="message-list">
                                {messages.map((message, index) => (
                                    <div key={index} className="message">
                                        {message.sender === 'Você' ? (
                                            message.text ? (
                                                <>
                                                    <span className="sender">{message.sender}:</span> {message.text}
                                                </>
                                            ) : (
                                                <>
                                                    <span className="sender">{message.sender} enviou um arquivo:</span>
                                                    {message.file.type.includes('image') ? (
                                                        <>
                                                            <div>{/* Espaço para o texto "Você enviou um arquivo" */}</div>
                                                            <img
                                                                src={URL.createObjectURL(message.file)}
                                                                alt="Arquivo enviado"
                                                                className="file-preview clickable"
                                                                onClick={() => openImageModal(URL.createObjectURL(message.file))}
                                                            />
                                                        </>
                                                    ) : (
                                                        <a href={URL.createObjectURL(message.file)} target="_blank" rel="noopener noreferrer">
                                                            Ver arquivo PDF
                                                        </a>
                                                    )}
                                                </>
                                            )
                                        ) : (
                                            // Lógica para mensagens recebidas do outro lado do chat, se necessário
                                            <>
                                                {message.text ? (
                                                    <>
                                                        <span className="sender">{message.sender}:</span> {message.text}
                                                    </>
                                                ) : (
                                                    <>
                                                        <span className="sender">{message.sender} enviou um arquivo:</span>
                                                        {message.file.type.includes('image') ? (
                                                            <>
                                                                <div>{/* Espaço para o texto "Outro Usuário enviou um arquivo" */}</div>
                                                                <img
                                                                    src={URL.createObjectURL(message.file)}
                                                                    alt="Arquivo enviado"
                                                                    className="file-preview"
                                                                />
                                                            </>
                                                        ) : (
                                                            <a href={URL.createObjectURL(message.file)} target="_blank" rel="noopener noreferrer">
                                                                Ver arquivo PDF
                                                            </a>
                                                        )}
                                                    </>
                                                )}
                                            </>
                                        )}
                                    </div>
                                ))}
                            </div>

                            <div className="message-input">
                                <input
                                    type="text"
                                    placeholder="Digite sua mensagem..."
                                    value={messageInput}
                                    onChange={(e) => setMessageInput(e.target.value)}
                                />
                                <input
                                    type="file"
                                    accept=".jpg, .jpeg, .png, .pdf" // Aceitar apenas imagens e PDFs
                                    onChange={(e) => handleFileUpload(e)}
                                />
                                <button onClick={handleSendMessage}>Enviar</button>
                            </div>
                        </div>
                    ) : (
                        <div className="no-contact-selected">Selecione um contato para começar a conversar.</div>
                    )}
                </div>
            </div>
            {isImageModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <span className="close-modal" onClick={() => setImageModalOpen(false)}>
                            Fechar
                        </span>
                        <img
                            src={selectedImage}
                            alt="Imagem em tamanho completo"
                            className="full-size-image"
                        />
                    </div>
                </div>
            )}

        </div>
    )
}

export default ConteudoResultados