import { Button } from "components/button";
import { MenuItemWrapperDiv, StyledArrowDownIcon } from "./MenuItem.styles";

type MenuItemProps = {
  label: string;
  submenus?: { label: string; link: string }[];
} & React.HTMLAttributes<HTMLElement>;

export function MenuItem({
  label,
  submenus,
  ...remainingProps
}: MenuItemProps) {
  return (
    <MenuItemWrapperDiv {...remainingProps}>
      <Button variation="link">
        {label}
        {(submenus?.length ?? 0) > 0 ? <StyledArrowDownIcon /> : null}
      </Button>
    </MenuItemWrapperDiv>
  );
}
