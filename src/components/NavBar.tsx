import { HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import LOGO from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

function NavBar() {
  return (
    <HStack padding={10}>
      <Link to="/">
        <Image src={LOGO} boxSize="60px" objectFit="cover" />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
