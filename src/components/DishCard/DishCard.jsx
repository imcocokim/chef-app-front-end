import styles from './DishCard.module.css';
import DishDetailsModal from '../DishDetailsModal/DishDetailsModal';

const DishCard = (props) => {
  const handleCardClick = () => {
    props.setSelectedDish(props.dish);
  }

  return (
    <div className={styles.card} onClick={handleCardClick}>
      <div className={styles.cardContent}>
        {/* <p>{props.dish.isFavorite ? '❤️' : '♡'}</p> */}
        <p>Title: {props.dish.title}</p>
        <p>Yield: {props.dish.yield}</p>
        <p>Prep Time: {props.dish.prep}</p>
        <p>Cook Time: {props.dish.cook}</p>
      </div>
      {props.selectedDish && props.selectedDish.id === props.dish.id && (
        <div>
          <button onClick={props.handleCloseDishModal}>Close</button>
          <DishDetailsModal
            user={props.user}
            dish={props.selectedDish}
            handleCloseDishModal={props.handleCloseDishModal}
            setDishes={props.setDishes}
          />
        </div>
      )}
    </div>
  );
};

export default DishCard;
