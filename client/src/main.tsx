import { createRoot } from 'react-dom/client'
import './app/layout/styles.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './app/routes/Routes'
import { Provider } from 'react-redux'
import { store } from './app/store/store'

createRoot(document.getElementById('root')!).render(
    <Provider store= {store}>
    <RouterProvider router={router}/>
    </Provider>

)
