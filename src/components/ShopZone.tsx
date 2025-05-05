import {Card} from "./Card.tsx";
import {CardElement} from "./Card.tsx";
import '../styles/shop.css'


interface ShopZoneProps {
  country: string;
}

export function ShopZone({country}: ShopZoneProps) {

  let countryToDisplay = "";
  let cards: Card[] = [];

  switch (country) {
    case "korea":
      countryToDisplay = "Корея";
      cards = [new Card("korea", 1, 40.46, "Lotte Wellfood"),
        new Card("korea", 2, 31.61, "Nogshim Saewookkang"),
      new Card("korea", 3, 28.71, "Buldak Tomato Pasta"),
      new Card("korea",4, 22.45, "Samyang Buldak"),
      new Card("korea", 5, 17.47, "Tom Yum Buldak"),]
      break;
    case "france":
      countryToDisplay = "Франція";
      cards = [new Card("france", 1, 58.19, "Бісквіт малиновий"),
        new Card("france", 2, 103.25, "Вершковий мед"),
        new Card("france", 3, 28.71, "CROC`FRAIS"),
        new Card("france",4, 234.18, "Фуа-гра"),
        new Card("france", 5, 60.07, "Апулійські помідори"),]
      break;
    case "italy":
      countryToDisplay = "Італія";
      cards = [new Card("italy", 1, 183.03, "Коломба"),
        new Card("italy", 2, 183.03, "Цитрусовий голуб"),
        new Card("italy", 3, 82.13, "Panna Cotta"),
        new Card("italy",4, 133.13, "Сирно-перцевий соус"),
        new Card("italy", 5, 89.17, "Фокачча з сиром"),]
      break;
    case "germany":
      countryToDisplay = "Німеччина";
      cards = [new Card("germany", 1, 69.93, "Витівка з ведмедем"),
        new Card("germany", 2, 74.62, "Choco Crossies"),
        new Card("germany", 3, 93.39, "Ліндт Ліндор"),
        new Card("germany",4, 60.54, "Крокетти Макейна"),
        new Card("germany", 5, 60.54, "Bahlsen Comtess"),]
      break;
    case "switzerland":
      countryToDisplay = "Швейцарія";
      cards = [new Card("switzerland", 1, 185.37, "Le Perfait Patte"),
        new Card("switzerland", 2, 138.44, "Cailler"),
        new Card("switzerland", 3, 185.37, "Zweifel Vaya Roots"),
        new Card("switzerland",4, 251.08, "Appenzeller"),
        new Card("switzerland", 5, 119.67, "Halba Chocolate"),]
      break;
    case "uk":
      countryToDisplay = "Велика Британія";
      cards = [new Card("uk", 1, 73.67, "Milky Way"),
        new Card("uk", 2, 62.83, "McVitie's"),
        new Card("uk", 3, 72.59, "Butterkist"),
        new Card("uk",4, 80.17, "Wikinger"),
        new Card("uk", 5, 45.50, "Oreo Limited Edititon"),]
      break;
    case "usa":
      countryToDisplay = "Сполучені Штати Америки";
      cards = [new Card("usa", 1, 40.86, "Fanta Strawberry"),
        new Card("usa", 2, 86.27, "Carnation"),
        new Card("usa", 3, 57.38, "Crown Potato"),
        new Card("usa",4, 61.50, "Foster Farms"),
        new Card("usa", 5, 61.50, "O-Tube"),]
      break;
    case "china":
      countryToDisplay = "Китай";
      cards = [new Card("china", 1, 81.81, "Сушений глід"),
        new Card("china", 2, 137.26, "Китайські цукерки"),
        new Card("china", 3, 136.05, "PuffBaby6"),
        new Card("china",4, 123.76, "Fast rice"),
        new Card("china", 5, 42.41, "Соус для м'яса"),]

      break;
    case "japan":
      countryToDisplay = "Японія";
      cards = [new Card("japan", 1, 132.24, "Lu Rou Rice"),
        new Card("japan", 2, 132.24, "NOMUSU"),
        new Card("japan", 3, 75.69, "Acai & Raspberry"),
        new Card("japan",4, 114.84, "Шумай"),
        new Card("japan", 5, 85.84, "Японський рулет"),]
      break;
    case "turkey":
      countryToDisplay = "Туреччина";
      cards = [new Card("turkey", 1, 330.24, "Assorted Baklava Box"),
        new Card("turkey", 2, 412.8, "Pestil Mix Box"),
        new Card("turkey", 3, 198.14, "Turkish Deligth"),
        new Card("turkey",4, 74.30, "Mawlid Candy"),
        new Card("turkey", 5, 181.63, "Apple Tea"),]
      break;
    default:
      break;
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