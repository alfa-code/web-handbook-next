import React from "react";
import Image from "next/image";
import { MainPageLink } from "../UI/main-page-link";
import HTMLImage1 from "@/public/html-directory.svg";
import styles from "./banner-main-page.module.scss";

interface Props {
  children: React.ReactNode;
}

export const bannerButtons: React.FunctionComponent<Props> = (props) => {
  return (
    <div className={styles.mainPageLinks}>
      <MainPageLink
        title="HTML справочник"
        subTitle="Все HTML теги"
        Image={HTMLImage1}
        url="/html-list"
      />
    </div>
  );
};
