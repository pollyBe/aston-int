import { useState } from 'react';
import './App.css'
import { ThemeSwitcher } from './features/ThemeSwitcher/ui/ThemeSwitcher'
import { Button } from './shared/ui/Button/Button'
import { Modal } from './shared/ui/Modal/Modal';

function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ThemeSwitcher />
      <Button onClick={() => setModalOpen(true)}>О проекте</Button>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <h2>О проекте</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis earum perspiciatis laborum culpa placeat veritatis distinctio consequatur eligendi? Quibusdam repellat earum adipisci laborum quasi aperiam possimus dolor ratione voluptatem perspiciatis.
        </p>
      </Modal>
    </>
  )
}

export default App
