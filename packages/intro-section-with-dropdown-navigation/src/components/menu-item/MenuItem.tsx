import { MenuList } from "components/menu-list";
import { MenuStructure } from "components/menu/Menu";
import { BREAKPOINTS } from "components/styles.config";
import { useRef, useState } from "react";
import { useClickAnyWhere, useMediaQuery } from "usehooks-ts";
import {
  StyledArrowDownIcon,
  StyledArrowUpIcon,
  StyledIcon,
  StyledButton,
  WrapperDiv,
} from "./MenuItem.styles";

type MenuItemProps = MenuStructure & React.HTMLAttributes<HTMLElement>;

export function MenuItem({
  label,
  link,
  icon: Icon,
  submenus = [],
  ...remainingProps
}: MenuItemProps) {
  const isGteMd = useMediaQuery(`(min-width: ${BREAKPOINTS.MD})`);
  const subMenuRef = useRef<HTMLUListElement | null>(null);
  const toggleButtonRef = useRef<HTMLButtonElement | null>(null);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const hasSubmenus = (submenus?.length ?? 0) > 0;

  useClickAnyWhere((event) => {
    if (isGteMd) {
      const wasClickOnToggleButton = toggleButtonRef.current === event.target;
      const wasClickInsideSubmenu = subMenuRef.current?.contains(
        event.target as Node
      );

      if (!wasClickInsideSubmenu && !wasClickOnToggleButton) {
        setIsSubmenuOpen(false);
      }
    }
  });

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
    <WrapperDiv {...remainingProps}>
      <StyledButton
        ref={toggleButtonRef}
        variation="link"
        onClick={
          hasSubmenus ? handleToggleSubmenus : createOnNavigate(link ?? "/404")
        }
        full
      >
        <>
          {Icon && <StyledIcon as={Icon} />}
          {label}
          {renderArrowIcon()}
        </>
      </StyledButton>
      {hasSubmenus && isSubmenuOpen && (
        <MenuList ref={subMenuRef} menus={submenus} popup={isGteMd} />
      )}
    </WrapperDiv>
  );
}
