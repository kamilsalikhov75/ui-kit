import { ReactTagProps } from "@types";
import { ButtonVariants, button } from "./variants";

export interface ButtonProps
  extends ButtonVariants,
    Omit<ReactTagProps<"button">, "color"> {}

export const Button = ({
  size = "sm",
  color = "primary",
  children,
  ...props
}: ButtonProps) => {
  return (
    <button className={button({ size, color })} {...props} data-testid="button">
      {children}
    </button>
  );
};
