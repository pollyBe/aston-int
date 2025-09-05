import { useState, useCallback } from "react";
import styles from "./PostLengthFilter.module.css";

interface PostLengthFilterProps {
  onFilterChange: (min: number, max: number) => void;
}

export const PostLengthFilter = ({ onFilterChange }: PostLengthFilterProps) => {
  const [minLength, setMinLength] = useState(0);
  const [maxLength, setMaxLength] = useState(100);

  const handleApply = useCallback(() => {
    onFilterChange(minLength, maxLength);
  }, [minLength, maxLength, onFilterChange]);

  return (
    <div className={styles.filterWrap}>
      <label>
        Min length:
        <input
          type="number"
          value={minLength}
          onChange={e => setMinLength(Number(e.target.value))}
        />
      </label>
      <label>
        Max length:
        <input
          type="number"
          value={maxLength}
          onChange={e => setMaxLength(Number(e.target.value))}
        />
      </label>
      <button onClick={handleApply}>Apply</button>
    </div>
  );
};
