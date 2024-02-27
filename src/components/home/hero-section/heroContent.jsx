import SearchBar from "./searchBar";
import classes from "./heroContent.module.css";
import PrimaryButton from "@/UI/primaryButton";
import Link from "next/link";
export default function HeroContent() {
  return (
    <section className={classes.mainSection}>
      <div className={classes.heroContent}>
        <h1>Leonardo</h1>
        <div className={classes.gradientLine}></div>
        <p>Create any image from your imagination.</p>
        <SearchBar />
        <div className={classes.buttons}>
          <div>
            <p>Discover</p>
          </div>
          <Link href="/hashtag/art"> <PrimaryButton> art</PrimaryButton></Link>
          <Link href="/hashtag/fashion"><PrimaryButton> fashion</PrimaryButton></Link>
          <Link href="/hashtag/animal"><PrimaryButton> animal</PrimaryButton></Link>
          <Link href="/hashtag/forest"><PrimaryButton> forest</PrimaryButton></Link>
          <Link href="/hashtag/illustration"><PrimaryButton> illustration</PrimaryButton></Link>
        </div>
      </div>
    </section>
  );
}
