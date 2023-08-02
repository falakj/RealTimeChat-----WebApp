import  { useState } from "react";
//import GroupChat from "./GroupChat";

const CreateGroupButton = () => {
  const [showGroupChat, setShowGroupChat] = useState(false);

  const handleToggleGroupChat = () => {
    setShowGroupChat((prevShowGroupChat) => !prevShowGroupChat);
  };

  return (
    <div>
      <button onClick={handleToggleGroupChat}>Create Group</button>
      {showGroupChat}
    </div>
  );
};

export default CreateGroupButton;
