import PrimaryButton from "@/UI/primaryButton";
import classes from "./gallery.module.css";
import Image from "next/image";
import SecondaryButton from "@/UI/secondaryButton";
import UserBox from "@/components/topUsers/page";
import Register from "../register/page";
import Categoreis from "@/components/categories/categories";
import LoginForm from "@/components/registerationFrom/registeration";
export default function Gallery() {
  return (
    <>
      <section className={classes.hero_section}>
        <div className={classes.heroSection}>
          <div className={classes.images}>
            <Image src="/nature1.jpg" alt="Fashion image" fill></Image>
          </div>
          <div className={classes.images}>
            <Image src="/art2.jpg" alt="Fashion image" fill></Image>
          </div>
          <div className={classes.images}>
            <Image src="/art1.jpg" alt="Fashion image" fill></Image>
          </div>
        </div>
      </section>
      <div className={classes.detail_gallery}>
        <div className={classes.details_section}>
          <section className={classes.main}>
            <div className={classes.main_content}>
              <div className={classes.images}>
                <h1>Crochet doll of Vincent VanGogh</h1>
              </div>
              <div className={classes.images}>
                <p>
                  crochet doll of Vincent VanGogh HOLDING PAINTBRUSH in art
                  studio
                </p>
              </div>
              <div className={classes.buttons}>
                <PrimaryButton>Copy Prompt</PrimaryButton>
                <SecondaryButton>Open Dell-e</SecondaryButton>
              </div>
            </div>
          </section>
          <section className={classes.main}>
            <UserBox
              userName="kingtheme"
              avatarSrc="/art2.jpg"
              points="120"
              posts="1"
              following="0"
              followers="0"
              verified={true}
              bgImageSrc="/art3.jpg"
            />
          </section>
          <section className={classes.main}>
            <LoginForm />
          </section>
        </div>
        <Categoreis />
      </div>
    </>
  );
}
