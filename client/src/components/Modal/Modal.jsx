import React from "react";
import "./Modal.css";
import { GiCancel } from "react-icons/gi";
import { IoMdDownload } from "react-icons/io";

const Modal = ({ name, card, setModal, modal, urls }) => {
  console.log(urls, "urls");
  const downLoadImage = async () => {
    const imageBlob = await fetch(urls)
      .then((res) => res.arrayBuffer())
      .then((buffer) => new Blob([buffer], { type: "image/jpeg" }));

    const link = document.createElement("a");
    link.href = URL.createObjectURL(imageBlob);
    link.download = name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="modal">
      <div className="modal__heading">
        <h3>
          {name}'s {card}
        </h3>

        <div>
          {!urls.includes(".pdf") && (
            <span onClick={downLoadImage}>
              <IoMdDownload size={24} className="download" />
            </span>
          )}

          <span onClick={() => setModal(!modal)}>
            <GiCancel size={24} className="cancel" />
          </span>
        </div>
      </div>

      <hr />

      <div className="modal__image">
        {urls.includes(".pdf") ? (
          <embed src={urls} type="" />
        ) : (
          <img src={urls} alt="" />
        )}
      </div>
    </div>
  );
};

export default Modal;
