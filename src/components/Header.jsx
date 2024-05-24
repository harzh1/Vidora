import logo from "/src/assets/logo.png";

import {
  Avatar,
  Divider,
  Flex,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { Heart, ShoppingCart, UserRound } from "lucide-react";
import { Link } from "react-router-dom";

function Header() {
  const handleHomeClick = () => {
    <Link to="/" />;
  };

  return (
    <>
      <Flex as="nav" alignItems="center" justify="space-between">
        <HStack onClick={handleHomeClick}>
          <img className="logo-img" alt="logo" src={logo} />
          <p className="logo-name">Vidora</p>
        </HStack>
        <InputGroup pr="10px" width="359px">
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.300" />
          </InputLeftElement>
          <Input type="text" placeholder="Search" width="359px" />
        </InputGroup>
        <HStack spacing="10px" pr="20px">
          <Avatar size="sm" bg="teal.500" icon={<UserRound />} />
          <IconButton
            w="fit-content"
            aria-label="account"
            icon={<Heart />}
            // onClick={handleUpClick}
            variant="ghost"
          />
          <IconButton
            w="fit-content"
            aria-label="account"
            icon={<ShoppingCart />}
            // onClick={handleUpClick}
            variant="ghost"
          />
        </HStack>
      </Flex>
      <Divider />
    </>
  );
}

{
  /* <header className="main-header">
        <div className="header-brand">
          <img className="logo-img" alt="logo" src={logo} />
          <p className="logo-name">Vidora</p>
        </div>
        <InputGroup width="359px">
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.300" />
          </InputLeftElement>
          <Input type="text" placeholder="Search" width="359px" />
        </InputGroup>
      </header> */
}

export default Header;
