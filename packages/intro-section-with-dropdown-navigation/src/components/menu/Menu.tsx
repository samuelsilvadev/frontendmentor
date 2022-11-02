import { Button } from "components/button";
import { MenuList } from "components/menu-list";
import { MenuUlList } from "./Menu.styles";

type MenuProps = React.HTMLAttributes<HTMLElement>;

const MENU_DEFINITION: MenuStructure[] = [
  {
    label: "Features",
    submenus: [
      {
        label: "Todo list",
        link: "/features/todo-list",
      },
      {
        label: "Calendar",
        link: "/features/calendar",
      },
      {
        label: "Reminders",
        link: "/features/reminders",
      },
      {
        label: "Planning",
        link: "/features/planning",
      },
    ],
  },
  {
    label: "Company",
    submenus: [
      {
        label: "History",
        link: "/company/history",
      },
      {
        label: "Our team",
        link: "/company/our-team",
      },
      {
        label: "Blog",
        link: "/company/blog",
      },
    ],
  },
  {
    label: "Careers",
    link: "/careers",
  },
  {
    label: "About",
    link: "/about",
  },
];

export type MenuStructure = {
  label: string;
  link?: string;
  submenus?: MenuStructure[];
};

export function Menu(props: MenuProps) {
  return (
    <nav {...props}>
      <MenuList menus={MENU_DEFINITION} />
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
    </nav>
  );
}
