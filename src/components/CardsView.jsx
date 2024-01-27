import ShopCard from "./ShopCard";

const CardsView = (cards) => {
  return(
    <div className="cards">
      {cards.item.map((card) => 
          <ShopCard card={card}/>
        )}
    </div>
  )
}

export default CardsView;