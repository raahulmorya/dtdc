import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faComments,
  faMapMarkerAlt,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import footerStyles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.container}>
        <div>
          <p>
            <span>Sumitra Express</span> <br />
            Authorized
            <Image src="/dtdcLogo.png" alt="" height={900} width={900} />
            Channel Partner
          </p>
          <div className={footerStyles.social}>
            <p>Connect with us on :</p>
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon
              icon={faTwitter}
              size="1x"
              style={{ margin: "10px", color: "#1DA1F2" }}
            />
            <FontAwesomeIcon
              icon={faInstagram}
              size="1x"
              style={{ margin: "10px", color: "#C13584" }}
            />
            <FontAwesomeIcon
              icon={faLinkedin}
              size="1x"
              style={{ margin: "10px", color: "#0077B5" }}
            />
          </div>
        </div>
        <div className={footerStyles.flex}>
          <strong className={footerStyles.strong}>
            <FontAwesomeIcon icon={faMapMarkerAlt} size="1x" color="black" />
            LGF Shop No. 01, Near Sombazar Sadarpur opp. Shiv Mandir Sector 45,
            Noida - 201301 Uttar Pradesh
          </strong>
          <strong className={footerStyles.strong}>
            <FontAwesomeIcon icon={faEnvelope} size="1x" color="black" />{" "}
            info@dtdcexpress.co.in, dharam@dtdcexpress.co.in
          </strong>
          <strong className={footerStyles.strong}>
            <FontAwesomeIcon icon={faPhone} size="1x" color="black" />
            +91 9015632299 / 9999243614
          </strong>
        </div>
      </div>
      <div className={footerStyles.copyright}>
        © Sumitra Express - Authorized DTDC Channel Partner, All Rights
        Reserved.
      </div>
    </footer>
  );
};

export default Footer;
