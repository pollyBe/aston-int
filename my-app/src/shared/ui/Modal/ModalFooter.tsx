import { ReactNode } from "react";
import styles from "./Modal.module.css";

export const ModalFooter = ({ children }: { children: ReactNode }) => (
  <div className={styles.footer}>{children}</div>
);