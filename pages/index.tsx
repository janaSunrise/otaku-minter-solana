import dynamic from 'next/dynamic';

import { Box, Center, Spacer, Stack } from '@chakra-ui/react';
import { useWallet } from '@solana/wallet-adapter-react';

import Connected from '../components/Connected';
import Disconnected from '../components/Disconnected';

import styles from '../styles/Home.module.css';

const Navbar = dynamic(() => import('../components/Navbar'), {
  ssr: false
});

const Home = () => {
  const { connected } = useWallet();

  return (
    <div className={styles.container}>
      <Box
        w="full"
        h="calc(100vh)"
        bgImage={'url(/home-background.svg)'}
        backgroundPosition="center"
      >
        <Stack w="full" h="calc(100vh)" justify="center">
          <Navbar />
          <Spacer />

          <Center>{connected ? <Connected /> : <Disconnected />}</Center>

          <Spacer />

          <Center>
            <Box marginBottom={4} color="white">
              <a
                href="https://twitter.com/_buildspace"
                target="_blank"
                rel="noopener noreferrer"
              >
                built with @_buildspace
              </a>
            </Box>
          </Center>
        </Stack>
      </Box>
    </div>
  );
};

export default Home;
