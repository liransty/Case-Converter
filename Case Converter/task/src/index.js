function UpperCase() {
    let up = document.querySelector('textarea').value.toUpperCase().split(' ');
    document.querySelector('textarea').value = up.join(' ');
}

document.getElementById("upper-case").addEventListener("click", UpperCase);

function LowerCase() {
    let low = document.querySelector('textarea').value.toLowerCase().split(' ');
    document.querySelector('textarea').value = low.join(' ');
}

document.getElementById("lower-case").addEventListener("click", LowerCase);

function ProperCase() {
    let prop = document.querySelector('textarea').value.split(' ');//обращается к ид окошка
    for (let i = 0; i < prop.length; i++) {
        prop[i] = prop[i][0].toUpperCase() + prop[i].substring(1, prop[i].length)
    }
    document.querySelector('textarea').value = prop.join(' ');//выводит значение в окошко
}

document.getElementById("upper-case").addEventListener("click", ProperCase)//норм вызов

function SentenceCase() {
    let prop = document.querySelector('textarea').value // получаем текст
    let prop2 = ""
    let isLastDot = true
    for (let i = 0; i < prop.length; i++) {
        if (isLastDot === true) {
            prop2 = prop2 + prop[i].toUpperCase()
        } else {
            prop2 = prop2 + prop[i].toLowerCase()
        }
        isLastDot = prop[i - 1] === '.' && prop[i] === ' '; //'. ab'
    }
    document.querySelector('textarea').value = prop2;//выводит значение в окошко
}

document.getElementById("upper-case").addEventListener("click", SentenceCase)

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

function download1() {
    let text = document.getElementById("text").value;
    let filename = "text.txt"
    download(filename, text);
}

document.getElementById("save-text-file").addEventListener("click", download1, false);