import type { ReactNode } from "react";
import { StyledButton } from "./Button.styles";

type ButtonProps = {
  variation: "basic" | "primary" | "secondary" | "link";
  children: ReactNode;
} & React.HTMLAttributes<HTMLButtonElement>;

export function Button({
  children,
  variation,
  ...remainingProps
}: ButtonProps) {
  return (
    <StyledButton variation={variation} {...remainingProps}>
      {children}
    </StyledButton>
  );
}
