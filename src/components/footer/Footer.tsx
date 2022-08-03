import React from "react";
import Image from "next/image";
import styles from "./Footer.module.scss";
import LogoImage from "@/public/logo.svg";
interface Props {
  children: React.ReactNode;
}

export const Footer: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={[styles.footerColumn, "mt-5"].join(" ")}>
          <a href="#" className={styles.logo}>
            <Image src={LogoImage} alt="Logo" />
          </a>

          <div className="mt-1 text-body-3">
            Карманный веб справочник для начинающих и практикующих веб разработчиков.
          </div>

          {/* <div className="mt-3 text-body-3">
                Наши условия{" "}
                <a
                    href="#"
                    className="link-body-3 mr-1 text-underline"
                >
                    использования
                </a>
                и
                <a
                    href="#"
                    className="link-body-3 ml-1  text-underline"
                >
                    конфиденциальности
                </a>
            </div> */}
        </div>

        <div className={[styles.footerColumn, "mt-6"].join(" ")}>
          <div className="text-heading-4">HTML</div>

          <div className="mt-3">
            <a href="#" className="link-navigation">
              HTML справочник
            </a>
          </div>
          {/* <div className="mt-3">
                <a href="#" className="link-navigation">
                    HTML руководства
                </a>
            </div> */}
        </div>

        {/* <div className={[styles.footerColumn, "mt-6"].join(" ")}>
            <div className="text-heading-4">CSS</div>
            <div className="mt-3">
                <a href="#" className="link-navigation">
                    CSS справочник
                </a>
            </div>
            <div className="mt-3">
                <a href="#" className="link-navigation">
                    CSS руководства
                </a>
            </div>
        </div> */}

        {/* <div className={[styles.footerColumn, "mt-6"].join(" ")}>
            <div className="text-heading-4">Связаться с нами</div>
            <div className="mt-2 text-body-2">
                Напишите нам если у вас есть предложение <br />
                или заметили ошибку
            </div>
            <a
                href="mailto:web_handbook.info@alfacode.ru"
                className="link-navigation d-flex align-center mt-3"
            >
                <Icon size="16" icon="email-icon"></Icon>
                <div className="ml-1">
                    web_handbook.info@alfacode.ru
                </div>
            </a>
        </div> */}
      </div>
      <div className={styles.footerBottom}>
        <div className="text-navigation">«Web Handbook» 2022</div>
      </div>
    </footer>
  );
};
