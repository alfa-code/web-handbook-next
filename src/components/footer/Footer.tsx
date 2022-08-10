import React, {memo} from "react";
import Image from "next/image";
import styles from "./Footer.module.scss";
import LogoImage from "@/public/logo.svg";
import {Props} from './props';

export const Footer: React.FunctionComponent<Props> = memo((props: Props) => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerInner}>
                <div className={[styles.footerColumn, "mt-5"].join(" ")}>
                    <a href="#" className={styles.logo}>
                        <Image src={LogoImage} alt="Logo"/>
                    </a>
                    <div className="mt-1 text-body-3">
                        Карманный веб справочник для начинающих и практикующих веб разработчиков.
                    </div>
                </div>
                <div className={[styles.footerColumn, "mt-6"].join(" ")}>
                    <div className="text-heading-4">HTML</div>
                    
                    <div className="mt-3">
                        <a href="#" className="link-navigation">
                            HTML справочник
                        </a>
                    </div>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <div className="text-navigation">«Web Handbook» 2022</div>
            </div>
        </footer>
    );
});
