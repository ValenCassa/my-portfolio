import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import theme from '../lib/theme'


export default class Document extends NextDocument {
  render() {
    return (
      
      <Html lang="en">
            <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Valen's Homepage" />
      <meta name="author" content="Valen's Homepage" />
      <link rel="apple-touch-icon" href="apple-touch-icon.png" />
      <link rel="icon" href="/img/logo-tab.png" />
      <title>Valentin Cassarino - Homepage</title>

      </Head>
        
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />

          <NextScript />
        </body>

      </Html>
    )
  }
}