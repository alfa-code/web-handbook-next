import React, { useState } from "react";

import { Logo } from "@/components/logo";
import { Icon } from "@/components/icon";
// import { NavigationContainer } from 'Containers/navigation-container';

import styles from "./header.module.scss";
// import { NavLink } from "react-router-dom";

import Link from 'next/link';

export const Header = (props: any) => {
    const [activeDropdown, setActiveDropdown] = useState("");
    // const [activeSearch, setActiveSearch] = useState(false);

    const { isMobileMenuOpened, toggleMobileMenuStateAD } = props;

    // function closeDropdowm(e) {
    //     if (e.target.closest(".dropdown")) {
    //         return;
    //     }
    //     setActiveDropdown("");
    // }

    // const toggleDropdowm = (e, key) => {
    //     if (activeDropdown == key) {
    //         setActiveDropdown("");
    //         document.body.onclick = null;
    //     } else {
    //         setActiveDropdown(key);
    //         document.body.onclick = closeDropdowm;
    //     }
    //     e.stopPropagation();
    // };

    return (
        <header className={styles.header}>
            <Logo />
            <nav className={styles.headerMenu}>
                <div className={styles.headerMenuLink}>
                    {/* <NavLink
                        activeClassName={styles.active}
                        exact
                        to="/"
                        className={styles.headerMenuLink}
                        tabIndex={ 0 }
                    >
                        Главная
                    </NavLink> */}
                    <Link
                        href="/"
                        className={styles.headerMenuLink}
                    >
                        Главная
                    </Link>
                </div>
                <div className={styles.headerMenuLink}>
                    <Link
                        href="/html-list"
                        className={styles.headerMenuLink}
                    >
                        HTML справочник
                    </Link>
                </div>
                {/* <div
                    className={ [styles.dropdown, activeDropdown == "HTML" ? styles.active : ""].join(' ') }
                    onClick={() => setActiveDropdown(activeDropdown == "HTML" ? "" : "HTML")}
                >
                    <div className={ styles.dropdownActivator }>
                        HTML
                        <Icon className={styles.svgIcon} size="16" icon="arrow-down"/>
                    </div>
                    <div className={ styles.dropdownInner } >
                        <NavLink
                            activeClassName={ styles.active }
                            to="/html-list"
                            className={ styles.dropdownInnerLink }
                        >
                                HTML справочник
                        </NavLink>
                    </div>
                </div> */}
                {/* <div
                    className={ [styles.dropdown, activeDropdown == "CSS" ? styles.active : ""].join(' ')}
                    onClick={() => setActiveDropdown(activeDropdown == "CSS" ? "" : "CSS")}>
                    <div className={ styles.dropdownActivator }>
                        CSS
                        <Icon className={styles.svgIcon} size="16" icon="arrow-down"/>
                    </div>

                    <div className={ styles.dropdownInner }>
                        <NavLink activeClassName={ styles.active } to="/css-list" className={ styles.dropdownInnerLink }>CSS справочник</NavLink>
                        <NavLink activeClassName={ styles.active } to="/css-list/recipes" className={ styles.dropdownInnerLink }>CSS рецепты</NavLink>
                    </div>
                </div> */}
            </nav>

            {/* <div className={ [styles.headerSearch, activeSearch ? styles.mobileActiveSearch : ""].join(" ") }>
                <div className={ styles.inputWrapper }>
                    <input className={ styles.inputWrapperInput } type="text" placeholder="Поиск по сайту" />
                    <div className={ styles.inputWrapperIcon } onClick={() => {setActiveSearch(!activeSearch)}}>
                        <Icon className={styles.svgIcon} size="24" icon="search-icon" />
                    </div>
                </div>
            </div> */}
            {/* <div
                className={styles.headerBtn}
                onClick={() => {
                    document.body.style.overflow = !activeHeader
                        ? "hidden"
                        : "auto";
                    if (activeHeader) setActiveHeader(false);
                    setActiveSearch(!activeSearch);
                }}
            >
                <Icon
                    size="24px"
                    icon={activeSearch ? "close-icon" : "search-icon"}
                />
            </div> */}
            <div
                className={styles.headerBtn}
                onClick={() => {
                    document.body.style.overflow = !isMobileMenuOpened
                        ? "hidden"
                        : "auto";

                    // if (activeSearch) {
                    //     setActiveSearch(false);
                    // }

                    // setActiveHeader(!activeHeader);

                    toggleMobileMenuStateAD(!isMobileMenuOpened);
                }}
            >
                <Icon
                    size="24px"
                    icon={isMobileMenuOpened ? "close-icon" : "menu-icon"}
                />
            </div>
            <div
                className={[
                    styles.navigationMobile,
                    isMobileMenuOpened ? styles.activeHeader : "",
                ].join(" ")}
            >
                {/* <NavigationContainer /> */}
            </div>
        </header>
    );
};
