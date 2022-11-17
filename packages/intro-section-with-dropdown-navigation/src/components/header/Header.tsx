import { StyledHeader, StyledMenu, StyledLogoIcon } from "./Header.styles";
import { ReactComponent as MenuIcon } from "components/icons/icon-menu.svg";
import { Button } from "components/button";
import { useMenu } from "state/menu/MenuProvider";
import { BREAKPOINTS } from "components/styles.config";
import { useMediaQuery } from "usehooks-ts";

export function Header() {
  const { open } = useMenu();
  const isLteMd = useMediaQuery(`(max-width: ${BREAKPOINTS.MD})`);

  return (
    <StyledHeader>
      <StyledLogoIcon />
      {isLteMd ? (
        <Button
          variation="basic"
          aria-label="Open menu on sidebar"
          onClick={open}
        >
          <MenuIcon />
        </Button>
      ) : (
        <StyledMenu />
      )}
    </StyledHeader>
  );
}
