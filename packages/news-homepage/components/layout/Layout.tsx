import Link from "next/link";
import { ReactNode, useState } from "react";
import type { Menu } from "types/Menu";
import logoSrc from "public/images/logo.svg";
import Image from "next/image";
import { MenuToggle } from "components/menu-toggle";
import { MenuSidebar } from "components/menu-sidebar";
import { Menus } from "components/menus";

type LayoutProps = { children: ReactNode; menus?: Menu[] };

export const Layout = ({ children, menus = [] }: LayoutProps) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleSetSidebarOpen = () => setSidebarOpen(true);

  const handleSetSidebarClose = () => setSidebarOpen(false);

  return (
    <>
      <style jsx>{`
        header,
        nav {
          display: flex;
          align-items: center;
        }

        header {
          height: 100px;
          margin-bottom: 20px;
        }

        div {
          max-width: 95%;
          margin: 0 auto;
        }

        nav {
          flex-grow: 1;
        }

        :global(ul) {
          margin-top: 122px;
        }

        nav > :global(ul) {
          display: none;
        }

        @media (min-width: 769px) {
          header {
            margin: 50px 0;
            height: 150px;
          }

          :global(ul) {
            display: none;
            margin-top: 0;
          }

          nav > :global(ul) {
            display: flex;
          }
        }

        @media (min-width: 1440px) {
          div {
            max-width: 1108px;
          }
        }
      `}</style>
      <div>
        <header>
          <nav>
            <Link href="/">
              <Image {...logoSrc} alt="Black brand logo" />
            </Link>
            <MenuToggle variation="open" onClick={handleSetSidebarOpen} />
            <Menus items={menus} />
          </nav>
        </header>
        {isSidebarOpen && (
          <MenuSidebar onClose={handleSetSidebarClose}>
            <Menus items={menus} />
          </MenuSidebar>
        )}
        {children}
      </div>
    </>
  );
};
