import Link from 'next/link';
import Image from "next/image";

import headerStyles from "./Header.module.css";

const Header = () => {
    return (
      <header className={headerStyles.header}>
        <div className={headerStyles.mainbar}>
          <div className={headerStyles.nav}>
            <ul>
              <li><Link href="/">HOME</Link></li>
              <li><Link href="/services">SERVICES</Link></li>
              <li><Link href="/"> <Image
      src="/logo-low.png"
      width={120}
      height={120}
      alt="Sumitra Express"
    /></Link></li>
              <li><Link href="/aboutus">ABOUT US</Link></li>
              <li><Link href="/contactus">CONTACT US</Link></li>
            </ul>
          </div>
        </div>
      </header>
    );
}

export default Header;