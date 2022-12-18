import React from 'react'
import { createPortal } from 'react-dom'

const ModalContainer = ({children}) => {
  return createPortal(
    <>{children}</>,document.getElementById("modals-root")
  )
}

export default ModalContainer
