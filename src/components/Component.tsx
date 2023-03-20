export interface ButtonProps {
  label: string;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ label, onClick }: ButtonProps) => {
  return (
    <button type='button' onClick={onClick}>
      {label}
    </button>
  );
};
