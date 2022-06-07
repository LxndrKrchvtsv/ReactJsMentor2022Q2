import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App';
import { CreateElementComponent } from "./components/CreateElementComponent";

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render([CreateElementComponent, <App />]);
