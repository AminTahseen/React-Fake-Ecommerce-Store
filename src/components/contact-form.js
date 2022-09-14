import { useState } from "react";
const ContactForm = () => {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [messageValue, setMessageValue] = useState("");
  const [errorNameMessage, setNameErrorMessageValue] = useState("");
  const [errorEmailMessage, setEmailErrorMessageValue] = useState("");
  const [errorMessage, setErrorMessageValue] = useState("");

  let errorDiv = null;
  let errorEmailDiv = null;
  let errorMessageDiv = null;

  const handleNameChange = (event) => {
    if (event.target.value === "") {
      setNameErrorMessageValue("Your Name is Required !");
    } else {
      setNameErrorMessageValue("");
    }
    setNameValue(event.target.value);
  };
  const handleEmailChange = (event) => {
    if (event.target.value === "") {
      setEmailErrorMessageValue("Your Email is Required !");
    } else {
      setEmailErrorMessageValue("");
    }
    setEmailValue(event.target.value);
  };
  const handleMessageChange = (event) => {
    if (event.target.value === "") {
      setErrorMessageValue("Your Message Input is Required !");
    } else {
      setErrorMessageValue("");
    }
    setMessageValue(event.target.value);
  };
  const submitForm = () => {
    alert(nameValue + " " + emailValue + " " + messageValue);
  };
  errorNameMessage !== ""
    ? (errorDiv = <p className="p-error">{errorNameMessage}</p>)
    : (errorDiv = null);
  errorEmailMessage !== ""
    ? (errorEmailDiv = <p className="p-error">{errorEmailMessage}</p>)
    : (errorEmailDiv = null);
  errorMessage !== ""
    ? (errorMessageDiv = <p className="p-error">{errorMessage}</p>)
    : (errorMessageDiv = null);
  return (
    <div className="about-section-details-section2">
      <div className="contact-section-flex">
        <input
          type="text"
          placeholder="Your name"
          onChange={handleNameChange}
        />
        {errorDiv}
      </div>
      <div className="contact-section-flex">
        <input
          type="text"
          placeholder="Your email address"
          onChange={handleEmailChange}
        />
        {errorEmailDiv}
      </div>
      <div className="contact-section-flex">
        <textarea
          name="comment"
          form="usrform"
          placeholder="Any Message"
          onChange={handleMessageChange}
        ></textarea>
        {errorMessageDiv}
      </div>

      <div className="contact-section-flex">
        <button onClick={submitForm}>Submit</button>
      </div>
    </div>
  );
};
export default ContactForm;
