import mapStyles from "./map.module.css";

export default function Map(){
    return(
        <div className={mapStyles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d571.2544639198583!2d77.34526495657529!3d28.556363856435567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce507dca3349f%3A0xef2426f6f617f23d!2sDTDC%20COURIER%20SERVICE%20OFFICE!5e0!3m2!1sen!2sin!4v1723345613426!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
);
}