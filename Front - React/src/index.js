import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import $ from 'jquery';

window.jQuery = $;
window.$ = $;

ReactDOM.createRoot(document.getElementById('root')).render(
    <App/>
)