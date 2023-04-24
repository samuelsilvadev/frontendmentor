import menuOpenSrc from "public/images/icon-menu.svg";
import menuCloseSrc from "public/images/icon-menu-close.svg";
import Image from "next/image";
import type { Menu } from "types/Menu";
import Link from "next/link";

type MenusProps = {
  items: Menu[];
};

export const Menus = ({ items }: MenusProps) => {
  return (
    <>
      <style jsx>{`
        ul {
          display: flex;
          align-items: flex-start;
          flex-direction: column;
          gap: 20px;
          width: 100%;
        }

        ul :global(a) {
          color: var(--colors-neutral-dark-grayish-blue);
          text-decoration: none;
        }

        ul :global(a:where(:hover, :focus, :active)) {
          color: var(--colors-primary-soft-orange);
        }

        @media (min-width: 769px) {
          ul {
            flex-direction: row;
            align-items: center;
            justify-content: flex-end;
          }
        }
      `}</style>
      <ul>
        {items.map(({ path, title }) => (
          <li key={title}>
            <Link href={path}>{title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
