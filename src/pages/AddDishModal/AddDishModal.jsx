import React, { useEffect, useState } from 'react'
import styles from './AddDishModal.module.css'
import { getAll } from '../../services/filterService'

function AddDishModal({ closeModal, handleAddDish }) {
  const [filterOptions, setFilterOptions] = useState([])

  const [formData, setFormData] = useState({
    isFavorite: false,
    photo: '',
    title: '',
    description: '',
    yield: '',
    prep: '',
    cook: '',
    filters: [],
    ingredients: '',
    directions: '',
    notes: '',
  })

  useEffect(() => {
    const fetchFilters = async () => {
      try {
        const filters = await getAll();
        setFilterOptions(filters);
      } catch (error) {
        console.error('Error retrieving filter options', error)
      }
    };
    fetchFilters();
  }, []);
  


  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }
  
  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalContent}>
        <button className={styles.exitButton} onClick={closeModal}>X</button>
        <form>
          <label>
            Favorite: 
            <input
              type='checkbox'
              name='isFavorite'
              value={formData.isFavorite}
              onChange={handleChange}
            />
          </label>
          <label>
            Title: 
            <input
              type='text'
              name='title'
              value={formData.title}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Description: 
            <input
              type='text'
              name='description'
              value={formData.description}
              onChange={handleChange}
            />
          </label>
          <label>
            Yield: 
            <input
              type='text'
              name='yield'
              value={formData.yield}
              onChange={handleChange}
            />
          </label>
          <label>
            Prep Time: 
            <input
              type='text'
              name='prep'
              value={formData.prep}
              onChange={handleChange}
            />
          </label>
          <label>
            Cook Time: 
            <input
              type='text'
              name='cook'
              value={formData.cook}
              onChange={handleChange}
            />
          </label>
          {filterOptions.map (option => (
            <label key={option}>
              Filters: 
              <input
                type='checkbox'
                name='filters'
                value={option}
                checked={formData.filters.includes(option)}
                onChange={handleChange}
              />
            </label>

          ))}
          <label>
            Ingredients: 
            <input
              type='text'
              name='ingredients'
              value={formData.ingredients}
              onChange={handleChange}
            />
          </label>
          <label>
            Directions: 
            <input
              type='text'
              name='directions'
              value={formData.directions}
              onChange={handleChange}
            />
          </label>
          <label>
            Notes: 
            <input
              type='text'
              name='notes'
              value={formData.notes}
              onChange={handleChange}
            />
          </label>
          <button>Create Dish</button>
        </form>
      </div>
    </div>
  );
}

export default AddDishModal;
