import React, {memo} from "react";
import {Props} from './props';
import styles from "./BreadCrumbs.module.scss";
import Link from 'next/link';

export const BreadCrumbs: React.FunctionComponent<Props> = memo(function BreadCrumbs(props: Props) {
    const breadcrumbsTest = [{name: 'link1', url: '/link'}, {name: 'link2', url: '/link2'}, {name: 'link3', url: '/link3'}];
    return (
        <nav
            tabIndex={0}
            className={styles.breadcrumbs}
            aria-label="хлебные крошки"
        >
            <span>
                <Link
                    className={styles.breadcrumbsItem}
                    href="/"
                >
                    Главная
                </Link>
            </span>
            {breadcrumbsTest.map((item, key) =>
                <span key={key}>
                    <span className={styles.breadcrumbsSeparator}>
                        /
                    </span>
                    <Link
                        className={styles.breadcrumbsItem}
                        href={item.url}
                    >
                        {item.name}
                    </Link>
                </span>
            )}
        </nav>
    );
});

