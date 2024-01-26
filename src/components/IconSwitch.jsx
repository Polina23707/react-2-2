const IconSwitch = (props) => {
  // console.log(props);
  // console.log(props.icon);

  function onSwitch() {
    props.onSwitch();
  }
  return (
    <span className="material-icons" onClick={onSwitch}>{props.icon}</span>
  )
}

export default IconSwitch;