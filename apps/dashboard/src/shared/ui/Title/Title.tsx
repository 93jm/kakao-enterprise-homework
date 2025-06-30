import * as styles from './Title.css'

const Title = ({ children }: { children: React.ReactNode }) => {
  return <h1 className={styles.Title}>{children}</h1>
}

export default Title
