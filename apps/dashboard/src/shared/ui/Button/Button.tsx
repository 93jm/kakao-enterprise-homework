import { ReactNode, ButtonHTMLAttributes } from 'react'
import * as styles from './Button.css'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'danger'
  disabled?: boolean
}

const Button = ({ children, variant = 'primary', disabled = false, className, ...props }: Props) => {
  const buttonClass = [styles.button, styles.variants[variant], disabled && styles.disabled, className]
    .filter(Boolean)
    .join(' ')

  return (
    <button className={buttonClass} disabled={disabled} {...props}>
      {children}
    </button>
  )
}

export default Button
