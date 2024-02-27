
'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import PrimaryButton from "@/UI/primaryButton";
import classes from './hashtag.module.css';
import Posts from '@/components/posts/posts';

const categories = [
  "art", "fashion", "animal", "forest", "illustration",
  "mountain", "nature", "space", "girls", "tree",
  "colorful", "sea", "monsters", "portrait", "bear",
  "halloween", "minimal", "batman", "joker", "clock",
  "woman", "eye", "cat", "temple", "robot",
  "doll", "shoes", "bus", "child", "comics",
  "animals", "boy", "ai"
];

export default function HashTag() {
  const [currentPage, setCurrentPage] = useState(1);
  const buttonsPerPage = 30;
  const pageCount = Math.ceil(categories.length / buttonsPerPage);

  const indexOfLastButton = currentPage * buttonsPerPage;
  const indexOfFirstButton = indexOfLastButton - buttonsPerPage;
  const currentCategories = categories.slice(indexOfFirstButton, indexOfLastButton);

  return (
    <>
      <div>
        <Posts>Popular tags</Posts>
      </div>
      <div className={classes.buttons}>
        {currentCategories.map((category, index) => (
          <div key={index} className={classes.btn}>
            <Link href={`/hashtag/${category}`} passHref>
              <PrimaryButton as="a">{category}</PrimaryButton>
            </Link>
          </div>
        ))}
      </div>
      <div className={classes.pagination}>
         <button onClick={() => setCurrentPage(1)} className={classes.pageNav}>
           « 
         </button>
         {[...Array(pageCount).keys()].map(number => (
           <button
             key={number + 1}
             onClick={() => setCurrentPage(number + 1)}
             className={currentPage === number + 1 ? classes.active : ""}
           >
             {number + 1}
           </button>
         ))}
         <button onClick={() => setCurrentPage(pageCount)} className={classes.pageNav}>
            »
         </button>
       </div>
    </>
  );
}
