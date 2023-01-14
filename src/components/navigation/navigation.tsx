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

    const createAngleBrackets = (tag: string) => {
        return `<${tag}>`;
    };

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
                <ul className={ styles.elementsList }>
                    { (activeDirectory === directory.categoryName) && (
                        props.tags.map((tag, i) => {
                            const tagWithAngleBrackets = createAngleBrackets(tag);
                            return renderElementsList(tagWithAngleBrackets, i);
                        })
                    )}
                </ul>
            </li>
        );
    };

    const renderElementsList = (tag: any, i: any) => {
        return (
            <li
                key={i}
            >
                <Link
                    className={styles.renderElementsListLink}
                    href={ `/html-list/${tag}` }
                >
                    { tag }
                </Link>
            </li>
        );
    };

    const navigation = navInfo;

    return (
        <nav className={styles.navigation}>
            <ul className={ styles.navigationList }>
                { navigation.map((directory) => {
                    return renderSidebarNavigation(directory);
                })}
            </ul>
        </nav>
    );
};
