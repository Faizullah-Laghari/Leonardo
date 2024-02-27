import Link from "next/link";
import classes from './secondaryButton.module.css';

export default function SecondaryButton ({children, href, onClick, className, isActive}) {
    const btnClassName = isActive ? `${classes.btn} ${classes.active} ${className}` : `${classes.btn} ${className}`;
    
    return (
        <li href={href} onClick={onClick} className={btnClassName}>
            {children}
        </li>
    )
}
