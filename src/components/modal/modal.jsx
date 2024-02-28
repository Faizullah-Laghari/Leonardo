import Link from 'next/link';
import classes from './modal.module.css';
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <section className={classes.modalOverlay} onClick={onClose}>
      <div className={classes.modalContent} onClick={e => e.stopPropagation()}>
      <span onClick={onClose}>x</span>
        {children}
        <div className={classes.registeration_button}>
        <Link className={classes.signin_button} href="/login"> <button onClick={onClose}>Sign in</button></Link>
        <Link href="/register"><button onClick={onClose}>Registeration</button></Link>
       </div>
      </div>
    </section>
  );
};

export default Modal;
