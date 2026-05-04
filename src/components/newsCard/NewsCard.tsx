import styles from './NewsCard.module.css'
import type { NewsArticle } from '../../type/types'

export const NewsCard = (newsData: NewsArticle) => {
  return (
    <>
      <div className={styles.card}>
        <img src={newsData.urlToImage}></img>
        <div className={styles.cardDetail}>
          <h3>{newsData.title}</h3>
          <p>{newsData.content}</p>
          <div className={styles.a}>
            <a href={newsData.url} rel="noreferror" target='_blank' className={styles.link}>Details</a>
          </div>
        </div>
      </div>
    </>
  )
}