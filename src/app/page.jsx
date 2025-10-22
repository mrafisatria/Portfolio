"use client";
import { useState, useEffect } from "react";
import SizeXl from "./sizexl";
import SizeSm from "./sizesm";


export default function Home() {

    const [isLarge, setIsLarge] = useState(false);

    useEffect(() => {

      const checkSize = () => setIsLarge(window.innerWidth >= 767);

      checkSize();

      window.addEventListener("resize", checkSize);

      return () => window.removeEventListener("resize", checkSize);
    }, []);

    return (
      isLarge ? <SizeXl /> : <SizeSm />
    )
}
