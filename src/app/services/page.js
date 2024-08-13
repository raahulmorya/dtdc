import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChess, faRocket, faUsers, faHandshake } from '@fortawesome/free-solid-svg-icons';
import styles from "./Services.module.css";
import Image from 'next/image';
export default function services() {
  return (
    <main className={styles.services}>
      <p>Services</p>
      <div className={styles.feature}>
        Why Business Choose Us?
        <div className={styles.featureContent}>
          <strong>
            {" "}
            <FontAwesomeIcon icon={faChess} size="4x" />
            STRATEGIC THINKING
          </strong>
          <strong>
            {" "}
            <FontAwesomeIcon icon={faRocket} size="4x" />
            CREATIVE APPROACH
          </strong>
          <strong>
            {" "}
            <FontAwesomeIcon icon={faUsers} size="4x" />
            EXPERIENCED TEAM
          </strong>
          <strong>
            {" "}
            <FontAwesomeIcon icon={faHandshake} size="4x" />
            INNOVATIVE SOLUTIONS
          </strong>
        </div>
      </div>
      <div className={styles.dtdcServices}>
        <div>
          <p>OUR SERVICES</p>
          <p>
            As a Channel Partner of DTDC We Provide Excellent Services at Best
            Prices
          </p>
        </div>
        <div className={styles.dtdccontent}>
          <div>
            <Image
              src="/express.png"
              width={600}
              height={500}
              alt="Express_ing"
            />
          </div>
          <div>
            <b>Express Parcels</b>
            <p>
              The Express Parcels Vertical offers a wide range of domestic
              products and services catering to C2C and B2B customers for
              documents and parcels of all sizes including part-truck-load
              shipments. Our product offerings range from time-sensitive express
              services to cost-effective ground express solutions. Our extensive
              delivery network currently reaches 96% of India’s population,
              making it easy for you to send documents and parcels of any size
              to almost anywhere in India.
            </p>
          </div>
        </div>
        <div className={styles.dtdccontent}></div>
        <div className={styles.dtdccontent}></div>
        <div className={styles.dtdccontent}></div>
        <div className={styles.dtdccontent}></div>
        <div className={styles.dtdccontent}></div>
      </div>
    </main>
  );
}
