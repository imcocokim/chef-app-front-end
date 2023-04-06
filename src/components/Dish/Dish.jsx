import styles from './Dish.module.css'

const Dish = props => {
  
  return (
    <>
      <div className={styles.container}>
        <h2>{props.dish.title}</h2>
      </div>
    </>
  )
}


export default Dish
