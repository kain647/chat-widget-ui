import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { FaCircle, FaStar } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import {
  Container,
  UserBox,
  ChatBox,
  Search,
  UserList,
  UserContainer,
  UserPhoto,
  About,
  NameUser,
  StatusUser,
  StatusContainer,
  ChatHeader,
  ChatAbout,
  ChatInterlocutor,
  ChatMessages,
  ChatHistory,
  MessageContainer,
  AboutMessage,
  DataTime,
  NameMessage,
  ChatMessage,
  InputChat,
  Button
} from "./styled";

const Chat = () => {
  const users = [
    {
      photo: "EstáciodaCunha.jpg",
      name: "Estácio da Cunha",
      status: "online"
    },
    {
      photo: "MatthiasLærum.jpg",
      name: "Matthias Lærum",
      status: "online"
    },
    {
      photo: "PaulaGonzalez.jpg",
      name: "Paula Gonzalez",
      status: "online"
    },
    {
      photo: "ZackaryOuellet.jpg",
      name: "Zackary Ouellet",
      status: "offline"
    },
    {
      photo: "HillaJarvi.jpg",
      name: "Hilla Jarvi",
      status: "online"
    },
    {
      photo: "AubreePatel.jpg",
      name: "Aubree Patel",
      status: "offline"
    },
    {
      photo: "JanetBishop.jpg",
      name: "Janet Bishop",
      status: "offline"
    },
    {
      photo: "KurtFreeman.jpg",
      name: "Kurt Freeman",
      status: "online"
    },
    {
      photo: "MatiasPulkkinen.jpg",
      name: "Matias Pulkkinen",
      status: "online"
    }
  ];

  const initMessages = [
    {
      dataTime: "10:10 AM, Today",
      name: "Gabriel Cruz",
      chatMessage:
        "Hi Herbert Clark, how are you? How is the project coming along?"
    }
  ];
  const outMessages = [
    {
      dataTime : "15:30 PM, Now",
      name: "Herbert Clark"
    }
  ]

  const [search, setSearch] = useState("");

  const ShowClose = search !== "";

  // start
  const [messages, setMessages] = useState(initMessages);
  const [newMessage, setNewMessage] = useState("");
  const changeMessage = e => setNewMessage(e.target.value);
  const addMessage = () => {
    if (newMessage === "") return;
    const box = {
      chatMessage: newMessage,
      owner: "user"
    };
    const newBox = [...messages, box];
    setMessages(newBox);
    setNewMessage("");
  };
  // end

  return (
    <Container>
      <UserBox>
        <Search>
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={e => {
              setSearch(e.target.value);
            }}
          />
          {ShowClose ? (
            <IoClose className="close" onClick={() => setSearch("")} />
          ) : (
            <BiSearch className="search" />
          )}
        </Search>
        <UserList>
          {users
            .filter(users => {
              return (
                search === "" ||
                users.name.toLowerCase().includes(search.toLowerCase())
              );
            })
            .map(user => {
              return <User {...user} key={user.name} />;
            })}
        </UserList>
      </UserBox>
      <ChatBox>
        <ChatHeader>
          <img src={`/upload/HerbertClark.jpg`} alt="user" />
          <ChatAbout>
            <ChatInterlocutor>Herbert Clark</ChatInterlocutor>
            <ChatMessages>already 1 902 messages</ChatMessages>
          </ChatAbout>
          <FaStar />
        </ChatHeader>
        <ChatHistory>
          {messages.map(message => {
            return <Message {...message} key={message.chatMessage} />;
          })}
        </ChatHistory>
        <InputChat>
          <input
            placeholder="Type your message"
            value={newMessage}
            onChange={changeMessage}
          />
          <Button onClick={addMessage}>Send</Button>
        </InputChat>
      </ChatBox>
    </Container>
  );
};

const User = React.memo(props => {
  const { photo, name, status, user } = props;
  return (
    <UserContainer user={user}>
      <UserPhoto>
        <img src={`/upload/${photo}`} alt="user" />
      </UserPhoto>
      <About>
        <NameUser>{name}</NameUser>
        <StatusContainer status={status}>
          <FaCircle />
          <StatusUser>{status}</StatusUser>
        </StatusContainer>
      </About>
    </UserContainer>
  );
});
const Message = React.memo(props => {
  const { dataTime, name, chatMessage, owner } = props;
  return (
    <MessageContainer>
      <AboutMessage>
        <DataTime>{dataTime}</DataTime>
        <NameMessage>{name}</NameMessage>
      </AboutMessage>
      <ChatMessage userMessages={owner === "user"}>{chatMessage}</ChatMessage>
    </MessageContainer>
  );
});
export default Chat;
