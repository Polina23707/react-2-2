import CardsView from "./CardsView";
import ListView from "./ListView";

const View = (props) => {
  // console.log(props)

  if (props.view === 'view_list') {
    return(
      <div>
        <ListView item={props.products}/>
      </div>
    )
  } else {
    return(
      <div>
        <CardsView item={props.products}/>
      </div>
    )
  }
 
}

export default View;