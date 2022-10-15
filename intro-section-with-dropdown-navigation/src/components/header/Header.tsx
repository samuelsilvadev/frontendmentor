import { StyledHeader } from "./Header.styles";
import { ReactComponent as LogoIcon } from "components/icons/logo.svg";
import { ReactComponent as MenuIcon } from "components/icons/icon-menu.svg";
import { Button } from "components/button";

export function Header() {
  return (
    <StyledHeader>
      <LogoIcon />
      <Button variation="basic" aria-label="Open menu on sidebar">
        <MenuIcon />
      </Button>
    </StyledHeader>
  );
}
