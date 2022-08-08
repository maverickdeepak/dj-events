import Head from "next/head";

import styles from "../styles/Layout.module.css";

import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ title, children, description, keywords }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      <div className={styles.container}>{children}</div>
      <Footer />
    </>
  );
};

Layout.defaultProps = {
  title: "DJ Events | Find the best parties around the world",
  description: "Find the latest DJ and other events",
  keywords: "music, dj, psrties, events",
};

export default Layout;
