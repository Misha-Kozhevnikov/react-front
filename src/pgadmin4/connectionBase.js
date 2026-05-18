export const PG_ADMIN4_NAME = 'PG Admin 4'

export const DEFAULT_PG_CONNECTION = {
  host: 'localhost',
  port: 5432,
  database: 'postgres',
  user: 'postgres',
  password: '',
  ssl: false,
}

export const PG_ADMIN4_SECTIONS = [
  'Подключение к PostgreSQL',
  'Список серверов',
  'Роли и права доступа',
  'SQL-редактор',
  'История запросов',
]

export const createConnectionConfig = (overrides = {}) => ({
  ...DEFAULT_PG_CONNECTION,
  ...overrides,
})

export const getConnectionSummary = (config) => {
  const host = config?.host || DEFAULT_PG_CONNECTION.host
  const port = config?.port || DEFAULT_PG_CONNECTION.port
  const database = config?.database || DEFAULT_PG_CONNECTION.database

  return `${host}:${port}/${database}`
}
