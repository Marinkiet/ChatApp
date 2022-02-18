import { Avatar, Link } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import db from './firebase';
import './SidebarChat.css'


function SidebarChat({ id, name, addNewChat }) {

  //get random avatar string
  const [SEED, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = () => {
    const roomName = prompt("Please enter name for chat room");
    if (roomName) {
      db.collection('Rooms').add({
        name: roomName,
      });
    }
  }
  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <div className='sidebarChat'>
        <Avatar src={`https://avatars.dicebear.com/api/human/${SEED}.svg`} />
        <div className="sidebarChat_info">
          <h2>{name}</h2>
          <p>Last message...</p>
        </div>
      </div>
    </Link>
  ) : (

    <div onClick={createChat}
      className='sidebarChat'>
      <h2>Add new Chat</h2>
    </div>
  );
}
export default SidebarChat
