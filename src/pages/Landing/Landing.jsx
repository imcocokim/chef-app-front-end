import styles from './Landing.module.css'
import Filter from '../../components/Filter/Filter'
import DishCard from '../../components/DishCard/DishCard'
import AddDishModal from '../../components/AddDishModal/AddDishModal'
import React, { useState } from 'react'
import DishDetailsModal from '../../components/DishDetailsModal/DishDetailsModal'

const Landing = (props) => {
  const [showModal, setShowModal] = useState(false)
  const [selectedDish, setSelectedDish] = useState(null)

  const handleAddDishClick = () => {
    setShowModal(true)
  }

  const handleCloseModal= () => {
    setShowModal(false)
  }

  const handleSelectDish = (dish) => {
    setSelectedDish(dish)
  }
  
  const handleCloseDishModal = () => {
    setSelectedDish(null)
  }
  


  return (
    <main className={styles.container}>
      <h1>hello, {props.user ? props.user.name : 'friend'}</h1>
      {props.user && props.filters && (
        <>
          {/* <div> 
            <h2>Filters</h2>
            {props.filters.map(filter =>
              props.user && filter && (
                <Filter
                  user={props.user}
                  key={filter._id}
                  filter={filter}
                  handleDeleteFilter={props.handleDeleteFilter}
                  />
              )
            )}
          </div> */}
          <div> 
            <div>
              <button className={styles.addButton} onClick={handleAddDishClick}>Create New Dish</button>
              {showModal && <AddDishModal closeModal={handleCloseModal} handleAddDish={props.handleAddDish} />}
              <h2>Dishes</h2>
            </div>
            {props.dishes.length > 0 && props.dishes.map(dish=>
              props.user && dish && (
                <DishCard
                  user={props.user}
                  dish={dish}
                  selectedDish={selectedDish}
                  setSelectedDish={setSelectedDish}
                  handleCloseDishModal={handleCloseDishModal}
                  handleSelectDish={handleSelectDish}
                  key={dish._id}
                  setDishes={props.setDishes}
                  />
              )
            )}

          </div>

        </>
      )}
      {selectedDish && (
        <DishDetailsModal
          user={props.user}
          dish={selectedDish}
          handleCloseDishModal={handleCloseDishModal}
        />
      )}
    </main>
  )
}

export default Landing
