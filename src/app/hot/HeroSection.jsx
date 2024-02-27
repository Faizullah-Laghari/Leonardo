import HomeGallery from "@/components/gallery/gallery";
import classes from './hotposts.module.css';
export default function HotPosts() {
    return (
        <>
        <div className={classes.hotposts}>
        <h2>
            Hot Posts
        </h2>
        </div>
        <div className={classes.galleryItems}>
        <HomeGallery></HomeGallery>
        </div>
        </>
    )
}