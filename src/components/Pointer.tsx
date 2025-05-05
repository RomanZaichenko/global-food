import '../styles/pointer.css'


interface PointerProps {
  x: number;
  y: number;
  country: string;
  rotate: number;
  onClick: () => void;
}

export function Pointer({ x, y, country, rotate, onClick }: PointerProps) {
  let image: string = "#";

  switch (country) {
    case "korea":
      image = "/images/korea.svg";
      break;
    case "france":
      image = "/images/france.svg";
      break;
    case "italy":
      image = "/images/italy.svg";
      break;
    case "germany":
      image = "/images/germany.svg";
      break;
    case "switzerland":
      image = "/images/switzerland.svg";
      break;
    case "uk":
      image = "/images/uk.svg";
      break;
    case "usa":
      image = "/images/usa.svg";
      break;
    case "china":
      image = "/images/china.svg";
      break;
    case "japan":
      image = "/images/japan.svg";
      break;
    case "turkey":
      image = "/images/turkey.svg";
      break;
    default:
      break;
  }

  return (
    <>
      <div className="pointer" style={{width: "30px", height: "30px", position: "absolute", left: `${x}px`, top: `${y}px`, rotate: `${rotate}deg`}} onClick={onClick}>
        <img src={image} alt="" className="pointer-image"/>
      </div>
    </>
  )
}