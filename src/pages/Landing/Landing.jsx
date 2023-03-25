import styles from './Landing.module.css'
import Filter from '../../components/Filter/Filter'

const Landing = (props) => {
  return (
    <main className={styles.container}>
      <h1>hello, {props.user ? props.user.name : 'friend'}</h1>
      <h2> {props.filters.map(filter =>
        <Filter
          user={props.user}
          key={filter._id}
          filter={filter}
          />
        )}
      </h2>
    </main>
  )
}

export default Landing
