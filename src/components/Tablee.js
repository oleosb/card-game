import { useState, useEffect } from "react"
import Card from "./Card"
import styles from './Table.module.css'

const Table = () => {
    const endPoint = `https://www.deckofcardsapi.com/api/deck/new/draw/?count=${35}`
    const[tableCards, setTableCards] = useState([])
  
    useEffect(() => {
      fetchTable()
    }, [])
    
    
    const fetchTable = async () => {
        const response = await fetch(endPoint)
        const responseJson = await response.json()
        setTableCards(responseJson.cards)
    }
    
  return (
    <div className={styles.table}>
        <div>
            <div><img src={tableCards[0].image} alt={tableCards[0].code}/></div>
            <div><img src={tableCards[1].image} alt={tableCards[1].code}/></div>
            <div><img src={tableCards[2].image} alt={tableCards[2].code}/></div>
            <div><img src={tableCards[3].image} alt={tableCards[3].code}/></div>
            <div><img src={tableCards[4].image} alt={tableCards[4].code}/></div>
            <div><img src={tableCards[5].image} alt={tableCards[5].code}/></div>
        </div>
        <div>
            <div><img src={tableCards[0].image} alt={tableCards[0].code}/></div>
            <div><img src={tableCards[1].image} alt={tableCards[1].code}/></div>
            <div><img src={tableCards[2].image} alt={tableCards[2].code}/></div>
            <div><img src={tableCards[3].image} alt={tableCards[3].code}/></div>
            <div><img src={tableCards[4].image} alt={tableCards[4].code}/></div>
            <div><img src={tableCards[5].image} alt={tableCards[5].code}/></div>
            <div><img src={tableCards[6].image} alt={tableCards[6].code}/></div>
        </div>
    </div>
  )
}

export default Table
