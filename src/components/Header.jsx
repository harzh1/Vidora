import logo from "/src/assets/logo.png";

import { Avatar, Divider, HStack, IconButton, Input } from "@chakra-ui/react";
import { Heart, Search, ShoppingCart, UserRound } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    return () => {
      console.log("Home clicked");
      navigate("/");
    };
  };

  return (
    <>
      <HStack as="nav" alignItems="center" justify="space-between">
        <HStack onClick={handleHomeClick()}>
          <img className="logo-img" alt="logo" src={logo} />
          <p className="logo-name">Vidora</p>
        </HStack>
        <HStack border={{ md: "1px ", lg: "1px" }} borderRadius={4}>
          <IconButton
            aria-label="search"
            icon={<Search />}
            variant="ghost"
            size={{ base: "lg", sm: "lg", md: "md" }}
          />

          <Input
            type="text"
            placeholder="Search"
            width="359px"
            display={{ base: "none", sm: "none", md: "block" }}
            variant="unstyled"
          />
        </HStack>
        <HStack spacing="10px" pr="20px">
          <Avatar size="sm" bg="teal.500" icon={<UserRound />} />
          <IconButton
            w="fit-content"
            aria-label="account"
            icon={<Heart />}
            variant="ghost"
          />
          <IconButton
            w="fit-content"
            aria-label="account"
            icon={<ShoppingCart />}
            variant="ghost"
          />
        </HStack>
      </HStack>
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
