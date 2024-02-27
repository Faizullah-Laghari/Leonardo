import React from 'react';
import classes from './categories.module.css';
import Category from './category';

export default function Categories({ onClose }) {
  return (
    <section className={classes.categories_section}>
      <Category iconSrc="/articon.png" categoryName="Art" onClick={onClose} />
      <Category iconSrc="/entertainmenticon.png" categoryName="Entertainment" onClick={onClose} />
      <Category iconSrc="/gamesicon.png" categoryName="Games" onClick={onClose} />
      <Category iconSrc="/historyicon.png" categoryName="History" onClick={onClose} />
      <Category iconSrc="/how-to-use.png" categoryName="How to" onClick={onClose} />
      <Category iconSrc="/globe.png" categoryName="Internet" onClick={onClose} />
      <Category iconSrc="/headphones.png" categoryName="Music" onClick={onClose} />
      <Category iconSrc="/trees.png" categoryName="Nature" onClick={onClose} />
      <Category iconSrc="/football.png" categoryName="Sports" onClick={onClose} />
      <Category iconSrc="/cpu.png" categoryName="Technology" onClick={onClose} />
      <Category iconSrc="/location.png" categoryName="Travel" onClick={onClose} />
      <Category iconSrc="/pawprint.png" categoryName="Animals" onClick={onClose} />
      <Category iconSrc="/shirt.png" categoryName="Fashion" onClick={onClose} />
      <Category iconSrc="/saturn.png" categoryName="Space" onClick={onClose} />
    </section>
  );
}