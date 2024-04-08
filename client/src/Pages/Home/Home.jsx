import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Clients from "../../components/clients/Clients";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [msg, setMsg] = useState([]);

  const getAllMessages = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/v1/message/get");
      setMsg(res?.data?.messages);

      console.log(res?.data?.messages);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllMessages();
  }, []);
  return (
    <div>
      <Navbar msg={msg} setMsg={setMsg} getAllMessages={getAllMessages} />
      <Clients msg={msg} setMsg={setMsg} getAllMessages={getAllMessages} />
    </div>
  );
};

export default Home;
