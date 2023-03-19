import React, {memo} from "react";
import Image from "next/image";

import Banner from "@/public/main.svg";
import {BannerButtons} from "../banner-buttons";

import {Props} from './props';
import styles from "./BannerOnMainPage.module.scss";

export const BannerOnMainPage: React.FunctionComponent<Props> = memo(function BannerOnMainPage(props: Props) {
    return (
        <div className={ styles.bannerWrapper }>
            <div className={ styles.bannerContent }>
                <div className={ styles.bannerTop }>
                    <Image src={ Banner } alt="Banner"/>

                    <div className={ styles.bannerTopContent }>
                        <span className={ styles.title }>
                            Web Handbook
                        </span>

                        <h1 className={ styles.subTitle }>
                            Это профессиональный ресурс для начинающих и практикующих фронт-энд разработчиков.
                        </h1>
                    </div>
                </div>

                <BannerButtons />
            </div>
        </div>
    );
});
