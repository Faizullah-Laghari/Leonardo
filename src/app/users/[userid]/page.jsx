import UserBox from '@/components/topUsers/page';
import classes from './usersId.module.css';
import HomeGallery from '@/components/gallery/gallery';
export default function Users () {
  return (
    <div className= {classes.userBoxes}>
    <UserBox
     userName="king"
     avatarSrc="/art3.jpg"
     points="900"
     posts="40"
     following="0"
     followers="0"
     verified={true}
     bgImageSrc="/art2.jpg" 
    /> 
   <HomeGallery
        showFilterButtons={true}
        filterOptions={[
          { name: "All Post", filter: "Recent" },
          { name: "User king", filter: "Hot!" },
          { name: "Wall", filter: "Most Comments" },
          { name: "Followers", filter: "Most Votes" },
          { name: "Following", filter: "Most Views" },
        ]}
      />
    </div>
  );
}
