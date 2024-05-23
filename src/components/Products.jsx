import PropTypes from "prop-types";

import {
  SimpleGrid,
  Card,
  CardBody,
  CardFooter,
  Image,
  Text,
  HStack,
} from "@chakra-ui/react";

function Products({ products }) {
  const handleClick = (prod) => {
    return () => {
      console.log(prod);
    };
  };

  return (
    <SimpleGrid
      columns={{ base: "2", sm: "2", md: "3", lg: "4" }}
      spacing="10"
      m="20px"
      minHeight={"100vh"}
    >
      {products.map((product) => (
        <Card
          key={product.id}
          overflow="hidden"
          variant="outline"
          onClick={handleClick(product)}
        >
          <CardBody w="100%" p="0" backgroundColor="brand.ow">
            <Image
              objectFit="cover"
              src={product.images[0]}
              alt={product.title}
            />
          </CardBody>

          <CardFooter
            backgroundColor="brand.ow"
            display="flex"
            flexDirection="column"
          >
            <Text as="b" align="left" fontSize="md" noOfLines={1}>
              {product.title}
            </Text>
            <HStack mt="6" spacing="1" alignItems="baseline">
              <Text as="b" color="brand.dark" fontSize="2xl">
                ${product.price}
              </Text>
              <Text as="del" color="gray.400" fontSize="1xl">
                ${parseInt(product.price * 1.33)}
              </Text>
              <Text as="b" color="green.400" fontSize="1xl">
                25% off
              </Text>
            </HStack>
          </CardFooter>
        </Card>
      ))}
    </SimpleGrid>
  );
}

Products.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      price: PropTypes.number,
      description: PropTypes.string,
      images: PropTypes.arrayOf(PropTypes.string),
      creationAt: PropTypes.string,
      updatedAt: PropTypes.string,
      category: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        image: PropTypes.string,
        creationAt: PropTypes.string,
        updatedAt: PropTypes.string,
      }),
    })
  ).isRequired,
};

export default Products;
