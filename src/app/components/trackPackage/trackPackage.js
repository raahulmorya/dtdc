'use client';
import { useState } from "react";
import styles from "./trackPackage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShippingFast } from "@fortawesome/free-solid-svg-icons";

export default function TrackPackage(){
  const [trackingNumber, setTrackingNumber] = useState("");

  const handleInputChange = (event) => {
    setTrackingNumber(event.target.value);
  };
    return (
      <section id="track" className={styles.section}>
        <div className={styles.row}>

        <p>Track DTDC Shipment </p>
        <FontAwesomeIcon icon={faShippingFast} size="5x" />

        <form
          action="https://www.dtdc.in/tracking.asp"
          method="post"
          target="_blank"
          className={styles.dtdcTrackingForm}
          >
          <div className={styles.col}>
            <label htmlFor="trackingNumber">DTDC Tracking Number:</label>
          <textarea
            className={`form-control`}
            name="trackingNumber"
            id="trackingNumber"
            rows="5"
            value={trackingNumber}
            onChange={handleInputChange}
            required
            />
            </div>

          <button type="submit" className={`btn btn-primary`}>
            Track Package
          </button>
        </form>
            </div>
      </section>
    );
}