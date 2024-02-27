import classes from './register.module.css';
import Link from 'next/link';
import LoginForm from "@/components/registerationFrom/registeration";
export default function Register() {
  return (
    <section className={classes.registeration}>
      <h4>You can login with the demo account:</h4>
      <p>username: kingtheme</p>
      <p>pass: kingtheme</p>
      <LoginForm />
      <Link href="/login">
      <button className={classes.login_button}>Login</button>
      </Link>
    </section>
  );
}
