import styles from './Landing.module.css'
import Filter from '../../components/Filter/Filter'
import Dish from '../../components/Dish/Dish'
import AddDishModal from '../AddDishModal/AddDishModal'
import React, { useState } from 'react'

const Landing = (props) => {
  const [showModal, setShowModal] = useState(false)

  const handleAddDishClick = () => {
    setShowModal(true)
  }

  const handleCloseModal= () => {
    setShowModal(false)
  }
  

  return (
    <main className={styles.container}>
      <h1>hello, {props.user ? props.user.name : 'friend'}</h1>
      {props.user && props.filters && (
        <>
          <div> 
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
          </div>
          <div> 
            <h2>Dishes</h2>
            <div>
              <button onClick={handleAddDishClick}>+</button>
              {showModal && <AddDishModal closeModal={handleCloseModal} handleAddDish={props.handleAddDish} />}
              </div>
            {props.dishes.map(dish=>
              props.user && dish && (
                <Dish
                  user={props.user}
                  dish={dish}
                  />
              )
            )}
          </div>

        </>
      )}

    </main>
  )
}

export default Landing
