// import Image from "next/image";
import styles from "./page.module.css";
import ContactForm from "./components/ContactForm/ContactForm";
import Map from "./components/map/map";

export default function Home() {
  return (
    <main className={styles.fullContainer}>
      <div className={styles.display}>
        Welcome
      </div>
      <ContactForm/>
      <Map/>
    </main>
  );
}
