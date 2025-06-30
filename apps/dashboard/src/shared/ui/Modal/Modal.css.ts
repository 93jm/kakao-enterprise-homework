import { style } from '@vanilla-extract/css'

export const backdrop = style({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
  overflowY: 'auto',
  padding: '20px'
})

export const modalContainer = style({
  position: 'relative',
  backgroundColor: 'white',
  borderRadius: '8px',
  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  maxWidth: '90vw',
  maxHeight: '90vh',
  width: 'auto',
  minWidth: '320px',
  margin: 'auto',
  overflow: 'hidden'
})

export const modalContent = style({
  maxHeight: '80vh',
  overflowY: 'auto',
  padding: '24px'
})

export const closeButton = style({
  position: 'absolute',
  top: '16px',
  right: '16px',
  background: 'none',
  border: 'none',
  fontSize: '20px',
  cursor: 'pointer',
  padding: '4px',
  borderRadius: '4px',
  color: '#666',

  ':hover': {
    backgroundColor: '#f5f5f5'
  }
})

export const stackedModal = style({
  zIndex: 1001,
  backgroundColor: 'rgba(0, 0, 0, 0.2)'
})
