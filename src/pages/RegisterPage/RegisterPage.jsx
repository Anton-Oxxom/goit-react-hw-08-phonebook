import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'authorization';

import styles from './RegisterPage.module.css';

export default function RegisterPage() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = element => {
    const { name, value } = element.currentTarget;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = element => {
    element.preventDefault();
    dispatch(authOperations.register({ ...form }));
    setForm({ name: '', email: '', password: '' });
  };

  const { name, email, password } = form;
  return (
    <div className={styles.section}>
      <h2 className={styles.title}>Будь ласка зареєструйтесь</h2>
      <form onSubmit={handleSubmit}>
        <label className={styles.label}>
          Ім'я
          <input
            className={styles.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces."
            required
            value={name}
            onChange={handleChange}
          />
        </label>
        <label className={styles.label}>
          Email
          <input
            className={styles.input}
            type="email"
            name="email"
            pattern="([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})"
            title="Example user@mail.com"
            required
            value={email}
            onChange={handleChange}
          />
        </label>
        <label className={styles.label}>
          Пароль
          <input
            className={styles.input}
            type="password"
            name="password"
            required
            value={password}
            onChange={handleChange}
          />
        </label>
        <button type="submit" className={styles.button}>
          Реєстрація
        </button>
      </form>
    </div>
  );
}