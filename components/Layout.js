import Head from "next/head";
import { useRouter } from "next/router";
import styles from "@/styles/Layout.module.css";

import Header from "./Header";
import Showcase from "./Showcase";
import Footer from "./Footer";

const Layout = ({ title, children, description, keywords }) => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      {router.pathname === "/" && <Showcase />}
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "DJ Events | Find the best parties around the world",
  description: "Find the latest DJ and other events",
  keywords: "music, dj, psrties, events",
};

export default Layout;
