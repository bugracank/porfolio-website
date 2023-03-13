import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

const Contact = () => {
  const form = useRef();
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");

  const onInput = (e) => setValue1(e.target.value);
  const onInput1 = (e) => setValue2(e.target.value);
  const onInput2 = (e) => setValue3(e.target.value);

  const onClear = () => {
    setValue1("");
    setValue2("");
    setValue3("");
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vd4fu1p",
        "template_8k8m48p",
        form.current,
        "l98YFxkU4UaWCeEHV"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("E-mail sent successfully! :)");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact" className="contact-container">
      <h2 className="contact-header">
        Feel free to contact me via <span className="name"> form </span> below!!
      </h2>
      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <div className="inner-contact-form">
          <label className="contact-label">Name</label>
          <input
            value={value1}
            onInput={onInput}
            type="text"
            name="user_name"
          />
        </div>
        <div className="inner-contact-form">
          <label className="contact-label">Email</label>
          <input
            value={value2}
            onInput={onInput1}
            type="email"
            name="user_email"
          />
        </div>
        <div className="inner-contact-form">
          <label className="contact-label">Message</label>
          <textarea value={value3} onInput={onInput2} name="message" />
        </div>

        <input
          onClick={onClear}
          className="form-button"
          type="submit"
          value="Send"
        />
      </form>
    </div>
  );
};
export default Contact;
