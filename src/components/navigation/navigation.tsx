import React, { useState } from "react";
import Link from 'next/link';
import Image from 'next/image';
import classnames from 'classnames';

type Props = {
    tags: string[];
    navigation?: {
        categoryName?: string,
        categoryIconUrl?: string,
        categories?: {
            name?: string,
            url?: string,
            children?: {
                text?: string,
                url?: string
            }[]
        }[],
    }[],
    closeMobileMenuCallback?: any;
}

import RedTagIcon from '@/src/assets/icons/tag-red.svg';

import styles from "./navigation.module.scss";

const navInfo = [
    {
        categoryName: "HTML справочник",
        categoryIconUrl: "html-icon",
        icon: RedTagIcon,
    },
];

export const Navigation = (props: Props) => {
    const [activeDirectory, setActiveDirectory] = useState("HTML справочник");
    console.log('activeDirectory:', activeDirectory);

    const renderSidebarNavigation = (directory: any) => {
        return (
            <li key={ directory.categoryName } >
                <button
                    className={ classnames({
                        [styles.navButton]: true,
                        [styles.navButtonActive]: (activeDirectory ===  directory.categoryName)
                    }) }
                    onClick={() =>
                        setActiveDirectory(
                            activeDirectory == directory.categoryName
                                ? ""
                                : directory.categoryName
                        )
                    }
                >
                    <span className={styles.imageWithCaption}>
                        <Image src={ RedTagIcon } alt="" />
                        { directory.categoryName }
                    </span>
                </button>
                <div>
                    { (activeDirectory === directory.categoryName) && (
                        props.tags.map((tag, i) => {
                            return renderElementsList(tag, i);
                        })
                    )}
                </div>
            </li>
        );
    };

    const renderElementsList = (tag: any, i: any) => {
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
                        {/* <Image src={ RedTagIcon } alt="111" /> */}
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
            <ul>
                { navigation.map((directory) => {
                    return renderSidebarNavigation(directory);
                })}
            </ul>
        </nav>
    );
};
