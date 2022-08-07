import React from "react";
import Image from "next/image";
import { Icon } from "../icon";
import { Props } from "./props";
import styles from "./MainPageLink.module.scss";

export const MainPageLink = (props: Props) => {
  const { title, subTitle, image, url } = props;
  
  return (
    <div className={styles.mainPageLink}>
      <a href={url} className={styles.mainPageLinkContentLink}>
        <div className={styles.mainPageLinkContent}>
          <div className={styles.title}>{title}</div>
          <div className={styles.subTitle}>{subTitle}</div>
          <div className={styles.mainPageLinkContentLinkInner}>
            <span className={styles.fakeLink}>Смотреть</span>
            {/*<Icon className={styles.svgIcon} size="16" icon="arrow-down" />*/}
          </div>
        </div>
        <Image src={image} alt={title} />
      </a>
    </div>
  );
};
