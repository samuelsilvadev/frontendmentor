import type { ReactNode } from "react";
import { StyledButton } from "./Button.styles";

type ButtonProps = {
  variation: "basic" | "primary" | "secondary" | "link";
  full?: boolean;
  align?: "start" | "end" | "center";
  children: ReactNode;
} & React.HTMLAttributes<HTMLButtonElement>;

export function Button({
  children,
  variation,
  full = false,
  align = "start",
  ...remainingProps
}: ButtonProps) {
  return (
    <StyledButton
      variation={variation}
      full={full}
      align={align}
      {...remainingProps}
    >
      {children}
    </StyledButton>
  );
}
