import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const notes = [
{
	id: 0,
	content: 'HTML is easy',
	important: true
},
{
	id: 1,
	content: 'Browsers execute JS',
	important: false
},
{
	id: 2,
	content: 'GET and POST are HTTP methods',
	important: true
},
]

ReactDOM.createRoot(document.getElementById('root')).render(<App notes={notes}/>)
