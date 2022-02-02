import { Avatar } from '@material-ui/core';
import React, { useEffect,useState } from 'react';
import './SidebarChat.css'



function SidebarChat() {

    //get random avatar string
    const [SEED,setSeed] = useState('');
    useEffect(()=>{
     setSeed(Math.floor(Math.random() * 5000));
    },[])

  return <div className='sidebarChat'>
     <Avatar src={`https://avatars.dicebear.com/api/human/${SEED}.svg`}/>
     <div className="sidebarChat_info">
         <h2>User Name</h2>
         <p>Last message...</p>
     </div>
  
  </div>
}

export default SidebarChat;
