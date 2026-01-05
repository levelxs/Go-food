import React from 'react'
import ReactDom from 'react-dom'

// --- Day Mode Modal Styles ---
const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 1000,
  height: '85%',
  width: '85%',
  backgroundColor: '#ffffff',
  borderRadius: '12px',
  padding: '20px',
  boxShadow: '0px 4px 25px rgba(0,0,0,0.15)',
  overflowY: 'auto',
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.35)',
  zIndex: 999
}

const CLOSE_BTN = {
  position: 'absolute',
  top: '12px',
  right: '15px',
  backgroundColor: '#ff4d4d',
  color: '#fff',
  border: 'none',
  borderRadius: '50%',
  width: '35px',
  height: '35px',
  cursor: 'pointer',
  fontSize: '18px',
  fontWeight: 'bold',
  lineHeight: '35px',
  textAlign: 'center',
  boxShadow: '0 3px 10px rgba(0,0,0,0.2)'
}

// Component Modal
const Modal = ({ children, onClose }) => {
  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <button style={CLOSE_BTN} onClick={onClose}>×</button>
        {children}
      </div>
    </>,
    document.getElementById('cart-root')
  )
}

export default Modal
