// Login.js

'use client'
import Link from 'next/link';
import RegistrationForm from "@/components/modal/registerationForm";
import classes from  './login.module.css';

export default function Login() {
  return (
    <section className={classes.login_page}>
      <RegistrationForm customClasses={classes.login} customContent="Login" useLabels={true} showButton={true} />
     <Link href='/forgot'><p>I forgot my password</p></Link> 
      <Link href="/register">
        <button className={classes.register_button}>Registration</button>
      </Link>
    </section>
  )
}
