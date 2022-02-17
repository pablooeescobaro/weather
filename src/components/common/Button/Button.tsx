import React, { FC, MouseEventHandler } from "react";
import styles from './Button.module.scss';

type Props = {
  onClick: MouseEventHandler;
};

export const Button: FC<Props> = ({ onClick, children }) => (
  <button onClick={onClick} className={styles.button}>
    {children}
  </button>
);

export default Button;
