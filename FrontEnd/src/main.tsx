import ReactDOM from 'react-dom/client'
import { QueryProvider } from './queryProvider/QueryProvider'
import './index.css'
import { RouterProvider } from './router/RouterProvider'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryProvider>
    <RouterProvider />
  </QueryProvider>
)