import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat'
function App() {
  return (
    <div className="App">
     <h1>Chats</h1>
     <div className="app_body">
       <Sidebar />
       <Chat/>
     </div>
    </div>
  );
}

export default App;
