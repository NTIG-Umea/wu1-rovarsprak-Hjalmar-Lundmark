document.addEventListener('DOMContentLoaded', () => {
    // kolla i webbläsarens console för att se vad som händer
    console.log('Laddat');

    // välj de element vi behöver
    const message = document.querySelector('#message');
    const textbox = document.querySelector('#textbox');
    const button = document.querySelector('#translate');

    // lyssna på knapptryck

    textbox.addEventListener('change', (e) => {
        // läs in texten från textboxen
        const text = textbox.value;
        // skicka texten till funktionen för att översätta
        const translation = translate(text);
        // Hur kan du rensa textboxen?
        textbox.value = '';
        // skriv ut översättningen i message
        display(translation, message);
    });

});

const translate = (text) => {
    // översätt texten till rövarspråket
    
    let translation = ''; 

    const vokaler = "a o u i e y å ä ö";

    for(let i = 0; i < text.length; i++){
        //console.log(text[i]);
        if (vokaler.includes(text[i])) {        //(text[i] == 'a' || text[i] == 'o' || text[i] == 'u' || text[i] == 'i' || text[i] == 'e' || text[i] == 'y' || text[i] == 'å' || text[i] == 'ä' || text[i] == 'ö')
            translation = translation + text[i];
        } else{
            translation = translation + text[i] + 'o' + text[i];
        }
    }

    return translation;
};

const display = (translation, element) => {
    // skapa ett p element för texten
    const p = document.createElement('p');
    // sätt texten till översättningen
    p.textContent = translation;
    // fäst elementet
    element.insertBefore(p, element.firstChild);
}
