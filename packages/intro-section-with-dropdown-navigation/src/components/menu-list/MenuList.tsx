import { MenuItem } from "components/menu-item";
import type { MenuStructure } from "components/menu";
import { MenuUlList } from "./MenuList.styles";

export function MenuList({
  menus,
  ...remainingProps
}: React.HTMLAttributes<HTMLUListElement> & {
  menus: MenuStructure[];
}) {
  return (
    <MenuUlList {...remainingProps}>
      {menus.map((menu) => {
        return (
          <li key={menu.label}>
            <MenuItem {...menu} />
          </li>
        );
      })}
    </MenuUlList>
  );
}
