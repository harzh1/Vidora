import {
  Button,
  Flex,
  HStack,
  Image,
  Input,
  VStack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import logo from "../assets/logo.png";

function Footer() {
  const stackDirection = useBreakpointValue({ base: "column", md: "row" });

  return (
    <footer>
      <Flex
        p="50"
        backgroundColor="#e9f0f4"
        justifyContent="space-between"
        direction={stackDirection}
      >
        <VStack align="start" spacing={5}>
          <HStack>
            <Image className="logo-img" src={logo} alt="logo" />
            <Text as="b" fontSize="3xl">
              Vidora
            </Text>
          </HStack>
          <Text fontSize="xl">Subscribe to our Email Alerts!</Text>
          <HStack>
            <Input
              borderRadius="md"
              variant="outline"
              type="email"
              backgroundColor={"white"}
              placeholder="Enter your email address"
            />
            <Button colorScheme="blue" px="4" py="2">
              Submit
            </Button>
          </HStack>
        </VStack>
        <VStack align="start" spacing={5}>
          <Text as="b" fontSize="sm">
            About Us
          </Text>
          <Text fontSize="sm">About Vidora</Text>
          <Text fontSize="sm">Contact Us</Text>
          <Text fontSize="sm">Privacy Policy</Text>
          <Text fontSize="sm">Terms and Conditions</Text>
        </VStack>
        <VStack align="start" spacing={5}>
          <Text as="b" fontSize="sm">
            Follow Us
          </Text>
          <Button colorScheme="facebook" size="sm">
            Facebook
          </Button>
          <Button colorScheme="twitter" size="sm">
            Twitter
          </Button>
          <Button colorScheme="linkedin" size="sm">
            LinkedIn
          </Button>
        </VStack>
      </Flex>
    </footer>
  );
}

export default Footer;
