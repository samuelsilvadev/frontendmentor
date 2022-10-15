import { Paragraph } from "./Text.styles";
import type { ReactNode } from "react";

type TextProps = {
  children: ReactNode;
  align?: "start" | "end" | "center";
} & React.HTMLAttributes<HTMLParagraphElement>;

export function Text({
  children,
  align = "start",
  ...remainingProps
}: TextProps) {
  return (
    <Paragraph {...remainingProps} align={align}>
      {children}
    </Paragraph>
  );
}
