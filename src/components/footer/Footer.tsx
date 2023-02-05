import React, {memo} from "react";
import Image from "next/image";
import styles from "./Footer.module.scss";
import LogoImage from "@/public/logo.svg";
import {Props} from './props';

export const Footer: React.FunctionComponent<Props> = memo(function Footer(props: Props) {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerInner}>
                <div className={styles.footerColumn}>
                    <a href="#" className={styles.logo}>
                        <Image src={LogoImage} alt="Logo"/>
                    </a>
                    <div className={styles.footerTitle}>
                        Карманный веб справочник для начинающих и практикующих веб разработчиков.
                    </div>
                </div>
                <div className={styles.footerColumn}>
                    <div className={styles.footerTextHeading}>HTML</div>

                    <div className={styles.linkBlock}>
                        <a href="#" className={styles.linkNavigation}>
                            HTML справочник
                        </a>
                    </div>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <div className={styles.textNavigation}>«Web Handbook» 2021</div>
            </div>
        </footer>
    );
});
