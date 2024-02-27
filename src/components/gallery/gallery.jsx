"use client";
import React, { useState } from "react";
import galleryData from "@/data/galleryData";
import Image from "next/image";
import classes from "./gallery.module.css";
import SecondaryButton from "@/UI/secondaryButton";
import ShareIcons from "../shareIcons/page";
import SearchPopup from "../searchPopup/page";
import Link from "next/link";

const selectRandomItems = (items, maxItems) => {
  const count = Math.floor(Math.random() * 6 + 10);
  const maxCount = Math.min(count, maxItems, items.length);
  const shuffled = items.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, maxCount);
};

export default function HomeGallery({
  tagid = null,
  maxItems = null,
  showFilterButtons = true,
  filterOptions = [ 
    { name: 'Recent', filter: 'Recent' },
    { name: 'Hot!', filter: 'Hot!' },
    { name: 'Most votes', filter: 'Most votes' },
    { name: 'Most Comments', filter: 'Most Comments' },
    { name: 'Most views', filter: 'Most views' },
  ],
}) {
  const [currentFilter, setCurrentFilter] = useState(filterOptions[0].filter);
  const [numColumns, setNumColumns] = useState(5);
  const [showShareModal, setShowShareModal] = useState(false);
  const [currentSharedItem, setCurrentSharedItem] = useState(null);
  const [showSearchPopup, setShowSearchPopup] = useState(false);

  const handleFilterChange = (filter) => {
    setCurrentFilter(filter);
  };

  const toggleSearchPopup = () => {
    setShowSearchPopup(!showSearchPopup);
  };

  const filteredGalleryData = galleryData.filter((item) => {
    if (tagid)
      return item.subTitle.trim().toLowerCase() === tagid.trim().toLowerCase();
    if (currentFilter === "Recent") return true;
    if (currentFilter === "Hot!")
      return ["Space", "Art"].includes(item.subTitle.trim());
    if (currentFilter === "Most Comments") return item.subTitle === "Fashion";
    if (currentFilter === "Most Votes") return item.subTitle === "Nature";
    if (currentFilter === "Most Views") return item.subTitle === "How to";
    return item;
  });

  const displayedGalleryData = maxItems
    ? selectRandomItems(filteredGalleryData, maxItems)
    : filteredGalleryData;

  return (
    <div className={classes.gallery_content}>
      <div className={classes.btnSlideCol}>
      {showFilterButtons && (
        <div className={classes.tabButtons}>
          {filterOptions.map((option) => (
            <SecondaryButton
              key={option.filter}
              onClick={() => handleFilterChange(option.filter)}
              isActive={currentFilter === option.filter}
            >
              {option.name}
            </SecondaryButton>
          ))}
        </div>
      )}
        <div className={classes.sliderContainer}>
          <Image
            src="/square.png"
            alt="grid system"
            width={20}
            height={15}
          ></Image>
          <input
            type="range"
            min="2"
            max="10"
            value={numColumns}
            onChange={(e) => setNumColumns(e.target.value)}
            className={`${classes.slider} ${classes.customRange}`}
          />
          <span style={{ left: `${(numColumns - 2) * 10}%` }}>
            {numColumns}
          </span>
          <Image
            src="/grid.png"
            alt="grid system"
            width={20}
            height={15}
          ></Image>
        </div>
      </div>
      <div className={classes.gallery} style={{ columnCount: numColumns }}>
        {displayedGalleryData.map((item, index) => (
          <div key={index} className={classes.gallery_item}>
            <div
              className={classes.shareIcon}
              onClick={() => {
                setShowShareModal(true);
                setCurrentSharedItem(item);
              }}
            >
              <Image src="/share.svg" alt="share" width={20} height={20} />
            </div>
            <Link href="/gallery">
              <Image
                src={item.image}
                alt={item.title}
                width={510}
                height={510}
                layout="responsive"
              />
            </Link>
            <div className={classes.searchIcon} onClick={toggleSearchPopup}>
              <Image src="/search.svg" alt="search" width={20} height={20} />
            </div>

            <div className={classes.text}>
              <h3>{item.subTitle}</h3>
              <Link href="/gallery">
                <h2>{item.title}</h2>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {showShareModal && (
        <ShareIcons
          onClose={() => setShowShareModal(false)}
          item={currentSharedItem}
        />
      )}
      {showSearchPopup && (
        <>
          <div className={classes.backdrop} onClick={toggleSearchPopup}></div>
          <SearchPopup />
        </>
      )}
    </div>
  );
}
