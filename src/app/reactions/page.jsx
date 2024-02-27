import HomeGallery from "@/components/gallery/gallery";
import classes from "./reactions.module.css";
export default function () {
  return (
    <section className={classes.reaction_section}>
      <HomeGallery
        showFilterButtons={true}
        filterOptions={[
          { name: "Haha", filter: "Recent" },
          { name: "Love", filter: "Hot!" },
          { name: "Lol", filter: "Most Comments" },
          { name: "Cute", filter: "Most Votes" },
          { name: "Omg", filter: "Most Views" },
          { name: "WTF", filter: "WTF" },
          { name: "Cry", filter: "Cry" },
          { name: "Angry", filter: "Angry" },
        ]}
      />
    </section>
  );
}
