import { useState } from 'react'
import styles from './Filter.module.css'

const Filter = props => {
  const [editMode, setEditMode] = useState(false)
  const [newTitle, setNewTitle] = useState(props.filter.title)

  const handleTitleChange = event => {
    setNewTitle(event.target.value)
  }

  const handleEditClick = () => {
    setEditMode(true)
  }

  const handleSaveClick = async () => {
    // call the backend service to update the filter title
    await props.handleEditFilterTitle(props.filter._id, newTitle)
    
    // turn off the edit mode and update the local filter state
    setEditMode(false)
    props.filter.title = newTitle
  }

  const handleCancelClick = () => {
    // reset the newTitle state variable and turn off the edit mode
    setNewTitle(props.filter.title)
    setEditMode(false)
  }
  
  return (
    <>
      <div className={styles.container}>
        {editMode ? (
          <input type="text" value={newTitle} onChange={handleTitleChange} />
        ) : (
          <h2>{props.filter.title}</h2>
        )}
        <button 
          className={styles.buttons} 
          onClick={handleEditClick}
          disabled={editMode}
        >
          Edit
        </button>
        {editMode && (
          <>
            <button 
              className={styles.buttons} 
              onClick={handleSaveClick}
            >
              Save
            </button>
            <button 
              className={styles.buttons} 
              onClick={handleCancelClick}
            >
              Cancel
            </button>
          </>
        )}
        <button 
          className={styles.buttons} 
          onClick={() => props.handleDeleteFilter(props.filter._id)}
          disabled={editMode}
        >
          Delete
        </button>
      </div>
    </>
  )
}

export default Filter
