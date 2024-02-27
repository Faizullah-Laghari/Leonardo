
'use client';
import React from 'react';
import HeroContent from './heroContent';
import classes from './gridBackground.module.css';
export default function GridBackground() {
  return (
    <div className={classes.grid_container}>
      <div className={classes.grid_item} style={{ backgroundImage: "url('/hero-bg1.png')" }}></div>
      <div className={classes.grid_item} style={{ backgroundImage: "url('/hero-bg2.png')" }}></div>
      <div className={classes.grid_item} style={{ backgroundImage: "url('/hero-bg3.png')" }}></div>
      <div className={classes.grid_item} style={{ backgroundImage: "url('/hero-bg4.jpg')" }}></div>
      <div className={classes.overlay_text}>
        <HeroContent/>
      </div>
    </div>
  );
}
