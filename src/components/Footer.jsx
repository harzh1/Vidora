import {
  Button,
  Flex,
  HStack,
  Image,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer>
      <Flex p="50" backgroundColor="#e9f0f4" justifyContent="space-between">
        <Stack>
          <HStack>
            <Image className="logo-img" src={logo} alt="logo" />
            <Text as="b" fontSize="3xl">
              Vidora
            </Text>
          </HStack>
          <Text ml="7" fontSize="3xl">
            Subscribe to our Email Alerts!
          </Text>
          <HStack ml="7">
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
        </Stack>
        <Stack display="flex" gap={5} alignItems="flex-start">
          <Text as="b" fontSize="sm">
            About Us
          </Text>
          <Text fontSize="sm">About Vidora</Text>
          <Text fontSize="sm">Contact Us</Text>
          <Text fontSize="sm">Privacy Policy</Text>
          <Text fontSize="sm">Terms and Conditions</Text>
        </Stack>
        <Stack display="flex" gap={5} alignItems="flex-start" mr="7">
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
        </Stack>
      </Flex>
    </footer>
  );
}

export default Footer;
