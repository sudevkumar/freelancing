import React, { useEffect, useState } from "react";
import "./Clients.css";
import { clients } from "../../Utils/utils";
import { FaRegHeart } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Clients = ({ msg, getAllMessages }) => {
  const lsUser = JSON.parse(localStorage.getItem("freeLanceToken"));
  const navigate = useNavigate();

  const deleteAMessage = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/v1/message/delete/${id}`);
      getAllMessages();
      toast.success("Message deleted successfully!");
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <section className="client">
      {msg?.length === 0 ? (
        <>
          <h1>You have no message yet!</h1>
        </>
      ) : (
        <>
          {lsUser ? (
            <>
              <h1>Your Recent Clients</h1>
              <hr />
              {msg?.map((ele, ind) => (
                <div className="client__grid">
                  <span>
                    <FaRegHeart />
                  </span>
                  <p onClick={() => navigate(`/usermessage/${ele?._id}`)}>
                    {ele?.name}
                  </p>
                  {ele?.message.length > 100 ? (
                    <p onClick={() => navigate(`/usermessage/${ele?._id}`)}>
                      {ele?.message?.substring(0, 100)}...
                    </p>
                  ) : (
                    <p onClick={() => navigate(`/usermessage/${ele?._id}`)}>
                      {ele?.message}
                    </p>
                  )}
                  <span onClick={() => deleteAMessage(ele?._id)}>
                    <MdDelete />
                  </span>
                </div>
              ))}
            </>
          ) : (
            <>
              <h1>You are not authorized to access this page! Login First!</h1>
            </>
          )}
        </>
      )}
    </section>
  );
};

export default Clients;
