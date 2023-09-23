import { useState, useEffect } from "react"
import styles from './Table.module.css'

const Table = () => {
    const endPoint = `https://www.deckofcardsapi.com/api/deck/new/draw/?count=${36}`
    const[tableCards, setTableCards] = useState([])
  
    useEffect(() => {
      fetch(endPoint, {
        method: 'GET',
        headers: {
          'Content-Type': 'aplication/json',
        },
      })
      .then((resp) => resp.json())
      .then((data) => {
        setTableCards(data)
      })
      .catch((err) => console.log(err))
    }, [])
    
    if(tableCards.success === true){
      return <div className={styles.table}>
      {(() => {
        let rows = []
        let n=4
        let cardC = []
        
        for(let i=1; i<=n; i++){
          rows.push(<div key={i}>
            {(() => {
              let columns = []
              for(let j=1; j<=2*n-1; j++){
                if(j>=n-(i-1) && j<=n+(i-1)){
                  columns.push(<div key={j}><img src={tableCards.cards[cardC.length].image} alt=''/></div>)
                  cardC.push('+1')
                }
              }
              return columns
            })()}
          </div>)
        }
        return rows
      })()}
    </div>
    }
  
}

export default Table
