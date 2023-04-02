import styles from './Landing.module.css'
import Filter from '../../components/Filter/Filter'

const Landing = (props) => {
  
  return (
    <main className={styles.container}>
      <h1>hello, {props.user ? props.user.name : 'friend'}</h1>
      {props.user && props.filters && (
        <>
          <h2>Filters</h2>
          <div> 
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
        </>
      )}

    </main>
  )
}

export default Landing
