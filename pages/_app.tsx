import { ChakraProvider } from '@chakra-ui/react';

import WalletContextProvider from '../context/WalletContextProvider';
import { theme } from '../theme';

import '../styles/globals.css';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <WalletContextProvider>
        <Component {...pageProps} />
      </WalletContextProvider>
    </ChakraProvider>
  );
}
