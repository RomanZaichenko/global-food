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
      image = "/global-food/images/korea.svg";
      break;
    case "france":
      image = "/global-food/images/france.svg";
      break;
    case "italy":
      image = "/global-food/images/italy.svg";
      break;
    case "germany":
      image = "/global-food/images/germany.svg";
      break;
    case "switzerland":
      image = "/global-food/images/switzerland.svg";
      break;
    case "uk":
      image = "/global-food/images/uk.svg";
      break;
    case "usa":
      image = "/global-food/images/usa.svg";
      break;
    case "china":
      image = "/global-food/images/china.svg";
      break;
    case "japan":
      image = "/global-food/images/japan.svg";
      break;
    case "turkey":
      image = "/global-food/images/turkey.svg";
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