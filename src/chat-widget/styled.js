import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;
export const UserBox = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  //width: 260px;
  height: 857px;
  background-color: #444753;
`;
export const ChatBox = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 490px;
  background: #f2f5f8;
`;
export const Search = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  position: relative;
  padding: 20px;
  .search {
    position: absolute;
    padding: 5px;
    right: 20px;
  }
  .close {
    position: absolute;
    padding: 5px;
    right: 20px;
    cursor: pointer;
  }
  input {
    align-items: center;
    width: 100%;
    height: 30px;
    border: none;
    outline: none;
    left: -43px;
    border-radius: 3px;
    padding: 0px 30px 0px 10px;
  }
`;
export const UserList = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  padding: 20px;
`;
export const UserContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
`;
export const UserPhoto = styled.div`
  display: flex;
  margin-right: 10px;
  img {
    border-radius: 55px;
    border: 4px solid #6b6f78;
    width: var(--size);
    height: var(--size);
    --size: 55px;
  }
`;
export const About = styled.div`
  display: flex;
  flex-direction: column;
`;
export const NameUser = styled.div`
  display: flex;
  color: #fff;
  margin-bottom: 5px;
`;
export const StatusUser = styled.div`
  display: flex;
  align-items: center;
  color: #92959e;
`;
export const StatusContainer = styled.div`
  display: flex;
  align-items: center;
  svg {
    margin-right: 5px;
    --size: 8px;
    width: var(--size);
    height: var(--size);
    ${({ status }) => {
      switch (status) {
        case "offline":
          return "color: #E38968;";
        case "online":
          return "color: #86BB71;";
        default:
          return "color: #eee;";
      }
    }}
  }
`;
export const ChatHeader = styled.div`
  display: flex;
  height: 60px;
  align-items: center;
  padding: 20px;
  border-bottom: 2px solid white;
  img {
    border-radius: 55px;
    border: 4px solid #5dbc6b;
    margin-right: 20px;
    width: var(--size);
    height: var(--size);
    --size: 55px;
  }
  svg {
    margin-left: auto;
    fill: #d8dadf;
    width: var(--size);
    height: var(--size);
    --size: 20px;
    cursor: pointer;
  }
`;
export const ChatAbout = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ChatInterlocutor = styled.div`
  display: flex;
  align-items: center;
  color: #434651;
  font-weight: 500;
  font-size: 16px;
`;
export const ChatMessages = styled.div`
  display: flex;
  color: #92959e;
  font-size: 14px;
`;
export const ChatHistory = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 30px 20px;
  border-bottom: 2px solid white;
  overflow-y: scroll;
  height: 500px;
`;
export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const AboutMessage = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-left: ${({ outMsg }) => (outMsg ? "none" : "auto")};
  margin-bottom: 30px;
`;
export const DataTime = styled.div`
  display: flex;
  margin-right: 10px;
  color: #a8aab1;
  font-size: 14px;
`;
export const NameMessage = styled.div`
  display: flex;
  font-weight: 500;
`;
export const ChatMessage = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: ${({ userMessages }) =>
    userMessages ? "#86BB71" : "#94C2ED"};
  padding: 18px 20px;
  color: white;
  line-height: 26px;
  font-size: 16px;
  border-radius: 7px;
  margin-bottom: 30px;
  width: 90%;
  word-break: break-word; /*{
  :after {
    content: " ";
    position: absolute;
    pointer-events: none;
    height: 0px;
    width: 0px;
    margin-left: -10px;
    bottom: 85%;
    border: 20px solid transparent;
    border-bottom: ${({ userMessages }) =>
      userMessages ? "25px solid #86BB71" : "25px solid #94C2ED"};
    left: ${({ userMessages }) => (userMessages ? "12%" : "85%")};
  }
}*/
`;
export const InputChat = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  padding: 20px;
  input {
    width: 100%;
    box-sizing: border-box;
    border: none;
    outline: none;
    padding: 10px 20px;
    font-size: 16px;
    margin-bottom: 10px;
    resize: none;
    border-radius: 10px;
    box-shadow: 0px 0px 30px 5px rgba(119, 122, 124, 0.14);
  }
`;
export const Button = styled.button`
  display: flex;
  color: #94c2ed;
  font-size: 16px;
  text-transform: uppercase;
  border: none;
  outline: none;
  cursor: pointer;
  font-weight: 700;
  background: transparent;
  margin-left: auto;
  padding: 10px;
  :hover {
    color: #75b1e8;
  }
`;
