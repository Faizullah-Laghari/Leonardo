// import Image from "next/image";
// import Link from "next/link";
// import classes from './users.module.css';

// export default function UserBox({ userName, avatarSrc, points, posts, following, followers, verified }) {
//   return (
//     <div className={classes.user_boxx}>
//       <div className={classes.user_bg}></div>
//       <div className={classes.user_box}>
//         <div className="user-box-pt">
//           <div className="user-box-cover">
//             <div className="king-box-bg loaded"></div>
//             <div className={classes.user_box_up}>
//               <Link href={`/user/${userName}`}>
//                   <Image className="king-avatar king-lazy loaded" width="90" height="90" src={avatarSrc} alt={userName}/>
//               </Link>
//             </div>
//           </div>
//           <div className="user-box-in">
//             <div className={classes.user_box_name}>
//               <Link href={`/user/${userName}`}>
//                 <h3>{userName}</h3>
//               </Link>
//               {verified && <div className="verify-button verified"><i className="fa fa-check-circle"></i></div>}
//             </div>
//             <div className={classes.user_box_tp}>
//               <span className="user-box-point"><strong>{points}</strong> Points</span>
//             </div>
//             <div className={classes.king_stats}>
//               <span><strong>{posts}</strong>Posts</span>
//               <span><strong>{following}</strong>Following</span>
//               <span><strong>{followers}</strong>Followers</span>
//             </div>
//             <div className="user-box-buttons">
//               <div id={`follow_${userName}`}></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



import Image from "next/image";
import Link from "next/link";
import classes from './users.module.css';

export default function UserBox({ userName, avatarSrc, points, posts, following, followers, verified, bgImageSrc }) {
  return (
    <div className={classes.user_boxx}>
      <div 
        className={classes.user_bg} 
        style={{ backgroundImage: `url(${bgImageSrc})` }} // Apply the background image dynamically
      >
      </div>
      <div className={classes.user_box}>
        <div className="user-box-pt">
          <div className="user-box-cover">
            <div className="king-box-bg loaded"></div>
            <div className={classes.user_box_up}>
              <Link href={`/users/${userName}`} passHref>
                  <Image className="king-avatar king-lazy loaded" width="90" height="90" src={avatarSrc} alt={userName} unoptimized={true}/>
              </Link>
            </div>
          </div>
          <div className="user-box-in">
            <div className={classes.user_box_name}>
              <Link href={`/users/${userName}`} passHref>
               <h3>{userName}</h3>
              </Link>
              {verified && <div className="verify-button verified"><i className="fa fa-check-circle"></i></div>}
            </div>
            <div className={classes.user_box_tp}>
              <span className="user-box-point"><strong>{points}</strong> Points</span>
            </div>
            <div className={classes.king_stats}>
              <span><strong>{posts}</strong>Posts</span>
              <span><strong>{following}</strong>Following</span>
              <span><strong>{followers}</strong>Followers</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
