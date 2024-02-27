import HomeGallery from "@/components/gallery/gallery";
import classes from './hotposts.module.css';
import Posts from "@/components/posts/posts";
export default function HotPosts() {
    return (
        <>
        <div className={classes.hotposts}>
       <Posts>Hot Posts</Posts>
        </div>
        <div className={classes.galleryItems}>
        <HomeGallery></HomeGallery>
        </div>
        </>
    )
}