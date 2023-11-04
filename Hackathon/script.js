document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('message-form');
    const input = document.getElementById('input');
    const messages = document.getElementById('messages');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        if (!input.value) return;
        const message = createMessage(input.value, 'user');
        messages.appendChild(message);
        input.value = '';
        const response = await fetchGPT(input.value);
        const reply = createMessage(response, 'gpt');
        messages.appendChild(reply);
    });
});

function createMessage(text, type) {
    const message = document.createElement('div');
    message.classList
}