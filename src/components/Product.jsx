import {
  Button,
  ButtonGroup,
  Divider,
  Flex,
  Grid,
  HStack,
  Heading,
  Input,
  Text,
  Badge,
  Stack,
} from "@chakra-ui/react";
import { Heart, MapPin, MessageCircleMore, ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";

function Product({ product }) {
  const [inputValue, setInputValue] = useState("400001");
  const [isInputValid, setIsInputValid] = useState(true);

  useEffect(() => {
    if (inputValue.length === 6) {
      setIsInputValid(true);
    } else {
      setIsInputValid(false);
    }
  }, [inputValue]);

  const handleInputChange = (event) => {
    if (event.target.value.length > 6) return;
    setInputValue(event.target.value);
  };

  const handleInquire = () => {
    window.open(
      `https://wa.me/918787878787?text=Hey,%20I%20am%20interested%20in%20buying%20Samsung%20-%20$999.`,
      "_blank"
    );
  };

  return (
    <>
      <Grid templateColumns="repeat(2, 1fr)" gap={1} m="10">
        <Flex></Flex>
        <Flex direction="column" justify="flex-start" gap="3">
          <Heading textAlign="left">Sleek Mirror Finish Phone Case</Heading>
          <Text textAlign="left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tincidunt, erat in malesuada aliquam, est erat faucibus purus, eget
            viverra nulla sem vitae neque. Quisque id sodales libero.
          </Text>
          <Badge
            variant="solid"
            colorScheme="green"
            width="fit-content"
            borderRadius="4"
            fontSize="md"
          >
            4.3 ★
          </Badge>
          <HStack spacing="1" alignItems="baseline">
            <Text as="b" color="brand.dark" fontSize="2xl">
              $100
            </Text>
            <Text as="del" color="gray.400" fontSize="1xl">
              $120
            </Text>
            <Text as="b" color="green.400" fontSize="1xl">
              25% off
            </Text>
          </HStack>
          <Divider />
          <Stack spacing="1">
            <HStack>
              {<MapPin size="20px" />}
              <Text as="b" fontSize="sm" textAlign="left">
                Check Delivery
              </Text>
            </HStack>

            <HStack
              borderRadius="lg"
              width="fit-content"
              pl="4"
              border="1px solid black"
            >
              <Input
                type="number"
                placeholder="Enter your pincode"
                value={inputValue}
                onChange={handleInputChange}
                width="fit-content"
                variant="unstyled"
              />
              <Button variant="ghost" isDisabled={!isInputValid}>
                CHECK
              </Button>
            </HStack>
          </Stack>

          <Divider />

          <ButtonGroup>
            <Button
              w="fit-content"
              borderRadius={1}
              leftIcon={<ShoppingCart />}
            >
              ADD TO CART
            </Button>
            <Button
              w="fit-content"
              variant="outline"
              borderRadius={1}
              leftIcon={<Heart />}
            >
              SAVE TO WISHLIST
            </Button>
            <Button
              w="fit-content"
              colorScheme="whatsapp"
              borderRadius={1}
              variant="outline"
              leftIcon={<MessageCircleMore />}
              onClick={handleInquire}
            >
              INQUIRE ON WHATSAPP
            </Button>
          </ButtonGroup>
        </Flex>
      </Grid>
    </>
  );
}

export default Product;
