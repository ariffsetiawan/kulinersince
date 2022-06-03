import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script';

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <>
        <Script id="ga-tag-script" strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=G-CWPNJVJZKD`} />

        <Script id="ga-datalayer-script" strategy="lazyOnload">
            {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-CWPNJVJZKD', {
                page_path: window.location.pathname,
                });
            `}
        </Script>

        <Component {...pageProps} />
      </>
  );
}

export default MyApp
