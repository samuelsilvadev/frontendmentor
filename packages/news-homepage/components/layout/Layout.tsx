import Link from "next/link";
import type { ReactNode } from "react";
import type { Menu } from "types/Menu";
import logoSrc from "public/images/logo.svg";
import Image from "next/image";

type LayoutProps = { children: ReactNode; menus?: Menu[] };

export const Layout = ({ children, menus = [] }: LayoutProps) => {
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
          justify-content: space-between;
          flex-grow: 1;
        }

        ul {
          display: none;
        }

        ul :global(a) {
          color: var(--colors-neutral-dark-grayish-blue);
          text-decoration: none;
        }

        ul :global(a:where(:hover, :focus, :active)) {
          color: var(--colors-primary-soft-orange);
        }

        @media (min-width: 769px) {
          header {
            margin: 50px 0;
            height: 150px;
          }

          ul {
            display: flex;
            align-items: center;
            gap: 20px;
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
            <ul>
              {menus.map(({ path, title }) => (
                <li key={title}>
                  <Link href={path}>{title}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        {children}
      </div>
    </>
  );
};
