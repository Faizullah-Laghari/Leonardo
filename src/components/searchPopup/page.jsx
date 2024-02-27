import PrimaryButton from "@/UI/primaryButton";
import classes from "./searchPopup.module.css";
import Image from "next/image";
import SecondaryButton from "@/UI/secondaryButton";
export default function SearchPopup() {
  return (
    <section className={classes.search_popup}>
      <div className={classes.searchpopup}>
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
      <div className={classes.main_content}>
        <div className={classes.title}>
          <h1>Crochet doll of Vincent VanGogh</h1>
        </div>
        <div className={classes.text}>
          <p>
            A charming commercial shot featuring a cat litter box against a
            clean pastel backdrop, with the cat playfully exploring the
            surrounding space. The pastel backdrop enhances the cleanliness and
            freshness associated with the litter box, while the cat's presence
            adds a sense of liveliness and joy. Photographed by Massimo Listri,
            using a digital medium format camera, the lighting is a mix of soft
            diffused light and gentle highlights, capturing the dynamic
            interaction between the cat and the litter box.
          </p>
        </div>
        <div className={classes.buttons}>
          <PrimaryButton>Copy Prompt</PrimaryButton>
          <SecondaryButton>Open Dell-e</SecondaryButton>
        </div>
      </div>
    </section>
  );
}
