import React, { useState } from "react";

import Link from 'next/link';
import Image from 'next/image';

type Props = {
    tags: string[];
    navigation?: {
        categoryName?: string,
        categoryIconUrl?: string,
        categories?: {
            name?: string,
            url?: string,
            childrens?: {
                text?: string,
                url?: string
            }[]
        }[],
    }[],
    closeMobileMenuCallback?: any;
}
// import carretDown from "Assets/images/carret-down.png";
// import arrowDown from "Assets/images/arrow-down.svg";

import RedTagIcon from '@/src/assets/icons/tag-red.svg';
console.log('RedTagIcon:', RedTagIcon);

import styles from "./navigation.module.scss";

const navInfo = [
    {
        categoryName: "HTML справочник",
        categoryIconUrl: "html-icon",
    },
    // {
    //     categoryName: "HTML атрибуты",
    //     categoryIconUrl: "html-icon",
    // },
];

export const Navigation = (props: Props) => {
    // const [showNavigation, setShowNavigation] = useState(false);
    const [activeDirectory, setActiveDirectory] = useState("HTML справочник");
    // const [activeCategory, setActiveCategory] = useState("");

    const { closeMobileMenuCallback } = props;

    // const x = true;

    // if (x) {
    //     return 1;
    // }

    const renderList1 = (directory: any) => {
        return (
            <div
                className={[
                    styles.navigationCategory,
                    styles.dropdown,
                    activeDirectory == directory.categoryName
                        ? styles.active
                        : null,
                ].join(" ")}
                key={ directory.categoryName }
            >
                <div className={styles.navigationCategoryInner}>
                    <button
                        className={styles.navigationCategoryInnerName}
                        onClick={() =>
                            setActiveDirectory(
                                activeDirectory == directory.categoryName
                                    ? ""
                                    : directory.categoryName
                            )
                        }
                    >
                        <div className={styles.buttonInner}>
                            {/* <Icon
                                className={styles.svgIcon}
                                size="24"
                                icon={directory.categoryIconUrl}
                            /> */}
                            <Image src={ RedTagIcon } alt="" />
                            { directory.categoryName }
                        </div>
                        {/* <img
                            className={styles.arrowIcon}
                            src={arrowDown}
                            alt="arrow down"
                        /> */}
                    </button>
                </div>
                <div
                    className={[
                        styles.navigationCategoryCollapse,
                        styles.dropdownInner,
                    ].join(" ")}
                >
                    { (activeDirectory === directory.categoryName) && (
                        props.tags.map((tag, i) => {
                            return renderList2(tag, i);
                        })
                    )}


                </div>
            </div>
        );
    };

    const renderList2 = (tag: any, i: any) => {
        return (
            <div
                className={[
                    styles.dropdown,
                    // activeCategory == tag ? styles.active : null,
                ].join(" ")}
                key={i}
                // onClick={(e) => {
                //     e.stopPropagation();
                //     setActiveCategory(
                //         activeCategory == category.name ? "" : category.name
                //     );
                // }}
            >
                <div className={styles.navigationCategoryCollapseItem}>
                    <div className={styles.navigationCategoryCollapseItemIcon}>
                        {/* <Icon
                            className={styles.svgIcon}
                            size="16"
                            icon="document-icon"
                        /> */}
                        <Image src={ RedTagIcon } alt="111" />
                    </div>
                    <Link
                        className={styles.navigationCategoryCollapseItemName}
                        href={ `/html-list/${tag}` }
                    >
                        { tag }
                    </Link>
                </div>

            </div>
        );
    };

    const navigation = navInfo;
    return (
        <nav className={styles.navigation}>
            {/* <div onClick={() => {setShowNavigation(showNavigation ? false : true)}} className={ styles.navigationCollapseBtn }>
                &gt;
            </div> */}

            { navigation.map((directory) => {
                return renderList1(directory);
            })}
        </nav>
    );
};
