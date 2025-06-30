import * as styles from './Text.css'

const Text = ({ children }: { children: React.ReactNode }) => {
  return <h1 className={styles.Title}>{children}</h1>
}

export default Text
