import React, {memo} from "react";
import styles from "./icon.module.scss";
// import Sprite from "@/public/sprite.svg";

type Props = {
    size?: string;
    icon?: string;
    className?: string;
};

export const Icon = memo(function Icon({size, icon, className}: Props): JSX.Element {
    return (
        <svg width={size} height={size} className={[styles.svgIcon, className].join(" ")}>
            {/* <use width={size} height={size} href={`${Sprite}#${icon}`}></use> */}
        </svg>
    );
});
