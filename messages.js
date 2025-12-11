export function startMessageRotation(messages, element) {
    if (!messages || messages.length === 0) {
        element.textContent = "Carregando...";
        return null;
    }

    // Initial message
    element.textContent = messages[0];

    let index = 0;
    const intervalId = setInterval(() => {
        index = (index + 1) % messages.length;
        element.style.opacity = '0';

        setTimeout(() => {
            element.textContent = messages[index];
            element.style.opacity = '1';
        }, 200);

    }, 1500);

    return intervalId;
}
