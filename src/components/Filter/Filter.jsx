import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './Filter.module.css'

const Filter = props => {
  
  return (
    <>
      <h1>Filter</h1>
      <div className={styles.container}>
        <h2>{props.filter.title}</h2>
      </div>
    </>
  )
}


export default Filter
