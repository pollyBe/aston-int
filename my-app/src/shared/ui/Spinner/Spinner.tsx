
import { Loader2 } from "lucide-react";
import styles from "./Spinner.module.css";

interface SpinnerProps {
  size?: number;
  className?: string;
}

export const Spinner = ({ size = 42 }: SpinnerProps) => {
  const { overlay, spinner } = styles;

  return (
    <div className={overlay}>
      <Loader2 size={size} className={spinner} />
    </div>
  );
};
