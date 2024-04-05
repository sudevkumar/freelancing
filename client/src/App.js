import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import { Toaster } from "react-hot-toast";
import GetUserMessage from "./Pages/GetUserMessage/GetUserMessage";


function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/usermessage/:id" element={<GetUserMessage />} />
      </Routes>
      
    </>
  );
}

export default App;
