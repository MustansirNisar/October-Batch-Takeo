import { createRoot } from 'react-dom/client'
import store from './ReduxStore/Store.jsx'
import {Provider} from 'react-redux'
import App from './App.jsx'
import storee from './ReduxToolkit/storee.jsx'

createRoot(document.getElementById('root')).render(
<Provider store = {storee}>
        <App />
</Provider>

)
