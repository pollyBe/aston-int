import { ThemeSwitcher } from '@/features/ThemeSwitcher/ui/ThemeSwitcher';
import styles from './Header.module.css'
export const Header = () => {
  const { container, rightWrap } = styles;
  return (
    <header>
      <div className={container}>
        <div>My-app</div>
        <div className={rightWrap}>
          <ThemeSwitcher/>
          <p>How you doin'?</p>
        </div>
      </div>
    </header>
  )
}