import React from "react";
import Header from "./header";

import "../styles/layout.css";
import * as styles from "./layout.module.css";

const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle }) => (
  <>
    <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
    <div className={styles.content}>{children}</div>
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.siteInfo}>
          © {new Date().getFullYear()}, Built with <a href="https://www.sanity.io">Sanity</a> &amp;
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby </a> and Tea ☕️ ❤️
        </div>
      </div>
    </footer>
  </>
);

export default Layout;
