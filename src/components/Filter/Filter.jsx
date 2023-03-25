import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './Filter.module.css'

const Filter = props => {
  
  return (
    <>
      <div className={styles.container}>
        <h2>{props.filter.title}</h2>
      </div>
    </>
  )
}


export default Filter
