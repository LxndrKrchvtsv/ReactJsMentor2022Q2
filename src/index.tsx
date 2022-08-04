import { createRoot } from 'react-dom/client';
import React from 'react';

import './App.module.css';

import App from './App';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
