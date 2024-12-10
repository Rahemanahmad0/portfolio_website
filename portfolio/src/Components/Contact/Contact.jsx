import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8a1a76b6-fd13-4765-aec8-f8439ffa82e1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      alert(data.message);
      // setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div id="contact" className="contact">
      <div className="contact-Title">
        <h1>Get in Touch</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>Feel free to reach out to me anytime. I'd love to hear from you</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>9777121109</p>
            </div>

            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>skrahemanahmad@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" /> <p>pondicherry,India</p>
            </div>
          </div>
        </div>

        <div className="contact-right">
          <form  onSubmit={onSubmit} >
            <label htmlFor="">Your name</label>
            <input type="text" placeholder="Enter your name" name="name" />
            <label htmlFor="">Your Email</label>
            <input type="text" placeholder="Enter your E-mail" name="email" />
            <label htmlFor="">Write your msg here..</label>
            <textarea name="message" rows={8} placeholder="Enter your msg...">
            </textarea>
            <button type="submit" className="contact-submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
