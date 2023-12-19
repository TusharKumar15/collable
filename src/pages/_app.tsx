import React from 'react';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider } from 'baseui';
import { styletron } from '../pages/styletron';
import HeadNavBar from '@/components/headbar/headNavBar';
import Navbar from '@/components/navbar/navbar';

interface MyAppProps {
  Component: React.ComponentType;
  pageProps: any;
}

function MyApp({ Component, pageProps }: MyAppProps): JSX.Element {
  return (
    <StyletronProvider value={styletron}>
      <BaseProvider theme={LightTheme}>
        <HeadNavBar />
        <Navbar />
        <Component {...pageProps} />
      </BaseProvider>
    </StyletronProvider>
  );
}

export default MyApp;