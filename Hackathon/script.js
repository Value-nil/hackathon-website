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
function onclickfortune(){
    console.log('fortune button pressed');
    const poem = Math.floor(Math.random()* 100) % 20 + 1 ;
    const poems = {
        1: 'Libros abiertos<br> el saber es un tesoro<br> estudia con pasión.',
        2: 'Páginas en blanco<br> tu mente es un lienzo<br> pinta con conocimiento.',
        3: 'Cada palabra cuenta<br> cada letra es un paso<br> el estudio te guía.',
        4: 'Los libros son faros<br> en la oscuridad del no saber<br> estudia y encontrarás.',
        5: 'Trazos de tinta<br> forman palabras sabias<br> en cada libro nuevo.',
        6: 'El estudio es la llave<br> abre puertas a futuros brillantes<br> nunca dejes de aprender.',
        7: 'Las horas se deslizan<br> mientras la mente se llena<br> el conocimiento florece.',
        8: 'Concentración profunda<br> el estudio es meditación<br> la mente se expande.',
        9: 'Aprender es crecer<br> cada página es un paso<br> hacia el éxito.+',
        10: 'El tiempo invertido<br> en libros y cuaderno<br>  es un tesoro ganado.',
        11: 'Persiste en el estudio<br> cosecharás frutos dulces<br> en el jardín del conocimiento.',
        12: 'El sudor del esfuerzo<br> se convierte en la dulce miel<br> del entendimiento.',
        13: 'Los desafíos son lecciones<br> cada error es un maestro<br> en el viaje del estudio.',
        14: 'El estudio es la brújula<br> que guía tu camino<br> hacia un horizonte brillante.',
        15: 'Las palabras escritas<br> son estrellas en la noche<br> del vasto universo del conocimiento.',
        16: 'Cada página es un puente<br> que te lleva a nuevos mundos<br> explora con pasión.',
        17: 'El estudio es el cimiento<br> en el edificio del éxito<br> construye con determinación.',
        18: 'En cada pregunta<br> y en cada respuesta hallarás<br> la belleza del estudio.',
        19: 'Las hojas en blanco<br> esperan tus pensamientos<br> llénalas de sabiduría.',
        20: 'La mente inquieta<br> encuentra paz en el estudio<br> y crece sin fin.'
    }
    document.getElementById('haikuPoem').innerText = poems[poem];

}
document.getElementById("sendingButton").onclick = onclick;