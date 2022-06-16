import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Login } from "../component/Login/Login";
import styles from "../styles/Home.module.css";
import { Helmet } from "react-helmet";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Lotus</title>
        <meta name="description" content="Lotus app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Helmet
        script={[
          {
            src: "https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/6.7.96/fonts/materialdesignicons-webfont.woff2",
          },
        ]}
      ></Helmet>
      <Login></Login>

      {/* https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/6.7.96/css/materialdesignicons.min.css */}
    </div>
  );
};

export default Home;
