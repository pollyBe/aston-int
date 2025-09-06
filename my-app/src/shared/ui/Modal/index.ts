import { Modal as BaseModal } from './Modal'
import { ModalHeader } from './ModalHeader'
import { ModalBody } from './ModalBody'
import { ModalFooter } from './ModalFooter'

export const Modal = Object.assign(BaseModal, {
  Header: ModalHeader,
  Body: ModalBody,
  Footer: ModalFooter,
})
