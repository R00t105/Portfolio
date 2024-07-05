import React from "react";
import "./Contact.css";
import { useState } from "react";
import Lottie from "react-lottie";
import animationData from "../../Assets/Animation - 1719978585348.json";

const Contact = () => {


  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "abd710ff-1fd5-4be8-8e61-dcdb0165429a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  const [input, setInput] = useState({ name: "", email: "", message: "" });

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };



  return (
    <div className="Contact Container">
    <h1 className="SectionTitle">Contact</h1>
    <div className="Content">
      <form onSubmit={onSubmit}>
        <div className="input">
          <label for="name">Name: </label>
          <input
            onChange={(event) => {
              setInput({ ...input, name: event.target.value });
            }}
            value={input.name}
            type="text"
            name="name"
            id="name"
            required
            spellCheck="false"
          />
        </div>
        <div className="input">
          <label for="email">Email: </label>
          <input
            onChange={(event) => {
              setInput({ ...input, email: event.target.value });
            }}
            value={input.email}
            type="email"
            name="email"
            id="email"
            spellCheck="false"
            required
          />
        </div>
        <div className="input">
          <label for="message">Message: </label>
          <textarea
            onChange={(event) => {
              setInput({ ...input, message: event.target.value });
            }}
            value={input.message}
            name="message"
            id="message"
            spellCheck="false"
            required
          />
        </div>
        <button>Send</button>
        <span>{result}</span>
      </form>
      <Lottie options={defaultOptions} height={400} width={400} />
      </div>
    </div>
  );
};

export default Contact;
