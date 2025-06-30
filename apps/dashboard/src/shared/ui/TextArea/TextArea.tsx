import { forwardRef, TextareaHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form'
import * as styles from './TextArea.css'

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: FieldError | string
  helperText?: string
}

const TextArea = forwardRef<HTMLTextAreaElement, Props>(({ label, error, helperText, className, ...props }, ref) => {
  const errorMessage = typeof error === 'string' ? error : error?.message
  const hasError = !!errorMessage

  return (
    <div className={styles.container}>
      {label && <label className={styles.label}>{label}</label>}
      <textarea
        ref={ref}
        className={[styles.textarea, hasError && styles.textareaError, className].filter(Boolean).join(' ')}
        {...props}
      />
      {errorMessage && <span className={styles.errorMessage}>{errorMessage}</span>}
      {helperText && !errorMessage && <span className={styles.helperText}>{helperText}</span>}
    </div>
  )
})

TextArea.displayName = 'TextArea'

export default TextArea
