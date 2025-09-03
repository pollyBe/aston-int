import styles from './Header.module.css'
export const Header = () => {
  const { container } = styles;
  return (
    <header>
      <div className={container}>
        <p>My-app</p>
        <p>How you doin'?</p>
      </div>
    </header>
  )
}