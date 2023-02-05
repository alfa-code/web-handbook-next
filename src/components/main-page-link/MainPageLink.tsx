import React, {memo} from "react";
import Image from "next/image";
// import {Icon} from "../icon";
import {Props} from "./props";
import styles from "./MainPageLink.module.scss";
import arrowDown from '@/src/assets/icons/arrow-down.svg';

export const MainPageLink = memo(function MainPageLink(props: Props) {
    const {title = "", subTitle, image, url} = props;
    
    return (
        <div className={styles.mainPageLink}>
            <a href={url} className={styles.mainPageLinkContentLink}>
                <div className={styles.mainPageLinkContent}>
                    <div className={styles.title}>{title}</div>
                    <div className={styles.subTitle}>{subTitle}</div>
                    <div className={styles.mainPageLinkContentLinkInner}>
                        <span className={styles.fakeLink}>Смотреть</span>
                        <Image src={ arrowDown } alt="arrow down" className={styles.svgIcon} width={16} height={16}/>
                        {/* <Icon className={styles.svgIcon} size="16" icon="arrow-down" /> */}
                    </div>
                </div>
                <Image src={image} alt={title} className={styles.icon}/>
            </a>
        </div>
    );
});
