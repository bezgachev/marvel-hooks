import React from 'react';
// eslint-disable-next-line
import { StrictMode } from 'react';
import { createRoot } from "react-dom/client";
import App from './components/app/App';
// import MarvelService from './services/MarvelService';
import './style/style.scss';

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    // eslint-disable-next-line
    // <StrictMode>
        <App />
    // eslint-disable-next-line
    // </StrictMode>
);