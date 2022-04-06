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
        prop[i] = prop[i][0].toUpperCase() + prop[i].substring(1,prop[i].length)
    }
    document.querySelector('textarea').value = prop.join(' ');//выводит значение в окошко

}
document.getElementById("upper-case").addEventListener("click", ProperCase)//норм вызов

function SentenceCase(){

}
document.getElementById("upper-case").addEventListener("click", SentenceCase)