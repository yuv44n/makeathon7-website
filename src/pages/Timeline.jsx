import React from 'react'
import Eventcard from '../components/events_components/Eventcard.jsx'


main
const Timeline = () => {
  return (
    <>
        <div className='h-screen w-full' >
            <h1 className={styles.timeline}>Timeline Page</h1>
            <img src="bgimg.jpg" alt="Background" />
            <Eventcard name={"EVENT 2"} />
        </div>
    </>
  )
}



export default Timeline