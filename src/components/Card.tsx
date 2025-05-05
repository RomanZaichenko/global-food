import '../styles/card.css'


interface CardProps {
  card: Card
}

export function CardElement({card}: CardProps) {
  return (
    <>
      <div className="card">
        <img src={`src/images/${card.country}/product-${card.productNumber}.jpg`} alt="" className="card-image"/>
      </div>
    </>
  )
}


export class Card {
  country: string;
  productNumber: number;

  constructor(country: string, productNumber: number) {
    this.country = country;
    this.productNumber = productNumber;
  }
}