import styles from './Footer.module.css'
export const Footer = () => {
  const { container } = styles;
  return (
    <footer>
      <div className={container}>
        <p>2025</p>
        <p>by Polina Belash</p>
      </div>
    </footer>
  )
}