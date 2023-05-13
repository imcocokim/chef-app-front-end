import styles from './DishDetailsModal.module.css'
import { useState } from 'react'
import EditDishModal from '../EditDishModal/EditDishModal'
import * as dishService from '../../services/dishService'

const DishDetailsModal = (props) => {
  // const [isEditModalVisible, setIsEditModalVisible] = useState(false)

  // const handleEditClick = () => {
  //   setIsEditModalVisible(true)
  // }

  // const handleCloseEditModal = () => {
  //   setIsEditModalVisible(false)
  // }

  const handleDeleteClick = async (id) => {
    const deletedDish = await dishService.deleteDish(id)
    props.setDishes(props.dishes.filter(dish => dish._id !== deletedDish._id))
  }

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <button onClick={props.handleCloseDishModal}>X</button>
        {/* <p>{props.dish.isFavorite ? '❤️' : '♡'}</p> */}
        <p>Title: {props.dish.title}</p>
        <p>Description: {props.dish.description}</p>
        <p>Yield: {props.dish.yield}</p>
        <p>Prep Time: {props.dish.prep}</p>
        <p>Cook Time: {props.dish.cook}</p>
        <p>Ingredients: {props.dish.ingredients}</p>
        <p>Directions: {props.dish.directions}</p>
        <p>Notes: {props.dish.notes}</p>
        <p>
          {props.dish.filters?.map((filter) => filter && filter.title)}
        </p>
        {/* <button onClick={handleEditClick}>Edit</button> */}
        <button onClick={() => handleDeleteClick(props.dish._id)}>Delete</button>
      </div>
      {/* {isEditModalVisible && (
        <EditDishModal
          handleCloseEditModal={handleCloseEditModal}
          handleRefreshDishes={props.handleRefreshDishes}
          filters={props.filters}
          dish={props.dish}
        />
      )} */}
    </div>
  )
}

export default DishDetailsModal
