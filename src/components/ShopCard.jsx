const ShopCard = (card) => {
  // console.log(card)
  return(
    <div className="card">
      <div>{card.card.name}</div>
      <div>{card.card.price}</div>
      <div>{card.card.color}</div>
      <img className='card__img' src={card.card.img}></img>
      <button>Add to Cart</button>
    </div>
    
  )
}

export default ShopCard;