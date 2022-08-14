import React, { ReactNode } from "react";

interface IPageHeader {
  children: ReactNode;
}

import styles from "./page-header.module.scss";

export const PageHeader = ({ children }: IPageHeader) => {
  return <h1 className={styles.header}>{children}</h1>;
};
