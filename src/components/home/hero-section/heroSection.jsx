import classes from  './heroSection.module.css';
import GridBackground from "./gridBackground";
import HomeGallery from '@/components/gallery/gallery';
export default function HeroSection () {
    return (
        <section className={classes.header}>
        <main className={classes.main}>
           <GridBackground/>
           <HomeGallery/>
        </main>
        </section>
    )
}