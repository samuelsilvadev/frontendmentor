import { forwardRef } from "react";
import { MenuItem } from "components/menu-item";
import type { MenuStructure } from "components/menu";
import { MenuUlList } from "./MenuList.styles";

export const MenuList = forwardRef<
  HTMLUListElement,
  React.HTMLAttributes<HTMLUListElement> & {
    popup?: boolean;
    menus: MenuStructure[];
  }
>(({ popup, menus, ...remainingProps }, ref) => {
  return (
    <MenuUlList {...remainingProps} ref={ref} popup={popup}>
      {menus.map((menu) => {
        return (
          <li key={menu.label}>
            <MenuItem {...menu} />
          </li>
        );
      })}
    </MenuUlList>
  );
});
