import React from 'react';
import store from '../store';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { Providers } from '../Providers';
import { Provider } from 'react-redux';

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
