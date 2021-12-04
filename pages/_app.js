import { ChakraProvider } from '@chakra-ui/react'
import Fonts from '../components/fonts'
import { AnimatePresence } from 'framer-motion'
import Layout from '../components/layouts/main'
import theme from '../lib/theme'
import '@fontsource/m-plus-rounded-1c/300.css'
import '@fontsource/m-plus-rounded-1c/400.css'
import '@fontsource/m-plus-rounded-1c/500.css'
import'@fontsource/m-plus-1p/300.css'
import'@fontsource/m-plus-1p/400.css'
import'@fontsource/m-plus-1p/500.css'
import '../styles/fonts.css'

// Blog imports

import App from "next/app";
import { createContext } from "react";
import { fetchAPI } from "../lib/api";

export const GlobalContext = createContext({});

function MyApp({ Component, pageProps, router }) {
  const { global } = pageProps;
  return(
    

    <GlobalContext.Provider value={global}>
    <ChakraProvider theme={theme}>

      <Fonts />
      <Layout router={router}>
          <AnimatePresence exitBeforeEnter initial={true}>
            
          <Component {...pageProps} key={router.route}/>
          </AnimatePresence>
      </Layout>

    </ChakraProvider>
    </GlobalContext.Provider>

  )
}


MyApp.getInitialProps = async (ctx) => {

  const appProps = await App.getInitialProps(ctx);

  const global = await fetchAPI("/global");

  return { ...appProps, pageProps: { global } };
};

export default MyApp
