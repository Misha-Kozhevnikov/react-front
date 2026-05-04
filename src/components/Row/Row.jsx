import styles from './Row.module.css'

export const Row = () => {
    return (
        <div className={styles.filterRow}>
                                      <button className={styles.littralySelectedButton} type="button">Все</button>
                                      <button className={styles.notSelectedButton} type="button">Рабочая среда</button>
                                      <button className={styles.notSelectedButton} type="button">Библиотеки</button>
                                      <button className={styles.notSelectedButton} type="button">Пройденые</button>
                                      <button className={styles.notSelectedButton} type="button">не пройденые</button>
                                  </div>
    )
}
