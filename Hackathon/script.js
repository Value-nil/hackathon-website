/*document.addEventListener('DOMContentLoaded', () => {
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
}*/

function onclick(){
    console.log('on clicked called');
    console.log(document.getElementById('input').innerText)
    fetch('127.0.0.1', {method: 'post', body: document.getElementById('input').innerText}).then(function(response){
        response.text().then(function(text){document.getElementById('response').innerText = text;});
    }, function(error){console.log(error);});
}
document.getElementById("sendingButton").onclick = onclick;