"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faBars, faPhone } from "@fortawesome/free-solid-svg-icons";
import headerStyles from "./Header.module.css";
import Contact from "../phone/phone";

export default function Header() {
  const [displayMenu, setDisplayMenu] = useState(false);
  const toggleMenu = () => {
    setDisplayMenu((prevState) => !prevState);
    console.log("Menu toggled");
  };

  useEffect(() => {
    // Function to handle menu display based on screen width
    const handleResize = () => {
      if (window.innerWidth >= 1750) {
        setDisplayMenu(true);
      } else {
        setDisplayMenu(false);
      }
    };

    // Check screen width on component mount
    handleResize();

    // Listen for window resize to dynamically change the state
    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closeMenu = () => {
     if (window.innerWidth >= 1750) {
        setDisplayMenu(true);
      } else {
        setDisplayMenu(false);
      }
    // setDisplayMenu(false);
    console.log("Menu closed");
  };

  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.contact}>
        <FontAwesomeIcon icon={faPhone} />
        <FontAwesomeIcon icon={faWhatsapp} />
        <Contact />
      </div>
      <div className={headerStyles.mainbar}>
        <div className={headerStyles.nav}>
          <ul>
            <li>
              <Link href="/">
                <Image
                  src="/logo-low.png"
                  width={40}
                  height={40}
                  alt="Sumitra Express"
                />
                <span>
                  Sumitra Express
                  <p>
                    Authorized{" "}
                    <Image
                      src="/dtdcLogo.png"
                      alt=""
                      height={900}
                      width={900}
                    />
                    channel partner
                  </p>
                </span>
              </Link>
            </li>
            <li>
              <a onClick={toggleMenu}>
                <FontAwesomeIcon icon={faBars} size="1x" />
              </a>
            </li>
            {displayMenu && (
              <>
                <li className={headerStyles.item}>
                  <Link href="/" onClick={closeMenu}>
                    HOME
                  </Link>
                </li>
                <li className={headerStyles.item}>
                  <Link href="/services" onClick={closeMenu}>
                    SERVICES
                  </Link>
                </li>
                <li className={headerStyles.item}>
                  <Link href="/" onClick={closeMenu}>
                    <Image
                      src="/logo-low.png"
                      width={120}
                      height={120}
                      alt="Sumitra Express"
                    />
                  </Link>
                </li>
                <li className={headerStyles.item}>
                  <Link href="/aboutus" onClick={closeMenu}>
                    ABOUT US
                  </Link>
                </li>
                <li className={headerStyles.item}>
                  <Link href="/contactus" onClick={closeMenu}>
                    CONTACT US
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
}
