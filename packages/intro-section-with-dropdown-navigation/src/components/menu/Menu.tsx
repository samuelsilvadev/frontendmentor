import { Button } from "components/button";
import { MenuItem } from "components/menu-item";
import { MenuUlList } from "./Menu.styles";

type MenuProps = React.HTMLAttributes<HTMLUListElement>;

const MENU_DEFINITION = [
  {
    label: "Features",
    children: [
      {
        label: "",
        link: "",
      },
    ],
  },
  {
    label: "Company",
    children: [
      {
        label: "",
        link: "",
      },
    ],
  },
  {
    label: "Careers",
    link: "",
  },
  {
    label: "About",
    link: "",
  },
];

export function Menu(props: MenuProps) {
  return (
    <>
      <MenuUlList {...props}>
        {MENU_DEFINITION.map(({ label, children = [] }) => {
          return (
            <li key={label}>
              <MenuItem label={label} submenus={children} />
            </li>
          );
        })}
      </MenuUlList>
      <MenuUlList>
        <li>
          <Button variation="link" full align="center">
            Login
          </Button>
        </li>
        <li>
          <Button variation="secondary" full align="center">
            Register
          </Button>
        </li>
      </MenuUlList>
    </>
  );
}
