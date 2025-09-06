import styles from "./Button.module.css";

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
}

export const Button = ({ onClick, children }: ButtonProps) => {
  const { button } = styles;
  return (
    <button className={button} onClick={onClick}>
      {children}
    </button>
  );
};
