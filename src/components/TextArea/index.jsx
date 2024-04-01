import { forwardRef } from "react";
import styles from "./style.module.scss";

export const TextArea = forwardRef(({ error, ...rest }, ref) => {
  return (
    <div className={styles.textAreaBox}>
      <textarea ref={ref} {...rest}></textarea>
      <div>{error ? <p>{error.message}</p> : null}</div>
    </div>
  );
});
