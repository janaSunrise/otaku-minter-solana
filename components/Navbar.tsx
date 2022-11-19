import { HStack, Spacer } from '@chakra-ui/react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <HStack width="full" padding={4}>
      <Spacer />
      <WalletMultiButton className={styles['wallet-adapter-button-trigger']} />
    </HStack>
  );
};

export default Navbar;
