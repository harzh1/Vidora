import {
  Box,
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
  IconButton,
  Image,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  useBreakpointValue,
} from "@chakra-ui/react";
import {
  ChevronDown,
  ChevronUp,
  Heart,
  MapPin,
  MessageCircleMore,
  ShoppingCart,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Product() {
  const [currentImage, setCurrentImage] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const gridTemp = useBreakpointValue({
    base: "repeat(1, 1fr)",
    sm: "repeat(1, 1fr)",
    md: "repeat(1, 1fr)",
    lg: "1fr 1fr",
  });

  const displayValue = useBreakpointValue({
    base: "none",
    sm: "none",
    md: "none",
    lg: "flex",
  });

  const { id } = useParams();
  console.log(id);

  const [product, setProduct] = useState([]);

  const fetchProducts = async () => {
    const response = await fetch(
      `https://server-deploy-xrqa.onrender.com/products/${id}`,
      {
        mode: "cors",
      }
    );
    const data = await response.json();
    setProduct(data);

    console.log(data);
  };

  useEffect(() => {
    fetchProducts();
  }, [id]);

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
      `https://wa.me/918787878787?text=Hey,%20I%20am%20interested%20in%20buying%20${product.title}%20-%20₹${product.price}.`,
      "_blank"
    );
  };
  if (product.length === 0) return null;

  const handleUpClick = () => {
    setImageIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    setCurrentImage((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleDownClick = () => {
    setImageIndex((prevIndex) =>
      Math.min(prevIndex + 1, product.images.length - 3)
    );
    setCurrentImage((prevIndex) =>
      Math.min(prevIndex + 1, product.images.length - 1)
    );
  };

  return (
    <>
      <Breadcrumb pl="10" pr="10" pt="2" pb="2" backgroundColor="brand.ow">
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="#">T-shirt</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">OverSized T-Shirt</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Grid
        templateColumns={gridTemp}
        gap={5}
        m={{ base: "20px", sm: "20px", md: "8", lg: "10" }}
        textAlign="left"
      >
        <Grid
          templateColumns={{
            base: "1fr",
            sm: "1fr",
            md: "1fr ",
            lg: "1fr 5fr",
          }}
          alignItems={{
            base: "center",
            sm: "center",
            md: "center",
            lg: "start",
          }}
          justifyItems="center"
        >
          <Flex
            alignItems="center"
            display="flex"
            direction={{ base: "row", sm: "row", md: "row", lg: "column" }}
            gap="2"
            overflow="auto"
          >
            <IconButton
              w="fit-content"
              aria-label="Previous"
              icon={<ChevronUp />}
              onClick={handleUpClick}
              variant="ghost"
              display={displayValue}
            />
            {product.images.map((img, index) => (
              <Image
                key={product.id + "child" + index}
                src={img}
                alt={product.title}
                onClick={() => setCurrentImage(index)}
                border={
                  currentImage === index
                    ? { base: "", sm: "", md: "", lg: "2px solid black" }
                    : ""
                }
                display={
                  index < imageIndex || index >= imageIndex + 3
                    ? { base: "", sm: "", md: "", lg: "none" }
                    : ""
                }
                maxH="600px"
              />
            ))}
            <IconButton
              w="fit-content"
              aria-label="Next"
              icon={<ChevronDown />}
              onClick={handleDownClick}
              variant="ghost"
              display={displayValue}
            />
          </Flex>
          <Image
            pr={{ base: 0, sm: 0, md: 0, lg: 10 }}
            pl={{ base: 0, sm: 0, md: 0, lg: 10 }}
            src={product.images[currentImage]}
            alt={product.title}
            maxH="600px"
            display={displayValue}
          />
        </Grid>
        <Flex direction="column" justify="flex-start" gap="3">
          <Heading textAlign="left">{product?.title}</Heading>
          <HStack>
            <Badge
              variant="solid"
              colorScheme="green"
              width="fit-content"
              borderRadius="4"
              fontSize="md"
            >
              {product.ratings.average} ★
            </Badge>
            <Badge
              variant="solid"
              colorScheme="yellow"
              width="fit-content"
              borderRadius="4"
              fontSize="md"
            >
              {product.ratings.total} Ratings
            </Badge>
          </HStack>
          <HStack spacing="1" alignItems="baseline">
            <Text as="b" color="brand.dark" fontSize="2xl">
              ₹{product?.price || 0}
            </Text>
            <Text as="del" color="gray.400" fontSize="1xl">
              ₹{product?.mrp || 0}
            </Text>
            <Text as="b" color="green.400" fontSize="1xl">
              {product?.mrp
                ? `${Math.floor(
                    ((product.mrp - product.price) / product.mrp) * 100
                  )}% off`
                : ""}
            </Text>
          </HStack>
          <Text fontSize="sm" textAlign="left">
            {" "}
            Inclusive of all taxes
          </Text>
          <Divider />
          <Stack spacing="1">
            <HStack>
              {<MapPin size="20px" />}
              <Text as="b" fontSize="sm" textAlign="left">
                Check Delivery
              </Text>
            </HStack>

            <HStack
              borderRadius="sm"
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
            <Text fontSize="sm" textAlign="left">
              {" "}
              Expected delivery by 12th August
            </Text>
          </Stack>

          <Divider />

          <ButtonGroup display="flex" flexWrap="wrap">
            <Button
              mt="5px"
              mb="5px"
              w="fit-content"
              borderRadius={1}
              leftIcon={<ShoppingCart />}
            >
              ADD TO CART
            </Button>
            <Button
              mt="5px"
              mb="5px"
              w="fit-content"
              variant="outline"
              borderRadius={1}
              leftIcon={<Heart />}
            >
              WISHLIST
            </Button>

            <Button
              mt="5px"
              mb="5px"
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

          <Divider />

          <Stack spacing="1">
            <Text as="b" fontSize="md">
              Product Description
            </Text>
            <p fontSize="5em">{product.description}</p>
            <Accordion allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton pt="8px" pb="8px" pl={0} pr={0}>
                    <Box as="b" flex="1" textAlign="left">
                      Shipping & Returns
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} pl={0} pr={0}>
                  <Flex
                    direction="column"
                    backgroundColor="brand.ow"
                    p="10px"
                    borderRadius={1}
                  >
                    <b>Shipping</b>
                    Free shipping available for orders above 500/- within India.
                    <br />
                    Orders dispatched every day at 4 pm except on public
                    holidays.
                    <br />
                    After dispatch:
                    <br />
                    It takes about 2 to 5 working days for metro cities.
                    <br />
                    4 to 7 working days for the rest of India.
                    <br />
                    We ship your order from Mumbai, Maharashtra.
                  </Flex>
                  <br />
                  <Flex
                    direction="column"
                    backgroundColor="brand.ow"
                    p="10px"
                    borderRadius={1}
                  >
                    <b>Returns</b>
                    Returns and Exchanges available within 7 days of receiving
                    the item/s. Returns and Exchanges of Items on sale and items
                    below 500/- will be chargeable at Rs.150/-
                    <br />
                    For more details, please check our return policy here.
                  </Flex>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton pt="8px" pb="8px" pl={0} pr={0}>
                    <Box as="b" flex="1" textAlign="left">
                      Specifications
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} pl={0} pr={0}>
                  <Flex
                    direction="column"
                    backgroundColor="brand.ow"
                    p="10px"
                    borderRadius={1}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </Flex>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Stack>
        </Flex>
      </Grid>
    </>
  );
}

export default Product;
