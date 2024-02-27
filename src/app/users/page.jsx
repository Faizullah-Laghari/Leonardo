import UserBox from "@/components/topUsers/page";
import classes from './users.module.css';
import Posts from "@/components/posts/posts";
export default function Users () {
  return (
    <>
    <Posts>Top scoring users</Posts>
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
    <UserBox
     userName="kingtheme"
     avatarSrc="/art3.jpg"
     points="120"
     posts="1"
     following="0"
     followers="0"
     verified={true}
     bgImageSrc="/art2.jpg" 
    /> 
    <UserBox
     userName="king"
     avatarSrc="/art2.jpg"
     points="900"
     posts="40"
     following="0"
     followers="0"
     verified={true}
     bgImageSrc="/art2.jpg" 

    /> 
    <UserBox
     userName="king"
     avatarSrc="/art2.jpg"
     points="900"
     posts="40"
     following="0"
     followers="0"
     verified={true}
     bgImageSrc="/art2.jpg" 

    /> 
    </div>
    </>
  );
}
