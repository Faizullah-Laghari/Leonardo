'use client';
import React, { useState, useEffect } from 'react';
import HomeGallery from '@/components/gallery/gallery';
import classes from './categories.module.css';
import Image from 'next/image';

export default function CategoryPage({ params }) {
  const categoryName = decodeURIComponent(params.categoriesId || '').trim().toLowerCase();

  const categoryDetails = {
    art: { img: '/articon.png', color: '#C7F8FE' }, 
    entertainment: { img: '/entertainmenticon.png', color: '#9490FC' },
    games: { img: '/gamesicon.png', color: '#43FE00' },
    history: { img: '/historyicon.png', color: '#E8B072' },
    "how to": { img: '/how-to-use.png', color: '#F7E446' },
    internet: { img: '/globe.png', color: '#747BF6' },
    music: { img: '/headphones.png', color: '#50F563' },
    nature: { img: '/trees.png', color: '#85F387' },
    sports: { img: '/football.png', color: '#F92AFD' },
    technology: { img: '/cpu.png', color: '#636273' },
    travel: { img: '/location.png', color: '#FE356C' },
    animals: { img: '/pawprint.png', color: '#646172' },
    fashion: { img: '/shirt.png', color: '#646172' },
    space: { img: '/saturn.png', color: '#522E6E' },
  };

  const defaultDetails = { img: '/defaulticon.png', color: '#FFFFFF' };
  const { img: categoryImageSrc, color: backgroundColor } = categoryDetails[categoryName] || defaultDetails;

  useEffect(() => {
    document.documentElement.style.setProperty('--dynamic-bg-color', backgroundColor);
    return () => {
      document.documentElement.style.removeProperty('--dynamic-bg-color');
    };
  }, [backgroundColor]);
  
  return (
    <div className={classes.Category_section}>
      <div className={classes.head_title}>
        <Image src={categoryImageSrc} alt={categoryName} width={100} height={100} />
        <h1>{categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum officiis eligendi molestiae veniam, dolor id!</p>
      </div>
      <HomeGallery categoriesId={categoryName} maxItems={15} showFilterButtons={false} />
    </div>
  );
}