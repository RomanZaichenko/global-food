import './styles/App.css';
import { Header } from "./components/Header.tsx";
import { Map } from "./components/Map.tsx";
import { ShopZone } from "./components/ShopZone.tsx";
import { useEffect, useState } from "react";

interface AppProps {
  isLoaded: boolean;
}

function App({ isLoaded }: AppProps) {
  const [selectedCountry, setSelectedCountry] = useState("");

  const preloadImage = (source: string) => {
    const image = new Image();
    image.src = source;
    image.onload = image.onerror = () => {};
  };

  useEffect(() => {
    if (!isLoaded) {
      preloadImage("/global-food/images/china/product-1.jpg");
      preloadImage("/global-food/images/china/product-2.jpg");
      preloadImage("/global-food/images/china/product-3jpg");
      preloadImage("/global-food/images/china/product-4.jpg");
      preloadImage("/global-food/images/china/product-5.jpg");

      preloadImage("/global-food/images/france/product-1.jpg");
      preloadImage("/global-food/images/france/product-2.jpg");
      preloadImage("/global-food/images/france/product-3.jpg");
      preloadImage("/global-food/images/france/product-4.jpg");
      preloadImage("/global-food/images/france/product-5.jpg");

      preloadImage("/global-food/images/germany/product-1.jpg");
      preloadImage("/global-food/images/germany/product-2.jpg");
      preloadImage("/global-food/images/germany/product-3.jpg");
      preloadImage("/global-food/images/germany/product-4.jpg");
      preloadImage("/global-food/images/germany/product-5.jpg");

      preloadImage("/global-food/images/italy/product-1.jpg");
      preloadImage("/global-food/images/italy/product-2.jpg");
      preloadImage("/global-food/images/italy/product-3.jpg");
      preloadImage("/global-food/images/italy/product-4.jpg");
      preloadImage("/global-food/images/italy/product-5.jpg");

      preloadImage("/global-food/images/japan/product-1.jpg");
      preloadImage("/global-food/images/japan/product-2.jpg");
      preloadImage("/global-food/images/japan/product-3.jpg");
      preloadImage("/global-food/images/japan/product-4.jpg");
      preloadImage("/global-food/images/japan/product-5.jpg");

      preloadImage("/global-food/images/korea/product-1.jpg");
      preloadImage("/global-food/images/korea/product-2.jpg");
      preloadImage("/global-food/images/korea/product-3jpg");
      preloadImage("/global-food/images/korea/product-4.jpg");
      preloadImage("/global-food/images/korea/product-5.jpg");

      preloadImage("/global-food/images/switzerland/product-1.jpg");
      preloadImage("/global-food/images/switzerland/product-2.jpg");
      preloadImage("/global-food/images/switzerland/product-3.jpg");
      preloadImage("/global-food/images/switzerland/product-4.jpg");
      preloadImage("/global-food/images/switzerland/product-5.jpg");

      preloadImage("/global-food/images/turkey/product-1.jpg");
      preloadImage("/global-food/images/turkey/product-2.jpg");
      preloadImage("/global-food/images/turkey/product-3.jpg");
      preloadImage("/global-food/images/turkey/product-4.jpg");
      preloadImage("/global-food/images/turkey/product-5.jpg");

      preloadImage("/global-food/images/uk/product-1.jpg");
      preloadImage("/global-food/images/uk/product-2.jpg");
      preloadImage("/global-food/images/uk/product-3.jpg");
      preloadImage("/global-food/images/uk/product-4.jpg");
      preloadImage("/global-food/images/uk/product-5.jpg");

      preloadImage("/global-food/images/usa/product-1.jpg");
      preloadImage("/global-food/images/usa/product-2.jpg");
      preloadImage("/global-food/images/usa/product-3.jpg");
      preloadImage("/global-food/images/usa/product-4.jpg");
      preloadImage("/global-food/images/usa/product-5.jpg");

    }
  }, [isLoaded]);

  return (
    <>
      <Header />
      <Map setCountry={setSelectedCountry} />
      <ShopZone country={selectedCountry} />
    </>
  );
}

export default App;
