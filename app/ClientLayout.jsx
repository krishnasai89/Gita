"use client";

import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Preloader from "./components/Preloader/Preloader";
import SmoothScroll from "./components/SmoothScroll/SmoothScroll";
import StarTrailCursor from "./components/StarTrailCursor/StarTrailCursor";
import SearchOverlay from "./components/SearchOverlay/SearchOverlay";
import dynamic from "next/dynamic";
const StarTrailCursors = dynamic(
  () => import("./components/StarTrailCursor/StarTrailCursor"),
  {
    ssr: false,
    loading: () => <div className="opacity-0" />,
  },
);
export default function ClientLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      <div
        className={
          isLoading
            ? "opacity-0"
            : "opacity-100 transition-opacity duration-1000"
        }
      >
        <SmoothScroll>
          <StarTrailCursor />
          <Navbar onSearchClick={() => setIsSearchOpen(true)} />
          <SearchOverlay
            isOpen={isSearchOpen}
            onClose={() => setIsSearchOpen(false)}
          />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </div>
    </>
  );
}
