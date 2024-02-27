
'use client'
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import classes from './sideBar.module.css';
import Link from 'next/link';
import Modal from '../modal/modal';
import RegistrationForm from '../modal/registerationForm';
import Categoreis from '../categories/categories';

export default function SideBar() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isCategoriesOpen, setCategoriesOpen] = useState(false);
  const categoriesRef = useRef(null); 
  const categoriesIconRef = useRef(null);


  useEffect(() => {
    function handleClickOutside(event) {
      if (
        categoriesRef.current &&
        !categoriesRef.current.contains(event.target) &&
        event.target !== categoriesIconRef.current
      ) {
        setCategoriesOpen(false);
      }
    }
  
    if (isCategoriesOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isCategoriesOpen]);
  

  return (
    <>
      <div className={classes.sidebar}>
      <div>
      <Image
  className={classes.menu_icon}
  ref={categoriesIconRef}
  src="/menu.svg"
  alt="home"
  width={25}
  height={25}
  onClick={() => setCategoriesOpen(!isCategoriesOpen)}
/>

         </div>
         <div className={classes.midIcons}>
           <div className={classes.sidebar_menu}>
             <Link href="/">
               <Image src="/home.svg" alt="home" width={17} height={17} />
             </Link>
           </div>
           <div className={classes.sidebar_menu}>
             <Link href="/hot">
               <Image src="/flame.svg" alt="home" width={17} height={17} />
             </Link>
           </div>
           <div className={classes.sidebar_menu}>
             <Link href="/hashtag">
               <Image src="/hashtag.png" alt="home" width={17} height={17} />
             </Link>
           </div>
           <div className={classes.sidebar_menu}>
             <Link href="/users">
               <Image src="/users.png" alt="home" width={17} height={17} />
             </Link>
           </div>
         </div>
         <div className={classes.user}>
          <Image onClick={() => setModalOpen(true)} src="/user.png" alt="user" width={17} height={17} />
        </div>
        <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
          <RegistrationForm />
        </Modal>
      </div>

      <div ref={categoriesRef} className={`${classes.categoriesBase} ${isCategoriesOpen ? classes.categoriesOpen : ''}`}>
      <Categoreis onClose={() => setCategoriesOpen(false)} />
      </div>
      <div className={classes.menu_names}>
     <Link href="/"><p>Home</p></Link> 
     <Link href="/hot"><p>Hot!</p></Link> 
     <Link href="/hashtag"><p>Tags</p></Link> 
     <Link href="/users"><p>Users</p></Link> 
      </div>
    </>
  );
}
