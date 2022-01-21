import React from 'react';
import store from '../store';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { Providers } from '../Providers';
import { Provider } from 'react-redux';
import Script from 'next/script';

// Styling
import '../styles/imports.scss';

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname, replace } = useRouter();
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    // Initial app redirect (from '/' to '/lend')
    if (pathname == '/') {
      replace('mint');
    } else {
      setLoaded(true);
    }
  }, [pathname, replace]);
  // rendering empty div to avoid screen flickering on initial load

  return (
    <>
      {/* Google Analytics load after hydration */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=UA-217798151-2`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-217798151-2');
        `}
      </Script>
      {loaded ? (
        <Provider store={store}>
          <Providers>
            <Component {...pageProps} />
          </Providers>
        </Provider>
      ) : (
        <div />
      )}
    </>
  );
}
export default MyApp;
