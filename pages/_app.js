import React, { useState, useEffect } from "react";
import App from 'next/app';
import Head from 'next/head'

import Preloader from '../components/Pre';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/globals.css'
import '../styles/App.css';
import '../styles/style.css';


function MyApp({ Component, pageProps }) {

  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Jorgihno | Portfolio</title>
      </Head>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  )
}

export default MyApp

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};
