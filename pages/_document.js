import { Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';
import themeChakra from '../imports/theme';


export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" /> 
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+Antique:wght@300;400;500;700;900&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-icon.png" type="image/png" />
        <link rel="android-chrome-192x192" href="/android-chrome-192x192.png" type="image/png" sizes='192x192' />
        <link rel="android-chrome-512x512" href="/android-chrome-512x512.png" type="image/png" sizes='512x512' />
        <link rel="icon" href="/favicon.ico" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-DC5RRWLRNV');
            `,
          }}
        /> 
      </Head>
      <body>
        <ColorModeScript initialColorMode={themeChakra.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}