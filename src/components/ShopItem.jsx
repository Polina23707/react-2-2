const ShopItem = (card) => {
  return(
    <div className="item">
      <img className='item__img' src={card.card.img}></img>
      <div className='item__name'>{card.card.name}</div>
      <div className='item__color'>{card.card.color}</div>
      <div className='item__price'>${card.card.price}</div>
      <button className='item__cart'>Add to Cart</button>
    </div>
  )
}

export default ShopItem;