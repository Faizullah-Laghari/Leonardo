// import Link from "next/link";
// import classes from './primaryButton.module.css';
// export default function PrimaryButton ({children}) {
//     return (
//         <li  className={classes.btn}>
//             <Link href="/">{children}</Link>
//         </li>
//     )
// }

 import classes from './primaryButton.module.css';

export default function PrimaryButton ({children, href, onClick, className, isActive}) {
    const btnClassName = isActive ? `${classes.btn} ${classes.active} ${className}` : `${classes.btn} ${className}`;
    
    return (
        <li href={href} onClick={onClick} className={btnClassName}>
            {children}
        </li>
    )
}
