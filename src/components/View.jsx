import CardsView from "./CardsView";
import ListView from "./ListView";

const View = (props) => {
  if (props.view === 'view_list') {
    return(
      <div className="listView">
        <ListView item={props.products}/>
      </div>
    )
  } else {
    return(
      <div className="cardsView">
        <CardsView item={props.products}/>
      </div>
    )
  }
}

export default View;