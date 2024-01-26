import ShopCard from "./ShopCard";

const CardsView = (cards) => {
  // console.log(cards.item);
  return(
    <div className="cards">
      {cards.item.map((card) => 
          <ShopCard card={card}/>
        )}
    </div>
  )
}

export default CardsView;