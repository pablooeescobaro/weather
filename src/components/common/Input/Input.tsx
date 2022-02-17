import React, { KeyboardEventHandler } from "react";
import styles from "./Input.module.scss";

interface Props {
  className?: string;
  onChange: (event: string) => void;
  onKeyPress?: KeyboardEventHandler;
  value: string;
}

export const Input = ({ className, onChange, onKeyPress, value }: Props) => {
  return (
    <div className={className}>
      <div className={styles.input}>
        <input
          onChange={(event) => onChange(event.target.value)}
          onKeyPress={onKeyPress}
          placeholder="Enter location"
          value={value}
          type="text"
        />
      </div>
    </div>
  );
};

export default Input;
