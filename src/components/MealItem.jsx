import MealItemForm from './MealItemForm'
import classes from './MealItem.module.css'

const MealItem = (props) => {
  const {
    id,
    name,
    description,
    price
  } = props

  const formatPrice = `$${price.toFixed(2)}`

  return (
    <li className={classes.meal}>
      <div>
        <h3>{ name }</h3>
        <div className={classes.description}>{ description }</div>
        <div className={classes.price}>{ formatPrice }</div>
      </div>
      <div>
        <MealItemForm id={id}/>
      </div>
    </li>
  )
}

export default MealItem