import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import App from './App';
import './index.css';
import './modules/i18n/services/i18n';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode><App /></StrictMode>
);