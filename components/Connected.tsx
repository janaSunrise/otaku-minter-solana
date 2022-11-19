import {
  Button,
  Container,
  Heading,
  HStack,
  Text,
  VStack,
  Image
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

const Connected = () => {
  return (
    <VStack spacing={20}>
      <Container>
        <VStack spacing={8}>
          <Heading
            color="white"
            as="h1"
            size="2xl"
            noOfLines={1}
            textAlign="center"
          >
            Welcome, fellow otaku.
          </Heading>

          <Text color="bodyText" fontSize="xl" textAlign="center">
            Each otaku is randomly generated art and can be staked to receive
            <Text as="b"> $OTK</Text>. Use your <Text as="b"> $OTK</Text> to
            upgrade your otaku and receive perks within the community!
          </Text>
        </VStack>
      </Container>

      <HStack spacing={10}>
        <Image src="avatar1.png" alt="" />
        <Image src="avatar2.png" alt="" />
        <Image src="avatar3.png" alt="" />
        <Image src="avatar4.png" alt="" />
        <Image src="avatar5.png" alt="" />
      </HStack>

      <Button bgColor="accent" color="white" maxW="380px">
        <HStack>
          <Text>mint otaku</Text>
          <ArrowForwardIcon />
        </HStack>
      </Button>
    </VStack>
  );
};

export default Connected;
