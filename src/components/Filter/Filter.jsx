import styles from './Filter.module.css'

const Filter = props => {
  
  return (
    <>
      <div className={styles.container}>
        <h2>{props.filter.title}</h2>
        <button 
        className={styles.buttons} 
        onClick={() => props.handleDeleteFilter(props.filter._id)}
        >
          Delete
        </button>
      </div>
    </>
  )
}


export default Filter
