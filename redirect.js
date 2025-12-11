import { ROUTES } from './routes.js';
import { startMessageRotation } from './messages.js';

document.addEventListener('DOMContentLoaded', () => {
    const messageElement = document.getElementById('message');
    const params = new URLSearchParams(window.location.search);
    const where = params.get('where');

    // If no parameter is provided
    if (!where) {
        showError(messageElement, "Ops! Não sabemos para onde ir.");
        return;
    }

    const route = ROUTES.find(r => r.key === where);

    // If route key doesn't exist
    if (!route) {
        showError(messageElement, "Ops! Esse caminho não existe.");
        return;
    }

    // Start message rotation
    startMessageRotation(route.messages, messageElement);

    // Redirect after 2.5s
    setTimeout(() => {
        window.location.href = route.url;
    }, 2500);
});

function showError(element, text) {
    // Stop any animations or loading states if needed
    // Hide the loader to indicate error state logic
    const loader = document.querySelector('.loader-container');
    if (loader) {
        loader.style.display = 'none';
    }

    element.textContent = text;
    element.classList.add('error');
}
