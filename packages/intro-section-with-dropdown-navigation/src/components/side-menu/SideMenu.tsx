import { Button } from "components/button";
import { ReactComponent as CloseMenuIcon } from "components/icons/icon-close-menu.svg";
import { useMenu } from "state/menu/MenuProvider";
import { useEventListener } from "usehooks-ts";
import { Aside, CloseButtonWrapperDiv } from "./SideMenu.styles";

type SideMenuProps = React.HTMLAttributes<HTMLElement>;

export function SideMenu(props: SideMenuProps) {
  const { close } = useMenu();

  useEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      close();
    }
  });

  return (
    <Aside {...props}>
      <CloseButtonWrapperDiv>
        <Button variation="basic" aria-label="Close menu" onClick={close}>
          <CloseMenuIcon />
        </Button>
      </CloseButtonWrapperDiv>
    </Aside>
  );
}
