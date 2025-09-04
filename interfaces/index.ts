export interface CardProps {
  title: string;
}
export interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: "primary" | "secondary";
}
