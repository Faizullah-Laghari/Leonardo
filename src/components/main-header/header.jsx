"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import classes from "./header.module.css";
import SecondaryButton from "@/UI/secondaryButton";
import PrimaryButton from "@/UI/primaryButton";
import SearchBar from "../home/hero-section/searchBar";
import ThemeToggleButton from "../themeToggle/ThemeToggleButton";
export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null); // Ref for the dropdown

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Remove event listener on cleanup
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <header className={classes.header}>
      <main className={classes.main}>
        <div className={classes.logo}>
          <Link href="./">
            <Image src="/logo2.png" alt="main logo" width={150} height={65} />
          </Link>
        </div>
        <nav className={classes.nav}>
          <ul>
            <li>
              <Link href="/reactions">Reactions</Link>
            </li>
            <li>
              <Link href="/hot">Hot!</Link>
            </li>
            <li>
              <Link href="/favorites">Favorites</Link>
            </li>
            <li>
              <Link href="/pricing">Pricing</Link>
            </li>
            <li>
              <Link href="/submitai">Generate</Link>
            </li>
            <ThemeToggleButton></ThemeToggleButton>
          </ul>
        </nav>
        <div className={classes.searchButton} ref={dropdownRef}>
          <div className={classes.dropdownToggle}>
            <Image
              onClick={toggleDropdown}
              className={classes.search_icon}
              src="/search.png"
              alt="search input"
              width={35}
              height={35}
            />
             <Link href="/submitai" >
            <SecondaryButton className={classes.createButton}>
            Create 
            </SecondaryButton>
            </Link>
          </div>
          <div
            className={`${classes.dropdownContent} ${
              isDropdownOpen ? classes.show : ""
            }`}
          >
            <SearchBar className={classes.search_input} />
            <div className={classes.buttons}>
              <div>
                <p>Discover</p>
              </div>
              <PrimaryButton>art</PrimaryButton>
              <PrimaryButton>fashion</PrimaryButton>
              <PrimaryButton>animal</PrimaryButton>
              <PrimaryButton>forest</PrimaryButton>
              <PrimaryButton>illustration</PrimaryButton>
            </div>
          </div>
        </div>
      </main>
    </header>
  );
}
