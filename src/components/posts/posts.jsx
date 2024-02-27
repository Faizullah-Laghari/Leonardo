import classes from './posts.module.css';
export default function Posts({children}) {
    return (
        <div className={classes.hotposts}>
        <h2>
          {children}
        </h2>
        </div>

    )
}

