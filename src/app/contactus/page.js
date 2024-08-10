import ContactForm from "../components/ContactForm/ContactForm";
import ContactUsStyles from "./contactus.module.css";

export default function contactus(){
    return (
      <div className={ContactUsStyles.center}>
        <h1>Contact us</h1>
        <p>
          FOR ANY QUERIES OR QUESTIONS<br/> FEEL FREE TO CONTACT US<br/> WE'RE HAPPY TO
          HELP!
        </p>

        <ContactForm />
      </div>
    );
}