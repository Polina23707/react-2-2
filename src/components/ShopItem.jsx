const ShopItem = (card) => {
  // console.log(card)
  return(
    <div className="item">
      <div>{card.card.name}</div>
      <div>{card.card.price}</div>
      <div>{card.card.color}</div>
      <img className='item__img' src={card.card.img}></img>
      <button>Add to Cart</button>
    </div>
  )
}

export default ShopItem;