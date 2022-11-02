import { Button } from "components/button";
import { MenuList } from "components/menu-list";
import { ReactComponent as TodoListIcon } from "components/icons/icon-todo.svg";
import { ReactComponent as CalendarIcon } from "components/icons/icon-calendar.svg";
import { ReactComponent as RemindersIcon } from "components/icons/icon-reminders.svg";
import { ReactComponent as PlanningIcon } from "components/icons/icon-planning.svg";
import { MenuUlList, Nav } from "./Menu.styles";

type MenuProps = React.HTMLAttributes<HTMLElement>;

const MENU_DEFINITION: MenuStructure[] = [
  {
    label: "Features",
    submenus: [
      {
        label: "Todo list",
        link: "/features/todo-list",
        icon: TodoListIcon,
      },
      {
        label: "Calendar",
        link: "/features/calendar",
        icon: CalendarIcon,
      },
      {
        label: "Reminders",
        link: "/features/reminders",
        icon: RemindersIcon,
      },
      {
        label: "Planning",
        link: "/features/planning",
        icon: PlanningIcon,
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
  icon?: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
  submenus?: MenuStructure[];
};

export function Menu(props: MenuProps) {
  return (
    <Nav {...props}>
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
    </Nav>
  );
}
