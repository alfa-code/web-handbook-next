import React, { memo } from "react";
import Link from "next/link";
import Image from "next/image";
import HandbookLogo from "../../assets/logo.svg";
import HandbookLogoMobile from "../../assets/logo_mobile.svg";
import styles from "./logo.module.scss";

export const Logo = memo(() => {
  return (
    <div className={styles.logo}>
      <Link href="/" tabIndex={0}>
        <div>
          <div className={styles.logoDesktop}>
            <Image src={HandbookLogo} alt="Logo" />
          </div>
          <div className={styles.logoMobile}>
            <Image src={HandbookLogoMobile} alt="Logo" />
          </div>
        </div>
      </Link>
    </div>
  );
});

Logo.displayName = "Logo";
