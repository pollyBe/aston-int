import * as Sentry from '@sentry/react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app/App'
import { ThemeProvider } from './shared/lib/theme/ThemeProvider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Sentry.ErrorBoundary
      fallback={
        <div className="errorWrap">
          <p>Что-то пошло не так 😢</p>
          <p>Пожалуйста, попробуйте перезагрузить страницу.</p>
        </div>
      }
    >
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Sentry.ErrorBoundary>
  </StrictMode>,
)