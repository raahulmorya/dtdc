import styles from "./quote.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileInvoice } from "@fortawesome/free-solid-svg-icons";

export default function Quote() {
  return (
    <section className={styles.section} id="quotes">
      <div className={styles.row}>
        <p>Get Quote Now</p>
        <div className={styles.col}>
          <FontAwesomeIcon icon={faFileInvoice} size="10x" />

          <form className={styles.form}>
            <input type="number" placeholder="Enter Pickup Pincode" />
            <input type="number" placeholder="Drop Pincode" />
            <input type="number" placeholder="Weight" />
            <input type="number" placeholder="Approximate Dimesion" />
            <input type="tel" placeholder="Your Mobile Number" />
            <button type="submit">Get Quote Now</button>
          </form>
        </div>
      </div>
    </section>
  );
}
