// Button
export type Variant = 'primary' | 'secondary';
export type Size = 'small' | 'medium' | "large";
export type Target = '_self' | '_blank';

export interface LinkButtonProps {
  href: string;
  text: string;
  disabled?: boolean;
  outline?: boolean;
  target?: Target;
  class?: string;
  variant?: Variant;
  size?: Size;
}