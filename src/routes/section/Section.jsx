import React from 'react'

import styles from './Section.module.css'

const Section = (props) => {
  return (
      <div className={styles.section}>
        <div className={styles.section__id}>{props.id}</div>
        <div className={styles.section__columns}>
          <div className={styles.section__column}>
            left
          </div>
          <div className={styles.section__column}>
            right
          </div>
        </div>
      </div>
  )
}

export default Section
