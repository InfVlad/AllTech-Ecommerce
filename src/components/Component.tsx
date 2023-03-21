export interface ButtonProps {
  label: string;
}

export const Button: React.FC<ButtonProps> = ({ label }: ButtonProps) => {
  return <button type='button'>{label}</button>;
};
