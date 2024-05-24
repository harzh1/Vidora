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
  IconButton,
  Image,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
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
import { useParams } from "react-router-dom";

function Product() {
  const [currentImage, setCurrentImage] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const { id } = useParams();
  console.log(id);

  const [product, setProduct] = useState([]);

  const fetchProducts = async () => {
    const response = await fetch(`http://localhost:3000/products/${id}`);
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
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="#">T-shirt</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">OverSized T-Shirt</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Grid templateColumns="repeat(2, 1fr)" gap={5} m="10">
        <Grid templateColumns="1fr 5fr">
          <Stack pl={10} alignItems="center">
            <IconButton
              w="fit-content"
              aria-label="Previous"
              icon={<ChevronUp />}
              onClick={handleUpClick}
              variant="ghost"
            />
            {product.images.map((img, index) => (
              <Image
                key={product.id + "child" + index}
                src={img}
                alt={product.title}
                onClick={() => setCurrentImage(index)}
                outline={currentImage === index ? "2px solid black" : ""}
                display={
                  index < imageIndex || index >= imageIndex + 3 ? "none" : ""
                }
              />
            ))}
            <IconButton
              w="fit-content"
              aria-label="Next"
              icon={<ChevronDown />}
              onClick={handleDownClick}
              variant="ghost"
            />
          </Stack>
          <Image
            pr="10"
            pl={10}
            src={product.images[currentImage]}
            alt={product.title}
          />
        </Grid>
        <Flex direction="column" justify="flex-start" gap="3">
          <Heading textAlign="left">{product?.title}</Heading>
          <HStack spacing="1">
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

          <ButtonGroup pr={10}>
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
              WISHLIST
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
