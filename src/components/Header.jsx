import { HeaderCartButton } from './HeaderCartButton'
import mealsImg from '../assets/img/meals.jpg'
import classes from './Header.module.css'

export const Header = (props) => {
  const {
    onShowCart
  } = props

  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={onShowCart}/>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImg} alt="A table full ofo delicious food!" />
      </div>
    </>
  )
}