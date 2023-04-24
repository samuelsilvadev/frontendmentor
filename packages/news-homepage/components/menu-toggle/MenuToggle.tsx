import menuOpenSrc from "public/images/icon-menu.svg";
import menuCloseSrc from "public/images/icon-menu-close.svg";
import Image from "next/image";
import { CSSProperties } from "react";

type MenuToggleProps = {
  variation: "open" | "close";
  style?: CSSProperties;
  onClick?: () => void;
};

export const MenuToggle = ({ variation, style, onClick }: MenuToggleProps) => {
  return (
    <>
      <style jsx>{`
        button {
          all: unset;
          cursor: pointer;
          display: flex;
        }

        @media (min-width: 769px) {
          button {
            display: none;
          }
        }
      `}</style>
      <button style={style} onClick={onClick}>
        <Image
          src={variation === "open" ? menuOpenSrc : menuCloseSrc}
          alt="Menu toggle"
          aria-hidden
        />
      </button>
    </>
  );
};
