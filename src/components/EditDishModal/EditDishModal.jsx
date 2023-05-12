import styles from './EditDishModal.module.css'
import { useState } from 'react'
import * as dishService from '../../services/dishService'

const EditDishModal = (props) => {
  const [editedDish, setEditedDish] = useState({
    photo: props.dish.photo,
    title: props.dish.title,
    description: props.dish.description,
    yield: props.dish.yield,
    prep: props.dish.prep,
    cook: props.dish.cook,
    filters: props.dish.filters,
    ingredients: props.dish.ingredients,
    directions: props.dish.directions,
    notes: props.dish.notes,
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setEditedDish((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await dishService.editDish(editedDish, props.dish._id)
      props.handleCloseEditModal()
      props.handleRefreshDishes()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <form onSubmit={handleSubmit}>
          <button onClick={props.handleCloseEditModal}>X</button>
          <label>
            Photo:
            <input
              type="text"
              name="photo"
              value={editedDish.photo}
              onChange={handleChange}
            />
          </label>
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={editedDish.title}
              onChange={handleChange}
            />
          </label>
          <label>
            Description:
            <input
              type="text"
              name="description"
              value={editedDish.description}
              onChange={handleChange}
            />
          </label>
          <label>
            Yield:
            <input
              type="text"
              name="yield"
              value={editedDish.yield}
              onChange={handleChange}
            />
          </label>
          <label>
            Prep Time:
            <input
              type="text"
              name="prep"
              value={editedDish.prep}
              onChange={handleChange}
            />
          </label>
          <label>
            Cook Time:
            <input
              type="text"
              name="cook"
              value={editedDish.cook}
              onChange={handleChange}
            />
          </label>
          <label>
            Ingredients:
            <textarea
              name="ingredients"
              value={editedDish.ingredients}
              onChange={handleChange}
            />
          </label>
          <label>
            Directions:
            <textarea
              name="directions"
              value={editedDish.directions}
              onChange={handleChange}
            />
          </label>
          <label>
            Notes:
            <textarea
              name="notes"
              value={editedDish.notes}
              onChange={handleChange}
            />
          </label>
          <label>
            Filters:
            <select
              name="filters"
              multiple
              value={editedDish.filters}
              onChange={handleChange}
            >
              {props.filters.map((filter) => (
                <option key={filter._id} value={filter._id}>
                  {filter.title}
                </option>
              ))}
            </select>
          </label>
          <button type="submit">Save Changes</button>
        </form>
      </div>
    </div>
  )
}

export default EditDishModal
