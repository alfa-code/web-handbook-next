import React, {memo} from "react";
import Image from "next/image";
import { MainPageLink } from '../main-page-link/MainPageLink'
import HTMLImage1 from "@/public/html-directory.svg";
import styles from "./BannerButtons.module.scss";
import { Props } from './props';

export const BannerButtons: React.FunctionComponent<Props> = memo((props: Props) => {
  return (
    <div className={styles.mainPageLinks}>
      <MainPageLink
        title="HTML справочник"
        subTitle="Все HTML теги"
        image={HTMLImage1}
        url="/html-list"
      />
    </div>
  );
});
