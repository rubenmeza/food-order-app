import { CartIcon } from './CartIcon'
import classes from './HeaderCardButton.module.css'

export const HeaderCartButton = (props) => {
  const {
    onClick
  } = props

  return (
    <button className={classes.button} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  )
}