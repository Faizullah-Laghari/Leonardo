'use client'
import Image from "next/image";
import Link from "next/link";
import './globals.css'
export default function NotFound() {
  return (
            <div className="error_page">
                <Image src='/404.png' alt="404 error image" fill></Image>
                <button><Link href='/'>Go to Home</Link></button>
            </div> 
   );
}

