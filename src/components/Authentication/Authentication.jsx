import { NavLink } from 'react-router-dom';

import styles from './Authentication.module.css';

export default function Authentication() {
  return (
    <div className={styles.auth}>
      <NavLink
        to="/login"
        className={({ isActive }) => {
          return isActive
            ? [styles.button, styles.active].join(' ')
            : styles.button;
        }}
      >
        Вхід
      </NavLink>
      <NavLink
        to="/register"
        className={({ isActive }) => {
          return isActive
            ? [styles.button, styles.active].join(' ')
            : styles.button;
        }}
      >
        Реєстрація
      </NavLink>
    </div>
  );
}