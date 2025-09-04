import { Modal } from '@/shared/ui/Modal/Modal';
import styles from './Footer.module.css'
import { useState } from 'react';
import { Button } from '@/shared/ui/Button/Button';


export const Footer = () => {

  const { container, rightWrap } = styles;

  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <footer>
      <div className={container}>
        <p>2025</p>
        <div className={rightWrap}>
          <Button onClick={() => setModalOpen(true)}>О проекте</Button>
          <p>by Polina Belash</p>
        </div>
        <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
          <h2>О проекте</h2>
          <p>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem exercitationem reiciendis rem perspiciatis est voluptate sunt beatae delectus possimus ad. Consequatur porro nostrum at incidunt quas, a similique? Placeat, voluptates?
         </p>
        </Modal>
      </div>
    </footer>
  )
}