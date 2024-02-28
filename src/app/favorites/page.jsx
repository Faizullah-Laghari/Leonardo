import Image from "next/image";
import classes from './favorite.module.css';
export default function Favorites () {
    return (
        <div className={classes.favorite_posts}>
            <div>
                <Image src="/love.png" width={100} height={100} alt="Favourite Posts"></Image>
            </div>
            <p>
            You have not added any posts to favorites yet.
            </p>
        </div>
    )
}