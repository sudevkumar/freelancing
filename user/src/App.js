import { useState } from "react";
import "./App.css";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";

function App() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [pan, setPan] = useState([]);
  const [adhar, setAdhar] = useState([]);

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
      .then((res) => console.log(res));
    // .then((res) => setPan(res?.data?.url));
  };

  const uploadAdherCard = (e) => {
    const formData = new FormData();
    formData.append("file", e[0]);
    formData.append("upload_preset", "free_lancing");

    axios
      .post("https://api.cloudinary.com/v1_1/sudevkumar/image/upload", formData)
      .then((res) => setAdhar(res?.data?.url));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name,
      address,
      message,
      pan,
      adhar,
    };

    try {
      const res = await axios.post(
        "http://localhost:8080/api/v1/message/send",
        payload
      );

      console.log(res);
    } catch (error) {
      console.log(error);
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
            required
          />
          <label for="aadhar">Aadhar Card:</label>
          <input
            type="file"
            id="aadhar"
            name="aadhar"
            required
            onChange={(e) => uploadAdherCard(e.target.files)}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
}

export default App;
