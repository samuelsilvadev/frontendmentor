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
      {menus.map(({ label, link, submenus = [] }) => {
        return (
          <li key={label}>
            <MenuItem label={label} link={link} submenus={submenus} />
          </li>
        );
      })}
    </MenuUlList>
  );
}
