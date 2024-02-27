import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import classes from './categories.module.css';

export default function Category({ iconSrc, categoryName, onClick }) {
  const href = `/${encodeURIComponent(categoryName.toLowerCase())}`;

  return (
    <Link href={href} passHref>
      <div className={classes.category} onClick={onClick}>
        <Image src={iconSrc} alt={categoryName} width={15} height={15} />
        <p>{categoryName}</p>
      </div>
    </Link>
  );
}
