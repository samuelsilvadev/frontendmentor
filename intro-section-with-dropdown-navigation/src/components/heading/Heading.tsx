import { StyledHeading } from "./Heading.styles";
import type { ReactNode } from "react";

type HeadingProps = {
  children: ReactNode;
  align?: "start" | "end" | "center";
} & React.HTMLAttributes<HTMLHeadingElement>;

export function Heading({
  children,
  align = "start",
  ...remainingProps
}: HeadingProps) {
  return (
    <StyledHeading {...remainingProps} align={align}>
      {children}
    </StyledHeading>
  );
}
