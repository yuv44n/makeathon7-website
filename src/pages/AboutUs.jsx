import React from 'react'
import styles from '../styles/AboutUs.module.css'

function RewardsSection() {
  return <>
    <h2 className={styles.subheading + " " + styles.casinoFont}> REWARDS</h2>
  </>
}

function BlackTint() {
  return <span className={styles.blacktint}></span>
}

const AboutUs = () => {
  return (
    <>
          <div className={styles.backgroundImage}/>
          <BlackTint/>
          <RewardsSection/>
    </>
  )
}

export default AboutUs