import React, {memo} from "react";
import {Props} from './props';
import styles from "./BreadCrumbs.module.scss";

export const BreadCrumbs: React.FunctionComponent<Props> = memo((props: Props) => {
    const breadcrumbsTest = [{name: 'link1', url: '/link'}, {name: 'link2', url: '/link2'}, {name: 'link3', url: '/link3'}];
    return (
        <nav
            tabIndex={0}
            className={styles.breadcrumbs}
            aria-label="хлебные крошки"
        >
            <span>
                <a
                    className={styles.breadcrumbsItem}
                    href="/"
                    tabIndex={0}
                >
                    Главная
                </a>
            </span>
            {breadcrumbsTest.map((item, key) =>
                <span key={key}>
                    <span className={styles.breadcrumbsSeparator}>
                        /
                    </span>
                    <a
                        className={styles.breadcrumbsItem}
                        href={item.url}
                        tabIndex={0}
                    >
                        {item.name}
                    </a>
                </span>
            )}
        </nav>
    );
});

