// Button
export type Variant = "primary" | "secondary";
export type Size = "small" | "medium" | "large";
export type Target = "_self" | "_blank";
export type ButtonType = "button" | "submit" | "reset";

export interface LinkButtonProps {
  // core behavior
  text: string;
  href?: string;
  target?: Target;

  // button-specific
  type?: ButtonType;

  // styling
  variant?: Variant;
  size?: Size;
  outline?: boolean;
  float?: boolean;
  class?: string;

  // state
  disabled?: boolean;
  loading?: boolean;
}

export interface Product {
  cardSrc: string;
  title: string;
  subtitle?: string;
  link: string;
  price?: string;
  buttonType?: Variant;
}
