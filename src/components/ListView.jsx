import ShopItem from "./ShopItem";
const ListView = (cards) => {
  // console.log(cards.items)
  return(
    <div className="list">
      {cards.item.map((card) => 
          <ShopItem card={card} key={card.img.length}/>
        )}
    </div>
  )
}

export default ListView;