let bigbox = document.getElementById('inp');

function clicka(a) {
    bigbox.value += a
}

function equalto() {
    bigbox.value = eval(bigbox.value)
}

function clearAll() {

    bigbox.value = ""
}