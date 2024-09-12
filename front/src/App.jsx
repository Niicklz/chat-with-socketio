import { useEffect, useState } from "react";

import "./App.css";
import { io } from "socket.io-client";
import { ChatContainer } from "./components/ChatContainer/ChatContainer";
import { Header } from "./components/Header/Header";
import { TextInput } from "./components/TextInput/TextInput";
import { UlMessages } from "./components/UlMessages/UlMessages";
import { Messages } from "./components/Messages/Messages";

function App() {
  const URL = "https://chat-with-socketio-xd27.onrender.com";
  const socket = io(URL, {
    reconnection: false,
  });
  const [message, setMessage] = useState("");

  const [Allmessages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("chat_msg", (msg) => {
      setMessages((messages) => [...messages, msg]);
    });

    return () => {
      socket.off("chat_msg");
    };
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    socket.emit("chat_msg", {
      message,
    });
    setMessage("");
  };
  return (
    <ChatContainer>
      <div className="mobile">
        <Header />
        <UlMessages>
          {Allmessages.length > 0 &&
            Allmessages.map((msg, index) => (
              <Messages text={msg.message} key={index} />
            ))}
        </UlMessages>
        <TextInput
          message={message}
          setMessage={setMessage}
          onClick={sendMessage}
        />
      </div>
    </ChatContainer>
  );
}

export default App;
