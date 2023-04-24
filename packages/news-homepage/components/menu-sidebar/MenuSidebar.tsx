import { MenuToggle } from "components/menu-toggle";
import type { ReactNode } from "react";

type MenuSidebarProps = { onClose?: () => void; children?: ReactNode };

export const MenuSidebar = ({ onClose, children }: MenuSidebarProps) => {
  return (
    <>
      <style jsx>{`
        aside {
          background-color: var(--colors-neutral-off-white);
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          width: 70%;
          height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          padding-inline: 20px;
        }

        aside::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: var(--colors-neutral-very-dark-blue);
          transform: translateX(-100%);
          opacity: 0.5;
        }

        @media (min-width: 769px) {
          aside {
            display: none;
          }
        }
      `}</style>
      <aside>
        <MenuToggle
          variation="close"
          onClick={onClose}
          style={{ marginTop: "30px" }}
        />
        {children}
      </aside>
    </>
  );
};
