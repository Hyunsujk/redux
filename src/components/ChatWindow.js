import React from "react";
import store from "../store";
import Header from "../components/Header";
import Charts from "../components/Charts";

const ChatWindow = ({ activeUserId }) => {
  const state = store.getState();
  const activeUser = state.contacts[activeUserId];

  return (
    <div className="ChatWindow">
      <Header user={activeUser} />
      <Charts />
    </div>
  );
};

export default ChatWindow;
