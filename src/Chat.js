import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, InsertEmoticon, Mic } from '@material-ui/icons';
import MoreVert from '@material-ui/icons/MoreVert';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import React, { useEffect, useState } from 'react';
import './Chat.css';


function Chat() {

  const [INPUT,setInput] = useState("");
  const [SEED,setSeed] = useState("");

  useEffect(()=>{
    setSeed(Math.floor(Math.random()*5000));
  },[]);
 
  const sendMessage =(e)=>{
    e.preventDefault();
    console.log('you typed >>>>>',INPUT); //view whats inside INPUT varaible

    setInput(''); //clear input after enter
  }
  return (
  <div  className='chat'>

      <div className='chat_header'>
        <Avatar src={`https://avatars.dicebear.com/api/human/${SEED}.svg`}/>
     
        <div  className='chat_header_Info'>
            <h3>Room name</h3>
            <p>last seen at...</p>
        </div>

          <div  className='chat_headerRight'>
              <IconButton>
              <SearchOutlined/>
              </IconButton>

              <IconButton>
                <AttachFile/>
              </IconButton>
            
              <IconButton>
                <MoreVert/>
              </IconButton>
          </div>
      </div>
        
          <div className='chat_body'>
            <p className={`chat_Message ${true && 'chat-receiver'}`}> 
            <span className='chat_name'>
                Chagt bhfbjhf
              </span>
              
              hello there world
              <span className='time_stamp'>
                10:05pm
              </span>
            </p>
            <p className='chat_Message'>
              hello there galaxy
            </p>
          </div>
          
          <div className='chat_footer'>
            <InsertEmoticon/>
            <form>

              <input 
              value={INPUT} 
              onChange={e => setInput(e.target.value)} 
              type="text" 
              placeholder='Type a message'/>

              <button 
              type='submit' 
              onClick={sendMessage} >Send message</button>
            </form>
            <Mic/>
           
          </div>

  </div>
 );
}

export default Chat;
