import './styles/App.css'
import {Header} from "./components/Header.tsx";
import {Map} from "./components/Map.tsx";
import {ShopZone} from "./components/ShopZone.tsx";
import {useState} from "react";

function App() {
  const [selectedCountry, setSelectedCountry] = useState("");

  return (
    <>
      <Header />
      <Map setCountry={setSelectedCountry}/>
      <ShopZone country={selectedCountry} />
    </>
  )
}

export default App
