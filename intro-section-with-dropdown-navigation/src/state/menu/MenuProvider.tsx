import { createContext, ReactNode, useContext, useState } from "react";

type MenuProviderProps = { children: ReactNode };

type Context =
  | {
      isOpen: boolean;
      open: () => void;
      close: () => void;
    }
  | undefined;

const MenuContext = createContext<Context>(undefined);

export const MenuProvider = ({ children }: MenuProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <MenuContext.Provider
      value={{ isOpen, open: handleOpen, close: handleClose }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export const MenuConsumer = MenuContext.Consumer;

export const useMenu = (): Exclude<Context, undefined> => {
  return (
    useContext(MenuContext) || {
      isOpen: false,
      open: () => null,
      close: () => null,
    }
  );
};

MenuContext.displayName = "Menu";
