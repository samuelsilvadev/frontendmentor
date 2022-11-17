import { forwardRef, ReactNode } from "react";
import { StyledButton } from "./Button.styles";

type ButtonProps = {
  variation: "basic" | "primary" | "secondary" | "link";
  full?: boolean;
  align?: "start" | "end" | "center";
  children: ReactNode;
} & React.HTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { children, variation, full = false, align = "start", ...remainingProps },
    ref
  ) => {
    return (
      <StyledButton
        ref={ref}
        variation={variation}
        full={full}
        align={align}
        {...remainingProps}
      >
        {children}
      </StyledButton>
    );
  }
);
