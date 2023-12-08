export const Chat = () => {
    
    const handleSubmit=()=>{};

    return (
        <div className="chat-app">
            <form onSubmit={handleSubmit} className="new-message-form">
                <input 
                className="new-message-form"
                placeholder="Type your message here..."
                />
                <button type="submit" className="send-button">
                    Send
                </button>
            </form>
        </div>
    );
}