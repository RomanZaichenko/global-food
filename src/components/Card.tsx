import '../styles/card.css'


interface CardProps {
  card: Card
}

export function CardElement({card}: CardProps) {
  return (
    <>
      <div className="card">
        <div className="card-container">
          <img src={`/global-food/images/${card.country}/product-${card.productNumber}.jpg`} alt="" className="card-image"/>
          <div className="price">
            <h3 className="price-text">{card.price}</h3>
          </div>
          <div className="card-title">{card.title}</div>
        </div>
      </div>
    </>
  )
}


export class Card {
  country: string;
  productNumber: number;
  price: number;
  title: string;

  constructor(country: string, productNumber: number, price: number, title: string) {
    this.country = country;
    this.productNumber = productNumber;
    this.price = price;
    this.title = title;
  }
}