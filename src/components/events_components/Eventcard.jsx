import React, { useState, useEffect } from 'react'
import styles from '../../styles/Timeline.module.css'
import eventsdata from '../../data/eventsdata.json'

function Eventcard({name}) {
    const card = eventsdata.find(card => card.id === name);
    const [Animation, setAnimation] = useState({card1: false, card2: false, card3: false});
    const [fadeIn, setFadeIn] = useState(false);
    
    useEffect(() => {
        setFadeIn(true);
    }, []);

    const animate = (cardNo) => {
        setAnimation(prevState => {
            let newState = {...prevState};
            newState[cardNo] = !newState[cardNo];
            return newState;
        })
    }

    return (
        <div className={`${styles.background} ${fadeIn ? styles.fadeInAnimation : ''}`}>
            {/* Minimalistic cards section */}
            <div className={styles.cardsContainer}>
                <div 
                    onClick={() => animate("card1")} 
                    className={`${styles.selectCards} ${styles.card1} ${Animation.card1 ? styles.card1Ani : ''}`}
                    aria-label="Playing card 1"
                />
                <div 
                    onClick={() => animate("card2")} 
                    className={`${styles.selectCards} ${styles.card2} ${Animation.card2 ? styles.card2Ani : ''}`}
                    aria-label="Playing card 2"
                />
                <div 
                    onClick={() => animate("card3")} 
                    className={`${styles.selectCards} ${styles.card3} ${Animation.card3 ? styles.card3Ani : ''}`}
                    aria-label="Playing card 3"
                />
            </div>
            
            {/* Minimalist info panel */}
            <div className={`${styles.timeline} ${fadeIn ? styles.slideInRight : ''}`}>
                <h1 className={styles.eventTitle}>{card.id}</h1>
                
                <div className={styles.eventDetails}>
                    <div className={styles.detailRow}>
                        <span className={styles.detailLabel}>DATE</span>
                        <span className={styles.detailValue}>{card.date}</span>
                    </div>
                    
                    <div className={styles.detailRow}>
                        <span className={styles.detailLabel}>TIME</span>
                        <span className={styles.detailValue}>{card.time}</span>
                    </div>
                    
                    <div className={styles.detailRow}>
                        <span className={styles.detailLabel}>VENUE</span>
                        <span className={styles.detailValue}>{card.venue}</span>
                    </div>
                </div>
                
                <div className={styles.separator} />
                
                <div className={styles.descriptionBox}>
                    <p>{card.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Eventcard