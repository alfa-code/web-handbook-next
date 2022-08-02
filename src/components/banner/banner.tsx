import React from "react";
import Image from "next/image";
import Banner from "@/public/main.svg";
import styles from "./banner-main-page.module.scss";

interface Props {
  children: React.ReactNode;
}

export const BannerMainPage: React.FunctionComponent<Props> = (props) => {
  return (
    <div className={styles.bannerContent}>
      <div className={styles.bannerTop}>
        <Image src={Banner} alt="Banner" />
        <div className={styles.bannerTopContent}>
          <span className={styles.textHeading}>Web Handbook</span>
          <h1 className={styles.textSubheading}>
            Карманный справочник html элементов, css стилей и других веб технологий.
          </h1>
        </div>
      </div>
    </div>
  );
};
