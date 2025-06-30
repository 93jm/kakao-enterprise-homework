import * as styles from './Table.css'

interface Column<T> {
  id: string
  label: string
  width?: number
  render?: (item: T) => React.ReactNode
}

interface Props<T> {
  columns: Column<T>[]
  data: T[]
  rowKey: keyof T
  className?: string
}

const Table = <T extends Record<string, any>>({ columns, data, rowKey, className }: Props<T>) => {
  return (
    <table className={`${styles.table} ${className || ''}`}>
      <thead className={styles.thead}>
        <tr>
          {columns.map(column => (
            <th key={column.id} className={styles.th} style={column.width ? { width: column.width } : undefined}>
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item[rowKey]} className={styles.tr}>
            {columns.map(column => (
              <td key={`${item[rowKey]}-${column.id}`} className={styles.td}>
                {column.render ? column.render(item) : item[column.id]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
