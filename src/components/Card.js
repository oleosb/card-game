import styles from './Card.module.css'

const Card = (card) => {
  return (
    <div className={styles.card}>
      <img src={card.image} alt=''/>
    </div>
  )
}

export default Card
