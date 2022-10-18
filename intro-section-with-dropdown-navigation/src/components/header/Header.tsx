import { StyledHeader } from "./Header.styles";
import { ReactComponent as LogoIcon } from "components/icons/logo.svg";
import { ReactComponent as MenuIcon } from "components/icons/icon-menu.svg";
import { Button } from "components/button";
import { useMenu } from "state/menu/MenuProvider";

export function Header() {
  const { open } = useMenu();

  return (
    <StyledHeader>
      <LogoIcon />
      <Button
        variation="basic"
        aria-label="Open menu on sidebar"
        onClick={open}
      >
        <MenuIcon />
      </Button>
    </StyledHeader>
  );
}
