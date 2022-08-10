import React, {memo} from "react";
import {Props} from "./props";
import styles from "./icon.module.scss";
import Sprite from "@/public/sprite.svg";

export const Icon = memo(({size, icon, className}: Props): JSX.Element => {
    return (
        <svg width={size} height={size} className={[styles.svgIcon, className].join(" ")}>
            <use width={size} height={size} href={`${Sprite}#${icon}`}></use>
        </svg>
    );
});
