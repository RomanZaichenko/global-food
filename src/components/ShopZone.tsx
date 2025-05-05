import {Card} from "./Card.tsx";
import {CardElement} from "./Card.tsx";
import '../styles/shop.css'


interface ShopZoneProps {
  country: string;
}

export function ShopZone({country}: ShopZoneProps) {

  let countryToDisplay = "";

  switch (country) {
    case "korea":
      countryToDisplay = "Корея";
      break;
    case "france":
      countryToDisplay = "Франція";
      break;
    case "italy":
      countryToDisplay = "Італія";
      break;
    case "germany":
      countryToDisplay = "Німеччина";
      break;
    case "switzerland":
      countryToDisplay = "Швейцарія";
      break;
    case "uk":
      countryToDisplay = "Велика Британія";
      break;
    case "usa":
      countryToDisplay = "Сполучені Штати Америки";
      break;
    case "china":
      countryToDisplay = "Китай";
      break;
    case "japan":
      countryToDisplay = "Японія";
      break;
    case "turkey":
      countryToDisplay = "Туреччина";
      break;
    default:
      break;
  }

  let cards: Card[] = [];

  for (let i=1; i <= 5; i++ ) {
    cards.push(new Card(country, i));
  }

  return (
    <>
      <div className="country-name">{countryToDisplay}</div>
      <div className="cards-area">
        {cards.map((card, index) => (
          <CardElement key={index} card={card} />
        ))}
      </div>
    </>
  )
}