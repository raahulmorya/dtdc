"use client"; // Add this directive at the top of the file to mark it as a Client Component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faMapMarkerAlt,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import ContactFormstyles from "./ContactForm.module.css";

export default function ContactForm() {
  const SendQuery = (e) => {
    e.preventDefault(); // Prevent the default form submission
    console.log("sent");
  };

  return (
    <div className={ContactFormstyles.contact}>
      <p className={ContactFormstyles.para}>
        Inquire Now
        <FontAwesomeIcon icon={faComments} style={{ marginLeft: "8px" }} />
      </p>
      <div className={ContactFormstyles.formpart}>
        <div className={ContactFormstyles.flex}>
          <strong className={ContactFormstyles.strong}>
            <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" color="white" />
            LGF Shop No. 01, Near Sombazar Sadarpur opp. Shiv Mandir Sector 45,
            Noida - 201301 Uttar Pradesh
          </strong>
          <strong className={ContactFormstyles.strong}>
            <FontAwesomeIcon icon={faEnvelope} size="2x" color="white" />{" "}
            info@dtdcexpress.co.in, dharam@dtdcexpress.co.in
          </strong>
          <strong className={ContactFormstyles.strong}>
            <FontAwesomeIcon icon={faPhone} size="2x" color="white" />
            +91 9015632299 / 9999243614
          </strong>
        </div>
        <form className={ContactFormstyles.form} onSubmit={SendQuery}>
          <input
            type="text"
            className={ContactFormstyles.inputs}
            placeholder="ENTER FULL NAME"
          />
          <input
            type="email"
            className={ContactFormstyles.inputs}
            placeholder="EMAIL ADDRESS"
          />
          <input
            type="tel"
            className={ContactFormstyles.inputs}
            placeholder="+91 |"
            name="phone"
          />
          <input
            type="text"
            className={ContactFormstyles.inputs}
            placeholder="SUBJECT"
            name="subject"
          />
          <textarea
            name="message"
            className={ContactFormstyles.inputs}
            rows="6"
            placeholder="MESSAGE"
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}
