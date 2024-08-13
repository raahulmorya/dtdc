import ContactForm from "../components/ContactForm/ContactForm";
import ContactUsStyles from "./contactus.module.css";
import Map from "../components/map/map";
export default function contactus(){
    return (
      <div className={ContactUsStyles.center}>
        <h1>Contact us</h1>
        <p>
          For Any Queries or Questions
          <br /> Feel Free to Contact Us
          <br /> We're Happy to Help!
        </p>
        <ContactForm />
        <Map />
      </div>
    );
}