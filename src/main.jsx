import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HashRouter } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import i18n from './i18n';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* https://stackoverflow.com/questions/71984401/react-router-not-working-with-github-pages */}
    <HashRouter>
      <ConfigProvider
        theme={{
          token: {
            fontFamily: "Poppins"
          }
        }}
      >
        <App />
      </ConfigProvider>
    </HashRouter>
  </React.StrictMode>,
)
