import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat'
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Chats</h1>
      <div className="app_body">
        <Sidebar />
        <Routes>
          <Route path="/rooms/:roomId" element={<Chat />}></Route>
          <Route path="/" element={<Chat />}></Route>

        </Routes>


      </div>
    </div>
  );
}

export default App;

//<Route path="/" element={[<Sidebar />, <Chat />]}></Route>

