import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import {
  SimpleGrid,
  Card,
  CardBody,
  CardFooter,
  Image,
  Text,
  HStack,
  useBreakpointValue,
} from "@chakra-ui/react";

function Products({ products }) {
  const navigate = useNavigate();

  const handleClick = (prod) => {
    return () => {
      navigate(`/prod/${prod.id}`, { state: { product: prod } });
    };
  };

  const fontSize = useBreakpointValue({ base: "md", md: "2xl" });
  const delFontSize = useBreakpointValue({ base: "sm", md: "1xl" });
  const offFontSize = useBreakpointValue({ base: "sm", md: "1xl" });

  return (
    <SimpleGrid
      columns={{ base: "1", sm: "2", md: "3", lg: "4" }}
      spacing={{ base: "10px", sm: "10px", md: "20px", lg: "20px" }}
      m="25px"
      minHeight={"100vh"}
    >
      {products.map((product) => (
        <Card
          key={product.id}
          overflow="hidden"
          variant="outline"
          onClick={handleClick(product)}
        >
          <CardBody p="0" backgroundColor="brand.ow">
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
            <HStack mt="6px" spacing="1" alignItems="baseline">
              <Text as="b" color="brand.dark" fontSize={fontSize}>
                ₹{product.price}
              </Text>
              <Text as="del" color="gray.400" fontSize={delFontSize}>
                ₹{product?.mrp || 0}
              </Text>
              <Text as="b" color="green.400" fontSize={offFontSize}>
                {product?.mrp
                  ? `${Math.floor(
                      ((product.mrp - product.price) / product.mrp) * 100
                    )}% off`
                  : ""}
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
      id: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      images: PropTypes.arrayOf(PropTypes.string),
      price: PropTypes.number,
      mrp: PropTypes.number,
      ratings: PropTypes.shape({
        average: PropTypes.number,
        total: PropTypes.number,
      }),
    })
  ).isRequired,
};

export default Products;
