import styles from './Card.module.css'

export const Card = ({title, categories, desc}) => {
    return (
        <article className={styles.littleWhiteBlock}>
                                <h3 className={styles.cardTitle}>{title}</h3>
                                <p className={styles.grayTextLite}>{categories?.map((cat, index) => <span key={index}>{cat}</span>)}</p>
                                <p className={styles.littleTextHH}>{desc}</p>
                                <button className={styles.selectedButton} type="button">Пройти заново</button>
                            </article>
    )
}
