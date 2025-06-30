import { forwardRef, InputHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form'
import * as styles from './Input.css'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: FieldError | string
  helperText?: string
}

const Input = forwardRef<HTMLInputElement, Props>(({ label, error, helperText, className, ...props }, ref) => {
  const errorMessage = typeof error === 'string' ? error : error?.message
  const hasError = !!errorMessage

  return (
    <div className={styles.container}>
      {label && <label className={styles.label}>{label}</label>}
      <input
        ref={ref}
        className={[styles.input, hasError && styles.inputError, className].filter(Boolean).join(' ')}
        {...props}
      />
      {errorMessage && <span className={styles.errorMessage}>{errorMessage}</span>}
      {helperText && !errorMessage && <span className={styles.helperText}>{helperText}</span>}
    </div>
  )
})

Input.displayName = 'Input'

export default Input
