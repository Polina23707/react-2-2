const ShopCard = (card) => {
  return(
    <div className="card">
      <div className='item__name'>{card.card.name}</div>
      <div className='item__color'>{card.card.color}</div>
      <img className='card__img' src={card.card.img}></img>
      <div className='card__buy'>
        <div className='item__price'>${card.card.price}</div>
        <button className='item__cart'>Add to Cart</button>
      </div>
    </div>
  )
}

export default ShopCard;