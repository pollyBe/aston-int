import { NavLink, useParams } from "react-router-dom";
import styles from "./UserTabs.module.css";

export const UserTabs = () => {
  const { id } = useParams();

  const tabs = [
    { to: `/users/${id}/albums`, label: "Альбомы" },
    { to: `/users/${id}/todos`, label: "Задачи" },
    { to: `/users/${id}/posts`, label: "Посты" },
  ];

  return (
    <nav className={styles.tabs}>
      {tabs.map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            isActive ? styles.activeTab : styles.tab
          }
        >
          {label}
        </NavLink>
      ))}
    </nav>
  );
};
