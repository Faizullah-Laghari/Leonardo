import Link from 'next/link';
import classes from './registeration.module.css';

export default function RegistrationForm({ customClasses, customContent, useLabels, onClose, showButton }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Form submitted!');
    onClose(); 
  };

  return (
    <form onSubmit={handleSubmit} className={`${classes.form} ${customClasses}`}>
      <section className={classes.form_fields}>
        <div className={classes.input}>
          {useLabels ? <label htmlFor="email">Email or Username</label> : null}
          <input type="text" required placeholder={!useLabels ? 'Email or Username' : ''} id="email" />
        </div>
        <div className={classes.input}>
          {useLabels ? <label htmlFor="password">Password</label> : null}
          <input type="password" required placeholder={!useLabels ? 'Password' : ''} id="password" />
        </div>
        <div className={classes.remember_field}>
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Remember</label>
        </div>
        {showButton && (
            <button type="submit">{customContent ? customContent : 'Sign in'}</button>
        )}
      </section>
    </form>
  );
}
