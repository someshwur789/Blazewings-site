import React, { useState } from 'react';
import { sendEmail, CustomerDetails } from '../utils/emailService';
import { saveUserDetails } from '../utils/apiService';

interface Message {
    sender: 'Phaiya' | 'user';
    text: string;
}

const compoundOptions = [
    "Compound A",
    "Compound B",
    "Compound C",
    "Compound D"
];

const Chatbot: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([
        { sender: 'Phaiya', text: 'Hi, How can I assist you?' },
        { sender: 'Phaiya', text: 'Please select a compound:' }
    ]);
    const [stage, setStage] = useState<number>(0);
    const [selectedCompound, setSelectedCompound] = useState<string>('');
    const [userInput, setUserInput] = useState<string>('');
    const [customerDetails, setCustomerDetails] = useState<CustomerDetails>({
        name: '',
        email: '',
        mobile: '',
        message: ''
    });

    const addMessage = (sender: 'Phaiya' | 'user', text: string) => {
        setMessages((prev) => [...prev, { sender, text }]);
    };

    // Handle compound button click
    const handleCompoundClick = (compound: string) => {
        setSelectedCompound(compound);
        addMessage('user', compound);
        addMessage('Phaiya', `You selected: ${compound}`);
        setStage(1);
        setTimeout(() => {
            addMessage('Phaiya', 'Please describe your query or requirement for this compound.');
        }, 500);
    };

    // Handle text input for other stages
    const handleUserInput = async () => {
        if (!userInput.trim()) return;
        addMessage('user', userInput);

        if (stage === 1) {
            setCustomerDetails((prev) => ({ ...prev, message: userInput, compound: selectedCompound }));
            addMessage('Phaiya', 'OK');
            setTimeout(() => {
                addMessage('Phaiya', 'Please enter your Name:');
                setStage(2);
            }, 500);
        } else if (stage === 2) {
            setCustomerDetails((prev) => ({ ...prev, name: userInput }));
            addMessage('Phaiya', 'Enter your Email:');
            setStage(3);
        } else if (stage === 3) {
            // Email validation
            if (!userInput.includes('@')) {
                addMessage('Phaiya', 'Please enter a valid email address (must contain @).');
                return;
            }
            setCustomerDetails((prev) => ({ ...prev, email: userInput }));
            addMessage('Phaiya', 'Enter your Mobile Number:');
            setStage(4);
        } else if (stage === 4) {
            // Mobile validation
            if (!/^\d{10}$/.test(userInput)) {
                addMessage('Phaiya', 'Please enter a valid 10-digit mobile number.');
                return;
            }
            const updatedDetails = { ...customerDetails, mobile: userInput, compound: selectedCompound };
            setCustomerDetails(updatedDetails);
            addMessage('Phaiya', 'Thank you! We have received your details.');
            try {
                await saveUserDetails(updatedDetails); // Save to database
                await sendEmail(updatedDetails);       // Send email to company
                addMessage('Phaiya', 'Your query has been submitted successfully!');
            } catch (error) {
                addMessage('Phaiya', 'Failed to send your query. Please try again.');
            }
            setStage(0);
            setSelectedCompound('');
            setTimeout(() => {
                addMessage('Phaiya', 'If you want to start again, please select a compound:');
            }, 1000);
        }
        setUserInput('');
    };

    return (
        <div style={chatbotContainerStyle}>
            <div style={messagesContainerStyle}>
                {messages.map((msg, index) => (
                    <div key={index} style={{ textAlign: msg.sender === 'Phaiya' ? 'left' : 'right', marginBottom: '5px' }}>
                        <strong style={{ color: msg.sender === 'Phaiya' ? 'black' : 'inherit' }}>
                            {msg.sender === 'Phaiya' ? 'Phaiya' : 'You'}:
                        </strong> {msg.text}
                    </div>
                ))}
                {/* Compound selection buttons inside the chat area in 2x2 grid */}
                {stage === 0 && (
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '16px',
                            margin: '20px 0'
                        }}
                    >
                        {compoundOptions.map((compound) => (
                            <button
                                key={compound}
                                onClick={() => handleCompoundClick(compound)}
                                style={{
                                    padding: '24px 0',
                                    fontSize: '1.1rem',
                                    borderRadius: '8px',
                                    background: '#6366f1',
                                    color: 'white',
                                    border: 'none',
                                    cursor: 'pointer',
                                    fontWeight: 'bold'
                                }}
                            >
                                {compound}
                            </button>
                        ))}
                    </div>
                )}
            </div>
            {/* Text input for other stages */}
            {stage !== 0 && (
                <div style={{ display: 'flex', width: '80vw', maxWidth: 600 }}>
                    <input
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        placeholder="Type here..."
                        style={{ flexGrow: 1, padding: '10px', fontSize: '1rem', borderRadius: '4px', border: '1px solid #ccc' }}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                handleUserInput();
                            }
                        }}
                    />
                    <button onClick={handleUserInput} style={{ marginLeft: '10px', padding: '10px 20px', fontSize: '1rem', borderRadius: '4px', background: '#6366f1', color: 'white', border: 'none' }}>
                        Send
                    </button>
                </div>
            )}
        </div>
    );
};

export default Chatbot;

// Simple Inline Styles
const chatbotContainerStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    border: 'none',
    borderRadius: 0,
    padding: '0',
    backgroundColor: 'white',
    boxShadow: 'none',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
};

const messagesContainerStyle: React.CSSProperties = {
    height: '60vh',
    width: '80vw',
    maxWidth: 600,
    overflowY: 'auto',
    marginBottom: '20px',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '16px',
    padding: '24px',
    background: 'linear-gradient(135deg, #9ec7bbff 10%, #8c9dacff 100%)',
    boxShadow: '0 8px 32px 0 rgba(99,102,241,0.15)',
    color: 'black',
}