import React from "react";
import { useState } from "react";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";

const NormalForm = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [pan, setPan] = useState("");
  const [frontAdhar, setFrontAdhar] = useState("");
  const [backAdhar, setBackAdhar] = useState("");

  function toggleMenu() {
    var navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
  }

  const uploadPanCard = (e) => {
    const formData = new FormData();
    formData.append("file", e[0]);
    formData.append("upload_preset", "free_lancing");

    axios
      .post("https://api.cloudinary.com/v1_1/sudevkumar/image/upload", formData)
      .then((res) => {
        setPan(res?.data?.url);
        toast.success("Pancard upload successfully!");
      });
  };

  const uploadFrontAdherCard = (e) => {
    const formData = new FormData();
    formData.append("file", e[0]);
    formData.append("upload_preset", "free_lancing");

    axios
      .post("https://api.cloudinary.com/v1_1/sudevkumar/image/upload", formData)
      .then((res) => {
        setFrontAdhar(res?.data?.url);
        toast.success("Adharcard upload successfully!");
      });
  };

  const uploadBackAdherCard = (e) => {
    const formData = new FormData();
    formData.append("file", e[0]);
    formData.append("upload_preset", "free_lancing");

    axios
      .post("https://api.cloudinary.com/v1_1/sudevkumar/image/upload", formData)
      .then((res) => {
        setBackAdhar(res?.data?.url);
        toast.success("Adharcard upload successfully!");
      });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name,
      address,
      message,
      pan,
      frontAdhar,
      backAdhar,
    };

    try {
      const res = await axios.post(
        "http://localhost:8080/api/v1/message/send",
        payload
      );

      toast.success("Message send successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
  };
  return (
    <>
      <Toaster />
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
      <nav class="navbar">
        <div class="hamburger" onClick={toggleMenu}>
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div>
        <h1>R.K. Associates</h1>
        <div class="nav-links">
          <a href="#">GST Form</a>
          <a href="#">ITR Form</a>
          <a href="#">TDS Form</a>
          <a href="#">Client Info Form</a>
        </div>
      </nav>
      <div class="container">
        <h2> Client Information Form </h2>
        <form
          action="#"
          method="post"
          enctype="multipart/form-data"
          onSubmit={handleFormSubmit}
        >
          <label for="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            onChange={(e) => setName(e.target.value)}
          />
          <label for="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            required
            onChange={(e) => setAddress(e.target.value)}
          />
          <label for="message">Message:</label>
          <textarea
            id="message"
            name="message"
            required
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <label for="pan">PAN Card:</label>
          <input
            type="file"
            id="pan"
            name="pan"
            accept=".jpg,.jpeg,.png,.pdf"
            onChange={(e) => uploadPanCard(e.target.files)}
          />
          <label for="aadhar">Front Aadhar Card:</label>
          <input
            type="file"
            id="aadhar"
            name="aadhar"
            onChange={(e) => uploadFrontAdherCard(e.target.files)}
          />

          <label for="aadhar">Back Aadhar Card:</label>
          <input
            type="file"
            id="aadhar"
            name="aadhar"
            onChange={(e) => uploadBackAdherCard(e.target.files)}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
};

export default NormalForm;
