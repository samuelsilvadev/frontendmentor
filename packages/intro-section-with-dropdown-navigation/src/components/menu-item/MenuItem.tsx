import { Button } from "components/button";
import { MenuList } from "components/menu-list";
import { MenuStructure } from "components/menu/Menu";
import { useState } from "react";
import {
  StyledArrowDownIcon,
  StyledArrowUpIcon,
  StyledIcon,
} from "./MenuItem.styles";

type MenuItemProps = MenuStructure & React.HTMLAttributes<HTMLElement>;

export function MenuItem({
  label,
  link,
  icon: Icon,
  submenus = [],
  ...remainingProps
}: MenuItemProps) {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const hasSubmenus = (submenus?.length ?? 0) > 0;

  const handleToggleSubmenus = () => {
    setIsSubmenuOpen(!isSubmenuOpen);
  };

  const createOnNavigate = (link: string) => () => {
    console.log("navigate to...", link);
  };

  const renderArrowIcon = () => {
    if (!hasSubmenus) {
      return null;
    }

    return isSubmenuOpen ? <StyledArrowUpIcon /> : <StyledArrowDownIcon />;
  };

  return (
    <div {...remainingProps}>
      <Button
        variation="link"
        onClick={
          hasSubmenus ? handleToggleSubmenus : createOnNavigate(link ?? "/404")
        }
      >
        <>
          {Icon && <StyledIcon as={Icon} />}
          {label}
          {renderArrowIcon()}
        </>
      </Button>
      {hasSubmenus && isSubmenuOpen && <MenuList menus={submenus} />}
    </div>
  );
}
