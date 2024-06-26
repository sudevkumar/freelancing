import React, { useEffect, useState } from "react";
import "./GetUserMessage.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import Modal from "../../components/Modal/Modal";

const GetUserMessage = () => {
  const { id } = useParams();
  const [msg, setMsg] = useState("");
  const [urls, setUrls] = useState("");
  const [modal, setModal] = useState(false);

  const getAMessage = async () => {
    try {
      // const res = await axios.get(
      //   `http://localhost:4040/api/v1/message/get/${id}`
      // );
      const res = await fetch(
        `http://localhost:8080/api/v1/message/get/${id}`,
        { mode: "cors" }
      );
      const data = await res.json();
      setMsg(data?.messages);
    } catch (error) {
      console.log(error);
    }
  };

  const openModal = (url) => {
    setModal(!modal);
    setUrls(url);
  };

  useEffect(() => {
    getAMessage();
  }, []);
  return (
    <>
      <Navbar />
      <div className="getUserDetails">
        <p>{msg.name},</p>
        <p>{msg.message}</p>
        <div className="getUserDetails__photos">
          {msg.pan && (
            <div onClick={() => openModal(msg.pan)}>
              {!msg?.pan?.includes(".pdf") ? (
                <img src={msg.pan} alt="" />
              ) : (
                <embed src={msg.pan} type="" />
              )}
              <p>{msg?.name}'s Pan</p>
            </div>
          )}

          {msg.frontAdhar && (
            <div onClick={() => openModal(msg.frontAdhar)}>
              {!msg?.frontAdhar?.includes(".pdf") ? (
                <img src={msg.frontAdhar} alt="" />
              ) : (
                <embed src={msg.frontAdhar} type="" />
              )}

              <p>{msg.name}'s Adhar</p>
            </div>
          )}

          {msg.bachAdhar && (
            <div onClick={() => openModal(msg.backAdhar)}>
              {!msg?.backAdhar?.includes(".pdf") ? (
                <img src={msg?.backAdhar} alt="" />
              ) : (
                <embed src={msg?.backAdhar} type="" />
              )}

              <p>{msg?.name}'s Adhar</p>
            </div>
          )}
        </div>
      </div>

      {modal && (
        <Modal
          name={msg?.name}
          card={msg?.pan ? "Pan Card" : "Adhar Card"}
          setModal={setModal}
          modal={modal}
          urls={urls}
        />
      )}
    </>
  );
};

export default GetUserMessage;
