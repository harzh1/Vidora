import logo from "/src/assets/logo.png";

import {
  Flex,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

function Header() {
  return (
    <>
      <Flex as="nav" alignItems="center">
        <HStack>
          <img className="logo-img" alt="logo" src={logo} />
          <p className="logo-name">Vidora</p>
        </HStack>
        <Spacer />
        <InputGroup pr="10px" width="359px">
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.300" />
          </InputLeftElement>
          <Input type="text" placeholder="Search" width="359px" />
        </InputGroup>
      </Flex>
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
