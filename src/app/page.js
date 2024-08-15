// import Image from "next/image";
import styles from "./page.module.css";
import ContactForm from "./components/ContactForm/ContactForm";
import Map from "./components/map/map";
import Welcome from "./components/welcome/welcome";
import TrackPackage from "./components/trackPackage/trackPackage";
import Quote from "./components/quote/quote";



export default function Home() {
  return (
    <main className={styles.fullContainer}>
     <Welcome/>
     <div className={styles.row}>
     <Quote/>
      <TrackPackage/>
      </div>
      <ContactForm/>
      <Map/>
    </main>
  );
}
