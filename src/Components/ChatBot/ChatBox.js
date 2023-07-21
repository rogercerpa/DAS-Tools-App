import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ChatBox() {
    const [currentChat, setCurrentChat] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

     // Mock chats data
    const [chats, setChats] = useState(['Chat 1', 'Chat 2', 'Chat 3']);

    useEffect(() => {
        if (currentChat) {
            // Fetch messages for the current chat
            // This is a mock and should be replaced with actual API call
            setMessages([
                { id: 1, user: 'User', text: 'Hello', timestamp: new Date() },
                { id: 2, user: 'AI', text: 'Hello, how can I help you?', timestamp: new Date() }
            ]);
        }
    }, [currentChat]);

    const handleSendMessage = async (event) => {
        event.preventDefault();

        if (newMessage.trim() !== '') {
            // Send message to AI API and get response
            const response = await axios.post('https://your-ai-api.com', {
                message: newMessage
            });

            setMessages([...messages, { user: 'User', text: newMessage, timestamp: new Date() },
            { user: 'AI', text: response.data.message, timestamp: new Date() }]);
            setNewMessage('');
        }
    };

    const deleteChat = (chatToDelete) => {
        setChats(chats.filter(chat => chat !== chatToDelete));
    
        // If the current chat is the one we're deleting, unset it
        if (currentChat === chatToDelete) {
            setCurrentChat(null);
        }
    };
    

    return (
        <div className="flex h-screen bg-gray-200">
            <div className="w-1/4 bg-white">

            <div className="p-4 border-b border-gray-200">
                    <button
                        className="p-2 bg-blue-500 text-white rounded"
                        onClick={() => {
                            const newChat = `Chat ${chats.length + 1}`;
                            setChats([...chats, newChat]);
                            setCurrentChat(newChat);
                        }}
                    >
                        Start New Chat
                    </button>
                </div>

                {chats.map((chat) => (
                    <div>
                    <div
                        key={chat}
                        className={`p-4 hover:bg-gray-100 cursor-pointer ${currentChat === chat ? 'bg-gray-100' : ''}`}
                        onClick={() => setCurrentChat(chat)}
                    >
                        <div>{chat}</div>
                        
                    </div>
                    <button onClick={(e) => { e.stopPropagation(); deleteChat(chat); }} className="text-red-500">Delete</button>
                    </div>
                ))}
            </div>
            <div className="w-3/4">
                {currentChat ? (
                    <div>
                        <div className="p-4 border-b border-gray-200">
                            <h2 className="text-xl font-bold">{currentChat}</h2>
                        </div>
                        <div className="p-4 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 128px)' }}>
                            {messages.map((message) => (
                                <div key={message.id} className="mb-4">
                                    <div className="font-bold">{message.user}</div>
                                    <div>{message.text}</div>
                                    <div className="text-xs text-gray-500">{message.timestamp.toLocaleString()}</div>
                                </div>
                            ))}
                        </div>
                        <div className="p-4 border-t border-gray-200">
                            <form onSubmit={handleSendMessage}>
                                <input
                                    className="w-full p-2 border rounded"
                                    type="text"
                                    placeholder="Type a message"
                                    value={newMessage}
                                    onChange={(e) => setNewMessage(e.target.value)}
                                />
                            </form>
                        </div>
                    </div>
                ) : (
                    <div className="flex items-center justify-center h-full">
                        <div className="text-gray-500">Select a chat to start messaging</div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ChatBox;
