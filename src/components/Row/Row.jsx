import styles from './Row.module.css'

const FILTERS = {
  ALL: 'all',
  WORK_ENV: 'work_env',
  LIBRARIES: 'libraries',
  PASSED: 'passed',
  NOT_PASSED: 'not_passed',
}

export const Row = ({ activeFilter, onChange }) => {
  const setFilter = (filterValue) => onChange(filterValue)

  return (
    <div className={styles.filterRow}>
      <button
        className={activeFilter === FILTERS.ALL ? styles.littralySelectedButton : styles.notSelectedButton}
        type="button"
        onClick={() => setFilter(FILTERS.ALL)}
      >
        Все
      </button>

      <button
        className={activeFilter === FILTERS.WORK_ENV ? styles.littralySelectedButton : styles.notSelectedButton}
        type="button"
        onClick={() => setFilter(FILTERS.WORK_ENV)}
      >
        Рабочая среда
      </button>

      <button
        className={activeFilter === FILTERS.LIBRARIES ? styles.littralySelectedButton : styles.notSelectedButton}
        type="button"
        onClick={() => setFilter(FILTERS.LIBRARIES)}
      >
        Библиотеки
      </button>

      <button
        className={activeFilter === FILTERS.PASSED ? styles.littralySelectedButton : styles.notSelectedButton}
        type="button"
        onClick={() => setFilter(FILTERS.PASSED)}
      >
        Пройденые
      </button>

      <button
        className={activeFilter === FILTERS.NOT_PASSED ? styles.littralySelectedButton : styles.notSelectedButton}
        type="button"
        onClick={() => setFilter(FILTERS.NOT_PASSED)}
      >
        Не пройденые
      </button>
    </div>
  )
}
