import { Modal } from '@/shared/ui/Modal/index.ts';
import styles from './Footer.module.css'
import { useState } from 'react';
import { Button } from '@/shared/ui/Button/Button';


export const Footer = () => {

  const { container, rightWrap, close } = styles;

  const [isModalOpen, setModalOpen] = useState(false);

  const closeHandler = () => {
    setModalOpen(!isModalOpen);
  }

  return (
    <footer>
      <div className={container}>
        <p>2025</p>
        <div className={rightWrap}>
          <Button onClick={() => setModalOpen(true)}>О проекте</Button>
          <p>by Polina Belash</p>
        </div>
        <Modal isOpen={isModalOpen} onClose={closeHandler}>
          <Modal.Header>
            <button className={close} onClick={closeHandler}>
              ×
            </button>
          </Modal.Header>
          <Modal.Body>
            <h2>About the project</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati perferendis nam iste saepe molestias dolorem explicabo harum magni nesciunt tenetur sint, enim iusto. Minima maxime facere placeat voluptatum! Doloremque, magni!</p>
          </Modal.Body>
          <Modal.Footer>...</Modal.Footer>
        </Modal>
      </div>
    </footer>
  )
}