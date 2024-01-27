const IconSwitch = (props) => {
  function onSwitch() {
    props.onSwitch();
  }
  return (
    <span className="material-icons" onClick={onSwitch}>{props.icon}</span>
  )
}

export default IconSwitch;