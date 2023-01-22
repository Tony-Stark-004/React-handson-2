// import ReactDom from "react-dom"
import {createRoot} from "react-dom/client"
import './index.css'
import App from './App'

// ReactDom.render(
//         <App></App>, 
//         document.getElementById('root')
// )

const domNode = document.getElementById('root')
const root = createRoot(domNode)
root.render(<App />)