import ReactDom from 'react-dom'
import classes from './Modal.module.css'

const Backdrop = (props) => {
  const {
    onClose
  } = props

  return <div className={classes.backdrop} onClick={onClose}/>
}

const ModalOverlay = (props) => {
  const {
    children
  } = props

  return (
    <div className={classes.modal}>
      <div className={classes.content}>
        {children}
      </div>
    </div>
  )
}

const portalElement = document.getElementById('overlays')

const Modal = (props) => {
  const {
    onClose,
    children
  } = props

  return (
    <>
      {ReactDom.createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {ReactDom.createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
    </>
  )
}

export default Modal