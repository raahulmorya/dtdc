"use client"; // Add this directive at the top of the file to mark it as a Client Component

import ContactFormstyles from "./ContactForm.module.css";

export default function ContactForm() {
  const SendQuery = (e) => {
    e.preventDefault(); // Prevent the default form submission
    console.log("sent");
  };

  return (
    <div className={ContactFormstyles.contact}>
      <p className={ContactFormstyles.para}>Inquire Now</p>
      {/* <i className="fas fa-map-marker-alt" style={{ fontSize: "60px", color: "red" }}></i> */}
      <div className={ContactFormstyles.formpart}>
        <div className={ContactFormstyles.flex}>
          <strong>
            LGF Shop No. 01, Near Sombazar Sadarpur opp. Shiv Mandir Sector 45,
            Noida - 201301 Uttar Pradesh
          </strong>
          <strong>info@dtdcexpress.co.in, dharam@dtdcexpress.co.in</strong>
          <strong>+91 9015632299 / 9999243614</strong>
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
