import React from 'react';
import ReactDOM from 'react-dom';
import Widgets from './widgets';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("main");
    ReactDOM.render(<Widgets />, root);
});