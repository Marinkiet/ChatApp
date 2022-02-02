import React from 'react';
import {Avatar, IconButton} from '@material-ui/core';
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import SidebarChat from './SidebarChat';
import './Sidebar.css';


function Sidebar() {
  return (
  <div className='sidebar'>
   
      <div className='sidebar_header'>
        <Avatar/>
        <div className="sidebar_headerRight">

            <IconButton>
            <DonutLargeIcon/>
            </IconButton>

            <IconButton>
            <ChatIcon/>
            </IconButton>

            <IconButton>
            <MoreVertIcon/>
            </IconButton>

        </div>
      </div>
      <div className='sidebar_search'>

          <div className="sidebar_SearchContainer">
          <SearchOutlined/>
          <input type="text" placeholder='Search or start new chat'/>
          </div>
          

      </div>
      <div className='sidebar_chats'>
          <SidebarChat/>
          <SidebarChat/>
          <SidebarChat/>


      </div>
  </div>
  )
}

export default Sidebar;
