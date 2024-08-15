import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';
import styles from "./welcome.module.css";

import Image from "next/image";
export default function Welcome() {
  return (
    <div className={styles.welcome}>
      <div className={styles.background}></div>
      <div className={styles.hero}>
        <p>Welcome to </p>
        <div className={styles.typingContainer}>
          <h1 classNames={styles.typingEeffect}>Sumitra Express</h1>
        </div>
        <div className={styles.flippingTextContainer}>
          <span>We deliver </span>
          <span className={styles.flippingText}>
            <span>Domestic</span>
            <span>International</span>
            <span>Fast</span>
            <span>Securely</span>
          </span>
        </div>
        <span>
          As Authorized
          <Image src="/dtdcLogo.png" alt="" height={200} width={200} />
          Channel Partner.
        </span>
      <div className={styles.ref}><span> <Link href="#quotes" scroll={true} >Get Quote Now   <FontAwesomeIcon icon={faCircleArrowRight} /></Link></span>
        <span> <Link href="#track" scroll={true} >Track Shipment  <FontAwesomeIcon icon={faCircleArrowRight} /></Link></span>
      </div>
      </div>
    </div>
  );
}
