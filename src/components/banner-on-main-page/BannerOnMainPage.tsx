import React, {memo} from "react";
import Image from "next/image";
import {Props} from './props';
import Banner from "@/public/main.svg";
import styles from "./BannerOnMainPage.module.scss";

export const BannerOnMainPage: React.FunctionComponent<Props> = memo((props: Props) => {
    return (
        <div className={styles.bannerContent}>
            <div className={styles.bannerTop}>
                <Image src={Banner} alt="Banner"/>
                <div className={styles.bannerTopContent}>
                    <span className="text-heading-2">Web Handbook</span>
                    <h1 className="text-subheading">
                        Карманный справочник html элементов, css стилей и других веб технологий.
                    </h1>
                </div>
            </div>
        </div>
    );
});
